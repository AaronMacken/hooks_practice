import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";

import PostContext from "./context/PostContext";
import ReducerAndMemo from "./components/ReducerAndMemo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <PostContext>
        <Navbar />
        <h1>Practice!</h1>
        <ReducerAndMemo />
      </PostContext>
    </div>
  );
}

export default App;
