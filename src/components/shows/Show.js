import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ShowsContext } from "../../context/ShowContext";

const Show = (props) => {
  const { getActiveShow, activeShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    if (props.match.params.id) {
      getActiveShow(props.match.params.id);
    }
  }, []);

  return (
    <section className="show">
      <div className="container">
        {console.log(activeShow)}
        {!loading && activeShow && (
          <div className="row">
            <div className="col-1-4">
              <div className="show-img">
                <img src="" alt="show title" />
              </div>
            </div>
            <div className="col-3-4">
              <div className="show-info">
                <h2 className="mb-2">{activeShow.name}</h2>
                <div className="show-info_type mb-2">
                  <span className="badge">Comedy</span>
                  <span className="badge">Drama</span>
                </div>
                <div className="show-info_status mb-1">
                  <strong>Status:</strong> {activeShow.Running}
                </div>
                <div className="show-info_rating mb-1">
                  <strong>Rating:</strong> {activeShow.rating}
                </div>
                <div className="show-info_site mb-1">
                  <a href="#" target="_blank">
                    <strong>Dfficial Site</strong>
                  </a>
                </div>
                <div className="show-info_about flex">
                  <strong>Story:</strong>
                  <p>
                    lorem ipsum dolor sit amet consectetur adiposiicng aelit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(Show);
