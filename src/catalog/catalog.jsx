import React from "react";
import { Img } from "/src/elements";
import Title from "/src/title/title";
import StyledOldPrice from "/src/old-price/old-price";
import StyledPrice from "/src/price/price";
import { Link } from "react-router-dom";
import { List, ListItem } from "./style";

function Catalog({ products }) {
  return (
    <>
      <Title>Каталог</Title>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <Link to={`/product/${product.code}`}>
                <Img src={product.images[0]} />
                <h2>{product.name}</h2>
                <span>
                  <StyledOldPrice children={product.oldPrice} />
                  <StyledPrice children={product.price} />
                </span>
              </Link>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default Catalog;
