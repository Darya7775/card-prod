import React from "react";
import { Button } from "../elements/index";

function Description({ description, isShowAllDescription, onShowMore }) {
  return (
    <div>
      {isShowAllDescription ? description : description + "..."}
      <Button type="button" onClick={onShowMore}>
        {isShowAllDescription ? "Скрыть" : "Подробнее"}
      </Button>
    </div>
  );
}

export default Description;
