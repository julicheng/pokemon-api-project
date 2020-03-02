import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// name
// abilities
// height
// weight
// sprites - back and front
// held items

function App() {
  const getPokemon = async pokemon => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon("jigglypuff");
  });
  return (
    <div className="container pokemon">
      <h1>Pokesearch</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Which one do you want to catch?"
          aria-label="pokemon"
        ></input>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default App;
