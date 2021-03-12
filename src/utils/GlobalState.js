import React, { createContext, useReducer, useContext } from "react";
import { HOME_WEB_FULL, HOME_PHOTO_FULL, HOME_NORMAL } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case HOME_WEB_FULL:
      if (state.home.web.state === false) {
        return {
          ...state,
          home: {
            web: {
              state: true,
              gridWidth: 12,
            },
          },
        };
      } else {
        return {
          ...state,
          home: {
            web: {
              state: false,
              gridWidth: 6,
            },
          },
        };
      }

    case HOME_PHOTO_FULL:
      if (state.home.photo.state === false) {
        return {
          ...state,
          home: {
            photo: {
              state: true,
              gridWidth: 12,
            },
          },
        };
      } else {
        return {
          ...state,
          home: {
            photo: {
              state: false,
              gridWidth: 6,
            },
          },
        };
      }
    case HOME_NORMAL:
      return {
        ...state,
        home: true,
        photo: false,
        web: false,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // initial state layout
    home: {
      web: {
        state: false,
        gridWidth: 6,
      },
      photo: {
        state: false,
        gridWidth: 6,
      },
      // home: true,
    },
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
