import React, { useState } from "react";
import "./styles.css";
import generes from "./database.js";

export default function App() {
  let genreCollection = Object.keys(generes);

  const [selectedGenre, setSelectedGenre] = useState("Animation");

  function generateList(genre) {
    setSelectedGenre(genre);
  }
  return (
    <>
      <div className="App">
        Shashi Movie ADDA
        <h2 style={{ fontSize: "smaller", color: "#4B5563" }}>
          we give movie rating on basis of genere ,<em>click</em> on generes to
          explore more.{" "}
        </h2>
        {genreCollection.map(function (genre) {
          return (
            <button
              className="btns"
              onClick={() => generateList(genre)}
              key={genre}
            >
              {genre}
            </button>
          );
        })}
        <ul>
          {generes[selectedGenre].map(function (g) {
            return (
              <div className="output-div" key={g.name}>
                <section className="outputProject">
                  <div className="text-right">
                    <div className="project-text"> Name: {g.name}</div>
                    <div className="level-text">
                      Description:{g.description}
                    </div>
                    <div className="level-text"> Rating: {g.rating}</div>
                  </div>
                </section>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
