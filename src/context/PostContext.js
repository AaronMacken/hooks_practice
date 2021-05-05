import React from "react";

export const PostContext = React.createContext();

const initialState = [
  {
    postId: 1,
    post: "10-2 baby! 10-2!",
    author: "Jenny",
  },
  {
    postId: 2,
    post: "I want to go to all you can eat sushi!",
    author: "Steve",
  },
  {
    postId: 3,
    post: "I like food!",
    author: "Aaron",
  },
];

export default function PostProvider({ children }) {
  return (
    <PostContext.Provider value={initialState}>{children}</PostContext.Provider>
  );
}
