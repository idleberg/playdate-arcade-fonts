"use strict";
exports.id = "component---cache-dev-404-page-js";
exports.ids = ["component---cache-dev-404-page-js"];
exports.modules = {

/***/ "./.cache/dev-404-page.js":
/*!********************************!*\
  !*** ./.cache/dev-404-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'query-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





class Dev404Page extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    const {
      data,
      location
    } = this.props;
    const pagePaths = data.allSitePage.nodes.map(node => node.path);
    const urlState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'query-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(location.search);
    const initialPagePathSearchTerms = urlState.filter ? urlState.filter : ``;
    this.state = {
      hasMounted: false,
      showCustom404: ({}).GATSBY_DISABLE_CUSTOM_404 || false,
      initPagePaths: pagePaths,
      pagePathSearchTerms: initialPagePathSearchTerms,
      pagePaths: this.getFilteredPagePaths(pagePaths, initialPagePathSearchTerms)
    };
    this.showCustom404 = this.showCustom404.bind(this);
    this.handlePagePathSearch = this.handlePagePathSearch.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      hasMounted: true
    });
  }

  showCustom404() {
    this.setState({
      showCustom404: true
    });
  }

  handleSearchTermChange(event) {
    const searchValue = event.target.value;
    this.setSearchUrl(searchValue);
    this.setState({
      pagePathSearchTerms: searchValue
    });
  }

  handlePagePathSearch(event) {
    event.preventDefault();
    const allPagePaths = [...this.state.initPagePaths];
    this.setState({
      pagePaths: this.getFilteredPagePaths(allPagePaths, this.state.pagePathSearchTerms)
    });
  }

  getFilteredPagePaths(allPagePaths, pagePathSearchTerms) {
    const searchTerm = new RegExp(`${pagePathSearchTerms}`);
    return allPagePaths.filter(pagePath => searchTerm.test(pagePath));
  }

  setSearchUrl(searchValue) {
    const {
      location: {
        pathname,
        search
      }
    } = this.props;
    const searchMap = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'query-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(search);
    searchMap.filter = searchValue;
    const newSearch = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'query-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(searchMap);

    if (search !== `?${newSearch}`) {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)(`${pathname}?${newSearch}`, {
        replace: true
      });
    }
  }

  render() {
    if (!this.state.hasMounted) {
      return null;
    }

    const {
      pathname
    } = this.props.location;
    let newFilePath;
    let newAPIPath;

    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`;
    } else if (pathname.slice(0, 4) === `/api`) {
      newAPIPath = `src${pathname}.js`;
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`;
    } else {
      newFilePath = `src/pages${pathname}.js`;
    }

    return this.state.showCustom404 ? this.props.custom404 : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Gatsby.js development 404 page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "There's not a page or function yet at", ` `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, pathname)), this.props.custom404 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.showCustom404
    }, "Preview custom 404 page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "src/pages/404.js"), "."), newFilePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Create a page at this url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a React.js component like the following in your site directory at", ` `, "\"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, newFilePath), "\"", ` `, "and then refresh to show the new page component you created."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
      style: {
        border: `1px solid lightgray`,
        padding: `8px`,
        maxWidth: `80ch`,
        background: `#f3f3f3`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      dangerouslySetInnerHTML: {
        __html: `import * as React from "react"

export default function Component () {
  return "Hello world"
}`
      }
    }))), newAPIPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Create an API function at this url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a javascript file like the following in your site directory at", ` `, "\"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, newAPIPath), "\"", ` `, "and refresh to execute the new API function you created."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
      style: {
        border: `1px solid lightgray`,
        padding: `8px`,
        maxWidth: `80ch`,
        background: `#f3f3f3`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      dangerouslySetInnerHTML: {
        __html: `
export default function API (req, res) {
  res.json({ hello: "world" })
}`
      }
    }))), this.state.initPagePaths.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you were trying to reach another page or function, perhaps you can find it below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Functions (", this.props.data.allSiteFunction.nodes.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, this.props.data.allSiteFunction.nodes.map(node => {
      const functionRoute = `/api/${node.functionRoute}`;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: functionRoute
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: functionRoute
      }, functionRoute));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Pages (", this.state.pagePaths.length != this.state.initPagePaths.length ? `${this.state.pagePaths.length}/${this.state.initPagePaths.length}` : this.state.initPagePaths.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      onSubmit: this.handlePagePathSearch
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Search:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "search",
      placeholder: "Search pages...",
      value: this.state.pagePathSearchTerms,
      onChange: this.handleSearchTermChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "submit",
      value: "Submit"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, this.state.pagePaths.map((pagePath, index) => index < 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: pagePath
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: pagePath
    }, pagePath))), this.state.pagePaths.length > 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: `bold`
      }
    }, "... and ", this.state.pagePaths.length - 100, " more."))));
  }

}

Dev404Page.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  custom404: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),
  location: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dev404Page); // ESLint is complaining about the backslash in regex

/* eslint-disable */

const pagesQuery = "1700995071";
/* eslint-enable */

/***/ })

};
;
//# sourceMappingURL=component---cache-dev-404-page-js.js.map