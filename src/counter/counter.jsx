import React from "react";
import { Button } from "../elements/index";
import { Value } from "./style";

function Counter({ count, onChange, minValue }) {
  const isDisabled = count === minValue;
  return (
    <>
      <Button
        disabled={isDisabled}
        size="small"
        type="button"
        onClick={() => onChange && onChange(count - 1)}
      >
        -
      </Button>
      <Value
        type="number"
        value={count}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value < minValue ? minValue : value);
        }}
      ></Value>{" "}
      <Button
        size="small"
        type="button"
        onClick={() => onChange && onChange(count + 1)}
      >
        +
      </Button>
    </>
  );
}

export default Counter;
