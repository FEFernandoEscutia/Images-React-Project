import React from "react";
import { useGlobalContext } from "../helpers/context";

const SearchForm = () => {
 const {setSearchTerm}= useGlobalContext()
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //**1.-
    // const formInfo = e.target.elements.search.value;
    // if (!formInfo) return;
    // console.log(formInfo);

    //2.-
    const formData = new FormData(e.currentTarget);
    const animal = formData.get("search");
    setSearchTerm(animal)
  };

  return (
    <section>
      <h1 className="title">Images</h1>
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dragon"
        />
        <button type="submit" className="btn">
          {" "}
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
