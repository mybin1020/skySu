import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <>
      <Book name="처음만난 리엑트" pageNum={500} />
      <Book name="처음만난 html" pageNum={400} />
      <Book name="처음만난 Javascript" pageNum={300} />
    </>
  );
}

export default Library;
