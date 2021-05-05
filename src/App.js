import "./App.css";

import React from "react";

import HookPractice from "./components/HookPractice";

const initialState = [
  {
    postId: 1,
    post: "Jessica is such a dumb whore that just fucks everyone",
    author: "Jenny",
  },
  {
    postId: 2,
    post: "I'm trying to hang out with Jessica!",
    author: "Steve",
  },
  {
    postId: 3,
    post: "I like food!",
    author: "Aaron",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hey everyone!</h1>
      <HookPractice posts={initialState} />
    </div>
  );
}

export default App;
