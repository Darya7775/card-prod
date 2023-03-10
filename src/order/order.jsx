import React, { useState } from "react";
import Button from "../elements/button";
import { Label } from "./style";

function Order() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const isButtonEnable = name && tel && address;
  return (
    <form action="https://echo.htmlacademy.ru" method="post">
      <Label>
        Имя:{" "}
        <input
          name="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          required
        />
      </Label>
      <Label>
        Телефон:{" "}
        <input
          name="tel"
          type="tel"
          value={tel}
          onChange={(evt) => setTel(evt.target.value)}
          required
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <input
          name="address"
          value={address}
          onChange={(evt) => setAddress(evt.target.value)}
          required
        />
      </Label>
      <Button type="submit" disabled={!isButtonEnable}>
        Оформить
      </Button>
    </form>
  );
}

export default Order;
