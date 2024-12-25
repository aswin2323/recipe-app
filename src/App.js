import "./App.css";
import Home from './pages/Home';
import Header from "./layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from 'react';
import Recipe from "./pages/Recipe";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [sortOrder, setSortOrder] = useState('asc');

  //   const handleSearch = (value) => setSearchTerm(value);
  //   const handlSort = (order) =>setSortOrder(order);
  // console.log(searchTerm);

  return (
    <BrowserRouter>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm}/>}/>
        {/* <Route path="/" element={<Recipe searchTerm={searchTerm} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
