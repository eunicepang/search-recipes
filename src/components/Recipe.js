import React from "react";

export default function Recipe({ id, name, origin, category, image  }) {
  return (
    <article className="recipe">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="recipe-footer">
        <h3>{name}</h3>
        <h4>origin: {origin}</h4>
        <h4>category: {category}</h4>
      </div>
    </article>
  );
}
