import React, { useEffect } from "react";
import { Wrapper, Close, Header } from "./style";

function PopUp({ onClose, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);

  return (
    <Wrapper>
      <Header>
        Оформление
        <Close onClick={onClose}>x</Close>
      </Header>
      {children}
    </Wrapper>
  );
}

export default PopUp;
