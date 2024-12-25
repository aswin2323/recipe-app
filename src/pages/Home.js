import { useEffect, useState } from "react";
import Modal from "../component/modal";
import Pagination from "../component/pagination";
import axios from "axios";

export default function Home(props) {
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState(data);
  // const [sortOrder, setSortOrder] = useState('asc');
  // const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  const [current, setCurrent] = useState(1);
  const [recordsPage] = useState(6);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://dummyjson.com/recipes")
        .then((res) => setData(res.data.recipes))
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  // const filteredRecipes = useMemo(() => {
  //   return data.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [data, searchQuery]);
  
  const filteredRecipes = data.filter((item) =>{
    const valToSearch = item.name.toLowerCase();
    return valToSearch.includes(props.searchTerm.toLowerCase());
  })

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  // const filteredRecipes = data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  const indexofLastRecord = current * recordsPage;
  const indexofFirstRecord = indexofLastRecord - recordsPage;
  const currentRecords = filteredRecipes.slice(indexofFirstRecord, indexofLastRecord);
  const nPages = Math.ceil(filteredRecipes.length / recordsPage);

  return (
    <div className="m-3 m-md-3 mt-lg-5">
      {/* {
        setData.filter((item)=>{
            return searchQuery.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchQuery);
          })} */}
      {/* <div
        className="input-group mb-5 pt-1 mx-auto"
        style={{ width: "26rem", height: "3rem" }}
      >
        <input
          type="text"
          placeholder="search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          type="submit"
          className="btn btn-dark btn-lg"
          id="button-addon2"
        >
          Search
        </button>
      </div> */}
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 m-2 mb-lg-5">
        {
          // data.filter((item)=>{
          //   return searchQuery.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchQuery);
          // })
          currentRecords.map((item) => (
            // <div className="col-3">
              <div
                key={item.id}
                className="card col-12 col-md-5 col-lg-3"
                // style={{
                //   height: "30rem",
                // }}
              >
                <img
                  src={item.image}
                  className="card-img-top object-fit-cover ratio ratio-1x1"
                  alt="food images"
                  height={"330px"}
                  //   style={{ height: "17rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex justify-content-between flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">
                      <b>Rating:</b> {item.rating}
                    </p>
                    <p className="card-text">
                      <b>Cuisine:</b> {item.cuisine}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.id}`}
                  >
                    For More Info
                  </button>
                  <Modal viewData={item} />
                </div>
              </div>
            // </div>
          ))
        }
      </div>
      <Pagination nPages={nPages} current={current} setCurrent={setCurrent} />
    </div>
  );
}
