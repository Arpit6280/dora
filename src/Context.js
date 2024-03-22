import { createContext, useCallback, useReducer } from "react";

// Create Context
const DoraContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  COLOR: "COLOR",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
  PORTFOLIO_WORKS: "PORTFOLIO_WORKS",
};
const { BLOG, COLOR, PORTFOLIO_MODAL, PORTFOLIO_WORKS } = type;

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
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "images/blog/2.png",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "images/blog/3.png",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
  ],
  portfolio_modal: false,
  portfolio_works: {},
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
    case PORTFOLIO_WORKS:
      return {
        ...state,
        portfolio_works: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};

// Watson State
const DoraState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Page Color
  const colorChange = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const blogDetails = useCallback((value) => {
    dispatch({
      type: BLOG,
      payload: value,
    });
  }, []);

  const portfolio_modal_show = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_MODAL,
      payload: value,
    });
  }, []);

  const portfolio_modal_setWorks = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_WORKS,
      payload: value,
    });
  }, []);

  const { color, blog, blogs, portfolio_modal, portfolio_works } = state;
  return (
    <DoraContext.Provider
      value={{
        color,
        colorChange,
        blogs,
        blog,
        blogDetails,
        portfolio_modal,
        portfolio_modal_show,
        portfolio_works,
        portfolio_modal_setWorks,
      }}
    >
      {children}
    </DoraContext.Provider>
  );
};

export default DoraState;
export { DoraContext };
