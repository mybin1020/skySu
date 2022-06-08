import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "subin", content: "react 하기 싫어" },
  { name: "skyboy", content: "공부나 해" },
];

function CommentList(props) {
  return (
    <>
      {comments.map((comment) => {
        return <Comment name={comment.name} content={comment.content} />;
      })}
    </>
  );
}

export default CommentList;
