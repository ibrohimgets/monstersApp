import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./comps/CardList";
import Search from "./comps/Search";
const URL = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [fileredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filterTheMonsters = monsters.filter((newMonster) => {
      return newMonster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(filterTheMonsters);
  }, [monsters, searchField]);

  const handleChange = (e) => {
    const lowerCase = e.target.value.toLocaleLowerCase();
    setSearchField(lowerCase);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <Search
        placeholder="Search here:"
        type="search"
        className="search-box"
        onchange={handleChange}
      />
      <hr />
      <CardList monsters={fileredMonsters} />
    </div>
  );
};
export default App;
