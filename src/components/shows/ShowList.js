import React, { useContext } from "react";

import ShowItems from "./ShowItems";
import { ShowsContext } from "../../context/ShowContext";
const ShowList = () => {
  const { loading, shows } = useContext(ShowsContext);
  return (
    <section className="shows">
      <div className="container">
        <div className="row py-2 justify-between">
          {loading && (
            <div className="col-full">
              <div>Loading</div>
            </div>
          )}

          {shows.length === 0 && !loading ? (
            <div className="col-full">
              <div className="not-found">Show Not Found</div>
            </div>
          ) : (
            <>
              {shows.map((show, ix) => (
                <div className="col-1-5" key={ix}>
                  <ShowItems show={show.show} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowList;
