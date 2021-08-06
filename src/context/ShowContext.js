import React, { useReducer } from "react";
import axios from "axios";

const ShowsContext = React.createContext();

const ShowState = (props) => {
  const initialState = {
    shows: [],
    activeShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowReducer, initialState);
  console.log(state.activeShow);
  const searchShowes = async (searchTerm) => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    dispatch({ type: "SEARCH_SHOWS", payload: data });
  };
  const getActiveShow = async (id) => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    dispatch({ type: "SET_ACTIVE_SHOWS", payload: data });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        loading: state.loading,
        activeShow: state.activeShow,
        searchShowes,
        getActiveShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

const ShowReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SEARCH_SHOWS":
      return { ...state, shows: action.payload, loading: false };
    case "SET_ACTIVE_SHOWS":
      return {
        ...state,
        activeShow: action.payload ? action.payload : {},
        loading: false,
      };

    default:
      return state;
  }
};

export { ShowsContext, ShowState };
