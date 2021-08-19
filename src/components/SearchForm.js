import React from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function searchRecipe() {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search up your favourite recipe</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={searchValue}
            onChange={searchRecipe}
          />
        </div>
      </form>
    </section>
  );
}
