import React from "react";
import { Button } from "../elements/index";

function Comments({ comments, onCommentsMore, allCommentsLength }) {
  return (
    <>
      <ul>
        {comments &&
          comments.map(({ id, author, text }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{text}</p>
            </li>
          ))}
        {allCommentsLength > comments.length && (
          <Button onClick={onCommentsMore}>Показать ещё</Button>
        )}
      </ul>
    </>
  );
}

export default Comments;
