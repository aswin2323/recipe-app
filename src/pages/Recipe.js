import axios from "axios";
import { useEffect, useState } from "react";

export default function Recipe(props) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5)
  useEffect(() => {
    const getRecipeData = () => {
      axios
        .get("https://dummyjson.com/recipes")
        .then((res) => setData(res.data.recipes))
        .catch((err) => console.log(err));
    };
    getRecipeData();
  }, []);
  const searchRecipe = data.filter((rec) => {
    const valToSearch = Object.values(rec).join(" ").toLowerCase();
    return valToSearch.includes(props.searchTerm.toLowerCase());
  });

  const indexOfLastRecipe = currentPage *  itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentItems = searchRecipe.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const paginate = (pgNo) => setCurrentPage(pgNo);

  const totalPages = Math.ceil(searchRecipe.length / itemsPerPage);

  return (
    <div className="m-5">
      <div
        className="input-group mb-5 pt-1 mx-auto"
        style={{ width: "26rem", height: "3rem" }}
      ></div>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 m-2">
        {currentItems.map((recipe) => (
          <p key={recipe.id}>{recipe.name}</p>
        ))}
      </div>
      <span>
        {Array.from({
          length: totalPages,
        }).map((_, index) => (
          <li onClick={() => paginate(index + 1)} key={index}>{index + 1}</li>
        ))}
      </span>
      {/* <span>{currentPage}</span> */}
    </div>
  );
}
