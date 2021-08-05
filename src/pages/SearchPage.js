import React from "react";

import Search from "../components/search/Search";
import ShowList from "../components/shows/ShowList";

const SearchPage = () => {
  return (
    <>
      <Search size="small" />
      <ShowList />
    </>
  );
};

export default SearchPage;
