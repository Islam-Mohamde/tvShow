import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ShowsContext } from "../../context/ShowContext";

import noImg from "../../assets/images/no-img.png";
const Show = (props) => {
  const { getActiveShow, activeShow, loading } = useContext(ShowsContext);
  const [  showImg, setShowImg ] = useState(noImg);
  useEffect(() => {
    if (props.match.params.id) {
      getActiveShow(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (activeShow && activeShow.image) {
      if (activeShow.image.original) {
        setShowImg(activeShow.image.original);
      } else if (activeShow.image.medium) {
        setShowImg(activeShow.image.medium);
      }
    } else {
      setShowImg(noImg);
    }
  }, [activeShow]);

  const bgStyle = {
    backgroundImage: `url(${showImg})`,
  };
  return (
    <section className="show" style={bgStyle}>
      <div className="container">
        {loading && (
          <div className="row">
            <div className="col-full">
              <div className="not-found">loading</div>
            </div>
          </div>
        )}
        {!loading && !activeShow && (
          <div className="row">
            <div className="col-full">
              <div className="not-found">Show not found</div>
            </div>
          </div>
        )}

        {!loading && activeShow && (
          <div className="row">
            <div className="col-1-4">
              <div className="show-img">
                <img src={showImg} alt="show title" />
              </div>
            </div>
            <div className="col-3-4">
              <div className="show-info">
                <h2 className="mb-2">
                  {activeShow.name ? activeShow.name : "islam m"}
                </h2>

                {activeShow.genres && activeShow.genres.length > 0 && (
                  <div className="show-info_type mb-2">
                    {activeShow.genres.map((el) => (
                      <span className="badge" key={el}>
                        {el}
                      </span>
                    ))}
                  </div>
                )}
                {activeShow.status && (
                  <div className="show-info_status mb-1">
                    <strong>Status:</strong> {activeShow.status}
                  </div>
                )}

                {activeShow.rating && activeShow.rating.average && (
                  <div className="show-info_rating mb-1">
                    <strong>Rating:</strong> {activeShow.rating.average}
                  </div>
                )}

                {activeShow.officialSite && (
                  <div className="show-info_site mb-1">
                    <a
                      href={activeShow.officialSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>Official Site</strong>
                    </a>
                  </div>
                )}
                {activeShow.summary && (
                  <div className="show-info_about flex">
                    <strong>Story:</strong>
                    <span
                      dangerouslySetInnerHTML={{ __html: activeShow.summary }}
                    ></span>
                    {activeShow.summary}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(Show);
