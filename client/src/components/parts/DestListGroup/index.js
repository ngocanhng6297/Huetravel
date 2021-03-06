import React, { Component, lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import CLoading from "../../pieces/Loading";
import CDestCategories from "./DestCategories";
import CSearchForm from "./SearchForm";
import CDropdown from "./Dropdown";

const CDestBox = lazy(() => import("../../pieces/DestBox"));
import CPageControl from "./PageControl";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    socket: state.socket.socket,
  };
};

export default connect(mapStateToProps)(
  withRouter(
    class DestListGroup extends Component {
      constructor(props = { title }) {
        super(props);

        this.state = {
          userId: props.match.params.userId,
          requesting: false,
          postInQueue: false,
          countInQueue: false,
          posts: [],
          isLoading: true,
          count: 0, // TableControls
          pageIndex: 1,
          filter: "flowers",
          category: "all",
          search: "",
        };

        this.setQueryConfig = this.setQueryConfig.bind(this);
        this.getTotalPages = this.getTotalPages.bind(this);
        this.getCategoryPosts = this.getCategoryPosts.bind(this);
      }

      componentDidMount() {
        let state = this.state;
        this.getTotalPages(state);
        this.getCategoryPosts(state);
      }

      UNSAFE_componentWillMount() {
        this.props.socket.on(`hasChangePosts`, () => {
          this.getCategoryPosts(this.state);
          this.getTotalPages(this.state);
        });
      }

      componentWillUnmount() {
        this.props.socket.off(`hasChangePosts`);
      }

      UNSAFE_componentWillUpdate(nextProps, nextState) {
        let oldState = this.state;
        let mustCallList = false;
        let mustCallCount = false;

        if (nextState.pageIndex != oldState.pageIndex) {
          nextState.isLoading = true
          mustCallList = true;
        }

        if (nextState.search != oldState.search) {
          nextState.isLoading = true
          mustCallList = true;
          mustCallCount = true;
        }

        if (nextState.filter != oldState.filter) {
          nextState.isLoading = true
          mustCallList = true;
        }

        if (nextState.category != oldState.category) {
          nextState.isLoading = true
          mustCallList = true;
          mustCallCount = true;
        }

        if (mustCallList) {
          this.getCategoryPosts(nextState);
        }

        if (mustCallCount) {
          this.getTotalPages(nextState);
        }
      }

      setQueryConfig(config = { pageIndex, search, filter, category }) {
        this.setState(config);
      }

      getTotalPages(state) {
        let { search, filter, category, userId } = state;
        let queryParams = {
          search,
          sortBy: filter,
        };

        let url = `/api/post/all/${category}`;

        if (this.props.title) {
          queryParams.title = this.props.title;
          url = `/api/post/user/${userId}/${category}`;
        }

        axios
          .request({
            url: url,
            method: "GET",
            params: queryParams,
          })
          .then((res) => {
            let count = res.data.postsTotal || 0;
            this.setState({ count });
          });
      }

      getCategoryPosts(state) {
        if (this.state.requesting) {
          this.setState({ postInQueue: true });
          return;
        }

        this.setState({ requesting: true });
        let { pageIndex, search, filter, category, userId } = state;

        let queryParams = {
          pageIndex,
          search,
          sortBy: filter,
        };

        let url = `/api/post/all/${category}`;

        if (this.props.title) {
          queryParams.title = this.props.title;
          url = `/api/post/user/${userId}/${category}`;
        }

        axios
          .request({
            url: url,
            method: "GET",
            params: queryParams,
          })
          .then((res) => {
            let posts = res.data.posts;
            this.setState({ posts });
          })
          .finally(() => {
            this.setState({ requesting: false, isLoading: false });
            if (this.state.postInQueue) {
              this.setState({ postInQueue: false });
              this.getCategoryPosts(this.state);
            }
          });
      }

      render() {
        let { count, pageIndex, posts, isLoading } = this.state;

        return (
          <>
            <div className="dest-categories-container u-margin-bottom-medium">
              <CDestCategories
                count={count}
                onChange={(value) => {
                  this.setQueryConfig({ category: value });
                }}
              />
            </div>
            <div className="filter-container u-margin-horizontal-5 u-margin-bottom-medium">
              <CSearchForm
                onChange={(value) => {
                  this.setQueryConfig({ search: value });
                }}
              />
              <h3 className="heading-secondary">{this.props.title}</h3>
              <CDropdown
                onChange={(value) => {
                  this.setQueryConfig({ filter: value });
                }}
              />
            </div>
            <div className="dest-list-container u-margin-horizontal-5 u-margin-bottom-big">
              {isLoading ? (
                <CLoading />
              ) : (
                <Suspense fallback={<CLoading />}>
                  {!posts.length ? (
                    <h2 className="u-center-text u-text-bold u-center-el u-color-light">
                      No post found
                    </h2>
                  ) : (
                    posts.map((post, index) => {
                      return (
                        <Suspense key={index} fallback={<CLoading />}>
                          <CDestBox isUserProfile={false} info={post} />
                        </Suspense>
                      );
                    })
                  )}
                </Suspense>
              )}
            </div>
            <div className="page-control-container u-margin-bottom-huge">
              <CPageControl
                count={count}
                pageIndex={pageIndex}
                setQueryConfig={this.setQueryConfig}
              />
            </div>
          </>
        );
      }
    }
  )
);
