import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import homeBg from "../../assets/images/home-bg.jpg";
import { ShowsContext } from "../../context/ShowContext";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, searchShowes } = useContext(ShowsContext);

  useEffect(() => {
    if (props.location.search && props.location.search.includes("key")) {
      let key = props.location.search.split("key=")[1];
      if (key && key.includes("&")) {
        key = key.split("&")[0];
      }
      if (key) {
        setSearchTerm(key);
        searchShowes(key);
      }
    }
  }, []);
  const handleSearchForm = (e) => {
    e.preventDefault();
    props.history.replace(`/search?key=${searchTerm}`);
    searchShowes(searchTerm);
  };
  const styleClasses =
    props.size === "large"
      ? "col-2-4 search-content mx-auto mh-100"
      : "col-2-4 search-content mx-auto pt-6 pb-2";

  return (
    <section className="search" style={{ background: `url(${homeBg})` }}>
      <div className="container">
        <div className="row">
          <div className={styleClasses}>
            {props.size === "large" ? (
              <>
                <h1>Find Your Next Show</h1>

                <p>lorem ipsum color sit amet consecteuer sauposicing elit.</p>
              </>
            ) : null}
            <form className="search-form" onSubmit={handleSearchForm}>
              <input
                type="search"
                placeholder="Search For Tv Show"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "loading..." : "Search"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Search);
