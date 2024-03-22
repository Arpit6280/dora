"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 5056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ DoraContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Create Context
const DoraContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Type
const type = {
    BLOG: "BLOG",
    COLOR: "COLOR",
    PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
    PORTFOLIO_WORKS: "PORTFOLIO_WORKS"
};
const { BLOG , COLOR , PORTFOLIO_MODAL , PORTFOLIO_WORKS  } = type;
// Initial Value
const initialState = {
    color: "yellow",
    blog: null,
    blogs: [
        {
            id: 1,
            date: "23 Oct 2022",
            img: "images/blog/1.png",
            title: "User interface design or user interface engineering",
            catagory: "UI/UX Design"
        },
        {
            id: 2,
            date: "13 Dec 2022",
            img: "images/blog/2.png",
            title: "Web design encompasses many different skills",
            catagory: "Web Design"
        },
        {
            id: 3,
            date: "23 Dec 2022",
            img: "images/blog/3.png",
            title: "Jim Morisson Says when the musics over turn off the light",
            catagory: "Web Development"
        }
    ],
    portfolio_modal: false,
    portfolio_works: {}
};
// Reducer
const reducer = (state, action)=>{
    const { type , payload  } = action;
    switch(type){
        case BLOG:
            return {
                ...state,
                blog: payload
            };
        case PORTFOLIO_MODAL:
            return {
                ...state,
                portfolio_modal: payload
            };
        case PORTFOLIO_WORKS:
            return {
                ...state,
                portfolio_works: payload
            };
        case COLOR:
            return {
                ...state,
                color: payload
            };
        default:
            return state;
    }
};
// Watson State
const DoraState = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    // Page Color
    const colorChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: COLOR,
            payload: value
        });
    }, []);
    const blogDetails = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: BLOG,
            payload: value
        });
    }, []);
    const portfolio_modal_show = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: PORTFOLIO_MODAL,
            payload: value
        });
    }, []);
    const portfolio_modal_setWorks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: PORTFOLIO_WORKS,
            payload: value
        });
    }, []);
    const { color , blog , blogs , portfolio_modal , portfolio_works  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DoraContext.Provider, {
        value: {
            color,
            colorChange,
            blogs,
            blog,
            blogDetails,
            portfolio_modal,
            portfolio_modal_show,
            portfolio_works,
            portfolio_modal_setWorks
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoraState);



/***/ })

};
;