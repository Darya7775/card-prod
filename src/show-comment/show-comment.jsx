import React from "react";
import Popular from "../popular/popular";

function ShowComment({ comments }) {
  let textCom;
  if (comments.length > 5) {
    textCom = <Popular text="Проверенный товар" />;
  } else if (comments.length === 0) {
    textCom = <Popular text="Будь первым. Поделись впечатлениями" />;
  } else {
    textCom = null;
  }
  return textCom;
}

export default ShowComment;
