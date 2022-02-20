import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, image, info, price, name } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "show more"}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              removeTour(id);
              console.log("deleted");
            }}
          >
            not interested
          </button>
        </p>
      </footer>
    </article>
  );
};

export default Tour;
