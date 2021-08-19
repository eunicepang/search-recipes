import React from "react";
import Recipe from "./Recipe";
import { useGlobalContext } from "../context";

export default function RecipeList() {
  const { recipes } = useGlobalContext();

  if (recipes.length < 1) {
    return (
      <h2 className="section-title">No recipes matched your search criteria</h2>
    );
  } else {
    return (
      <section className="section">
        <h2 className="section-title">recipes</h2>
        <div className='recipes-center'>
          {recipes.map((item) => {
            return <Recipe key={item.id} {...item} />;
          })}
        </div>
      </section>
    );
  }
}
