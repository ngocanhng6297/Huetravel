(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{127:function(e,t,n){"use strict";t.a=n.p+"assets/img/flower.30323aa8579c2171493519aafd942e43.png"},128:function(e,t,n){"use strict";t.a=n.p+"assets/img/rock.2d506a59ea4729f0801b8a78617d483b.png"},129:function(e,t,n){"use strict";t.a=n.p+"assets/img/location.5f42084df6b646e665d17f099f380ca3.png"},130:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M106 0v512l150-145.789L406 512V0z"});t.a=function(e){return r.createElement("svg",a({viewBox:"0 0 512 512"},e),o)}},131:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n(17),s=n.n(i),c=n(16),u=n(41),l=n(13),f=n(29);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.a=Object(c.b)(null,(function(e){return{onChangeAvatar:function(t){return e(Object(f.a)(t))}}}))(Object(o.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=h(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultImg:defaultImg};return m(this,i),(e=o.call(this,t)).state={filePath:"",fileName:"",isVisibled:!0},e.toastNoti=l.i.bind(v(e)),e.uploadFile=e.uploadFile.bind(v(e)),e}return t=i,(n=[{key:"UNSAFE_componentWillUpdate",value:function(e,t){var n=this.props;e.reset&&e.reset!=n.reset&&this.setState({filePath:""}),this.toastNoti(t)}},{key:"uploadFile",value:function(e){var t=this;e.preventDefault(),this.setState({isVisibled:!1,event:e.target.files[0]},(function(){var e=t.state.event,n=new FormData;n.append("file",e);var r="/review"!=t.props.history.location.pathname;s.a.post("/api/upload/photo",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var n=e.data.filePath;if(t.setState({filePath:n,isVisibled:!0}),t.props.onChange&&t.props.onChange(n),r){var a={avatar:n};s.a.post("/api/user/change-avatar",a).then((function(e){t.props.onChangeAvatar(n),t.props.socket.emit("changeAvatar",t.props.userId),t.setState({successMessage:e.data.message})})).catch((function(e){t.setState({errorMessage:e.message||e.response.data.message})}))}})).catch((function(e){t.setState({errorMessage:e.message||e.response.data.message,isVisibled:!0})}))}))}},{key:"render",value:function(){var e=this.state.isVisibled,t=this.state.filePath?this.state.filePath:this.props.defaultImg;return a.a.createElement("div",{className:"photo-upload"},e&&a.a.createElement("input",{className:"photo-upload__btn",disabled:this.props.disabled,type:"file",onChange:this.uploadFile,required:!0}),e?a.a.createElement("img",{src:t,className:"photo-upload__photo",alt:"Photo"}):a.a.createElement("div",{className:"photo-upload__loading"},a.a.createElement(u.a,null)))}}])&&d(t.prototype,n),r&&d(t,r),i}(r.Component)))},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n(16),s=(n(40),n(127)),c=n(128),u=n(129),l=n(130),f=n(2),p=n(13);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(i.b)((function(e){return{isLoggedIn:e.currentUser.isLoggedIn,currentUser:e.currentUser.userData,isOpen:e.popup.isOpen,socket:e.socket.socket}}),(function(e){return{onOpen:function(){return e({type:f.h})}}}))(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(f,e);var t,n,r,i=h(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=i.call(this,e)).state={isBookmark:"bookmark--unnoted",successMessage:"",errorMessage:""},t.bookmark=p.a.bind(v(t)),t.toastNoti=p.i.bind(v(t)),t.isUserInArr=p.e.bind(v(t)),t.isBookmark=t.isBookmark.bind(v(t)),t}return t=f,(n=[{key:"componentDidMount",value:function(){var e=this.isBookmark(this.state,this.props);this.setState({isBookmark:e})}},{key:"isBookmark",value:function(e,t){var n=t.isLoggedIn,r=t.currentUser,a=t.info,o="bookmark--unnoted";return n&&a.notes&&(o=this.isUserInArr(a.notes,r.id)?"bookmark--noted":"bookmark--unnoted"),o}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){if(this.toastNoti(t),e.isLoggedIn||(t.isBookmark="bookmark--unnoted"),e.isLoggedIn&&!this.props.isLoggedIn){var n=this.isBookmark(t,e);t.isBookmark=n}}},{key:"render",value:function(){var e=this,t=this.state.isBookmark,n=this.props.info,r="/destinations/"+n._id;return a.a.createElement("div",{className:"dest-box"},a.a.createElement("div",{className:"dest-box__bookmark"},a.a.createElement(l.a,{onClick:function(){return e.bookmark(n._id,e.props.isUserProfile)},className:t})),a.a.createElement("div",{className:"dest-box__react"},a.a.createElement("div",{className:"react-box"},a.a.createElement("img",{src:s.a,className:"react-box__icon",alt:"Flower"}),a.a.createElement("span",{className:"react-box__info"},n.flowersTotal)),a.a.createElement("div",{className:"react-box"},a.a.createElement("img",{src:c.a,className:"react-box__icon",alt:"Rock"}),a.a.createElement("span",{className:"react-box__info"},n.rocksTotal))),a.a.createElement("img",{src:n.avatar,className:"dest-box__photo",alt:"Destination photo"}),a.a.createElement("div",{className:"dest-box__info"},a.a.createElement("h4",{className:"dest-box-info__heading"},n.name),a.a.createElement("div",{className:"dest-box-info__address"},a.a.createElement("img",{src:u.a,className:"dest-box-info__address-icon",alt:"Location"}),a.a.createElement("span",{className:"dest-box-info__address-info"},n.address)),a.a.createElement(o.b,{to:r,className:"dest-box-info__btn"},a.a.createElement("div",{className:"btn-arr btn-arr--right"},"Know more ",a.a.createElement("span",{className:"btn-arr--yellow"},"→")," "))))}}])&&d(t.prototype,n),r&&d(t,r),f}(r.Component))},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n(16),s=n(131),c=n(17),u=n.n(c),l=(n(40),n(13));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=Object(o.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,o=d(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={userId:e.match.params.userId,userName:e.userName,placeholder:"",isVisibled:!1,isDisabled:!0,btnChange:"Change",btnDisabled:"",inputStyle:"input u-margin-bottom-tiny "},t.changeHandler=t.changeHandler.bind(h(t)),t.submitHandler=t.submitHandler.bind(h(t)),t.validateName=l.n.bind(h(t)),t.toastNoti=l.i.bind(h(t)),t.trimValue=l.j.bind(h(t)),t.inputHandler=t.inputHandler.bind(h(t)),t}return t=i,(n=[{key:"UNSAFE_componentWillUpdate",value:function(e,t){var n=this.state;e.userName&&e.userName!=n.userName&&(t.userName=e.userName),this.toastNoti(t)}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.props.socket.on("returnUserProfileOf".concat(this.state.userId),(function(t){t.error?e.setState({errorMessage:t.error}):e.setState({userName:t.name})}))}},{key:"inputHandler",value:function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}},{key:"changeHandler",value:function(){var e="Change"==this.state.btnChange?"Later":"Change";this.setState({isVisibled:!this.state.isVisibled,btnChange:e,isDisabled:!this.state.isDisabled})}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var n=this.state.newUserName;if(this.validateName(n,"nameInput","input u-margin-bottom-tiny input--error")){this.setState({btnDisabled:"disabled",isDisabled:!0});var r={name:Object(l.j)(n)};u.a.post("/api/user/change-name",r).then((function(e){t.props.socket.emit("changeName",t.props.userId),t.setState({userName:r.name,successMessage:e.data.message,isVisibled:!1,btnDisabled:"",isDisabled:!0,btnChange:"Change",inputStyle:"input u-margin-bottom-tiny "})})).catch((function(e){t.setState({errorMessage:e.message||e.response.data.message,btnDisabled:"",isDisabled:!1,inputStyle:"input u-margin-bottom-tiny input--error"})}))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.isDisabled,r=t.userName,o=t.btnChange,i=t.isVisibled,s=t.btnDisabled,c=t.inputStyle,u=t.placeholder,l=this.props.isCurrentUser,f=n?"disabled":"";return a.a.createElement("div",{className:"name-change-form"},a.a.createElement("form",{onSubmit:this.submitHandler},a.a.createElement("h4",{className:"form__title heading-tertiary"},"NAME"),i?a.a.createElement("input",{ref:function(t){return e.nameInput=t},name:"newUserName",className:c,placeholder:u,defaultValue:r,onChange:this.inputHandler,disabled:f}):a.a.createElement("input",{ref:function(t){return e.currentUser=t},name:"newUserName",className:"input input--primary u-margin-bottom-tiny",value:r,disabled:f})),l&&a.a.createElement("button",{className:"btn-page-control u-margin-right-tiny u-margin-top-small",onClick:this.changeHandler,disabled:s},o),l&&i&&a.a.createElement("button",{type:"submit",className:"btn-page-control u-margin-top-small",onClick:this.submitHandler,disabled:s},"Change"))}}])&&p(t.prototype,n),r&&p(t,r),i}(r.Component)),g=n(127),_=n(128);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,r,o=N(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"render",value:function(){var e=this.props.flowers>1?"".concat(this.props.flowers," flowers"):"".concat(this.props.flowers," flower"),t=this.props.rocks>1?"".concat(this.props.rocks," rocks"):"".concat(this.props.rocks," rock");return a.a.createElement("div",{className:"assets"},a.a.createElement("h4",{className:"assets__title heading-tertiary"},"ASSETS"),a.a.createElement("div",{className:"assets__content"},a.a.createElement("div",{className:"assets__box"},a.a.createElement("img",{src:g.a,alt:"flower",className:"assets__box-icon"}),a.a.createElement("span",{className:"assets__box-name"},e)),a.a.createElement("div",{className:"assets__box"},a.a.createElement("img",{src:_.a,alt:"rock",className:"assets__box-icon"}),a.a.createElement("span",{className:"assets__box-name"},t))))}}])&&k(t.prototype,n),r&&k(t,r),i}(r.Component);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var a=I(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,e);var t,n,r,o=R(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={isVisibled:!1,btnDisabled:"",btnChange:"Change",isDisabled:!1,placeholder:"",inputStyle:"input u-margin-bottom-tiny "},t.changeHandler=t.changeHandler.bind(U(t)),t.submitHandler=t.submitHandler.bind(U(t)),t.inputHandler=t.inputHandler.bind(U(t)),t.toastNoti=l.i.bind(U(t)),t.validatePwd=l.o.bind(U(t)),t.checkMatchPwd=l.b.bind(U(t)),t}return t=i,(n=[{key:"UNSAFE_componentWillUpdate",value:function(e,t){this.toastNoti(t)}},{key:"inputHandler",value:function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}},{key:"changeHandler",value:function(){var e="Change"==this.state.btnChange?"Later":"Change";this.setState({isVisibled:!this.state.isVisibled,btnChange:e,placeholder:"",inputStyle:"input u-margin-bottom-tiny "})}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.currentPassword,a=n.checkNewPassword,o=n.newPassword,i="input u-margin-bottom-tiny input--error",s=this.validatePwd(r,"currentPwd",i),c=this.validatePwd(a,"checkNewPassword",i),l=this.validatePwd(o,"newPwd",i),f=!1;if(c&&l&&(f=this.checkMatchPwd(o,"newPwd",a,"checkNewPassword",i)),s&&c&&l&&f){this.setState({btnDisabled:"disabled",isDisabled:!this.state.isDisabled});var p={currentPassword:this.state.currentPassword,newPassword:this.state.newPassword};u.a.post("/api/user/change-password",p).then((function(e){t.setState({successMessage:e.data.message,btnDisabled:"",isDisabled:!1,isVisibled:!1,btnChange:"Change",inputStyle:"input u-margin-bottom-tiny "})})).catch((function(e){t.setState({errorMessage:e.response.data.message,btnDisabled:"",isDisabled:!1,inputStyle:"input u-margin-bottom-tiny input--error"})}))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.isVisibled,r=t.btnDisabled,o=t.btnChange,i=t.isDisabled,s=t.placeholder,c=t.inputStyle,u=i?"disabled":"";return a.a.createElement("div",{className:"pwd-change-form"},a.a.createElement("form",null,a.a.createElement("h4",{className:"form__title heading-tertiary"},"Change password"),a.a.createElement("div",{className:"form__content"},n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{ref:function(t){return e.currentPwd=t},type:"password",name:"currentPassword",className:c,onChange:this.inputHandler,disabled:u,placeholder:s||"Currrent password"}),a.a.createElement("input",{ref:function(t){return e.newPwd=t},type:"password",name:"newPassword",className:c,placeholder:s||"New password",disabled:u,onChange:this.inputHandler}),a.a.createElement("input",{ref:function(t){return e.checkNewPassword=t},type:"password",name:"checkNewPassword",className:c,placeholder:s||"New password confirmation",disabled:u,onChange:this.inputHandler})))),a.a.createElement("button",{className:"btn-page-control u-margin-right-tiny u-margin-top-small",onClick:this.changeHandler,disabled:r},o),n&&a.a.createElement("button",{type:"submit",className:"btn-page-control u-margin-top-small",onClick:this.submitHandler,disabled:r},"Change"))}}])&&C(t.prototype,n),r&&C(t,r),i}(r.Component),T=n(28),M=n(132);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var a=z(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=Object(o.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(i,e);var t,n,r,o=L(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:title};return A(this,i),(e=o.call(this,t)).state={userId:t.match.params.userId},e}return t=i,(n=[{key:"render",value:function(){var e=this.props.title,t=this.props[e],n="".concat(this.state.userId,"/").concat(e);if(t&&t.length){var r=t.length>4;return t=t.slice(0,4),a.a.createElement("div",{className:"slick"},a.a.createElement("div",{className:"slick__title"},a.a.createElement("h5",{className:"heading-tertiary"},e),r&&a.a.createElement(T.b,{to:n,className:"btn-arr btn-arr--right"},"See all →")),a.a.createElement("div",{className:"slick__content"},t.map((function(e){if(e)return a.a.createElement(M.default,{isUserProfile:!0,key:e._id,info:e})}))))}return a.a.createElement("div",{className:"slick"},a.a.createElement("div",{className:"slick__title"},a.a.createElement("h5",{className:"heading-tertiary"},e)),a.a.createElement("div",{className:"slick__content"},a.a.createElement("h2",{className:"u-center-text u-text-bold u-center-el u-color-light"},"No post found")))}}])&&F(t.prototype,n),r&&F(t,r),i}(r.Component));function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var a=Z(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(i.b)((function(e){return{currentUser:e.currentUser.userData,socket:e.socket.socket}}))(Object(o.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(i,e);var t,n,r,o=Q(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={userId:e.match.params.userId,user:{}},t.updateSocket=l.k.bind(Y(t)),t.updateProfile=t.updateProfile,t}return t=i,(n=[{key:"componentDidMount",value:function(){this.props.socket.emit("getUserProfile",this.state.userId),this.updateProfile()}},{key:"updateProfile",value:function(){var e=this;this.props.socket.on("returnUserProfileOf".concat(this.state.userId),(function(t){t.error?e.setState({errorMessage:t.error}):e.setState({user:t})}))}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){e.match.params.userId!=this.props.match.params.userId&&(e.socket.emit("getUserProfile",e.match.params.userId),this.updateSocket("user","returnUserProfileOf".concat(e.match.params.userId)))}},{key:"componentWillUnmount",value:function(){this.props.socket.off("returnUserProfileOf".concat(this.state.userId))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.userId,r=n==this.props.currentUser.id;return a.a.createElement("section",{className:"section-user-profile u-margin-horizontal-5"},a.a.createElement("div",{className:"user__info u-margin-bottom-medium"},r&&a.a.createElement(s.a,{socket:this.props.socket,userId:n,isCurrentUser:r,defaultImg:t.avatar,className:"user__avatar"}),!r&&a.a.createElement("div",{className:"photo-upload"},a.a.createElement("img",{src:t.avatar,className:"photo-upload__photo",alt:"Photo"})),a.a.createElement(v,{socket:this.props.socket,userId:n,isCurrentUser:r,userName:t.name}),a.a.createElement(P,{flowers:t.flowersTotal,rocks:t.rocksTotal}),r&&a.a.createElement(H,null)),a.a.createElement("div",{className:"user__posts"},a.a.createElement(J,{reviews:t.reviews,title:"reviews"}),a.a.createElement(J,{notes:t.notes,title:"notes"})))}}])&&K(t.prototype,n),r&&K(t,r),i}(r.Component)))}}]);