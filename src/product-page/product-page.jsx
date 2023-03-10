import React, { useState } from "react";
import Title from "../title/title";
import Article from "../article/article";
import Gallery from "../gallery/gallery";
import Price from "../price/price";
import Counter from "../counter/counter";
import Description from "../description/description";
import OldPrice from "../old-price/old-price";
import ShowComment from "../show-comment/show-comment";
import Comments from "../comments/comments";
import Tabs from "../tabs/tabs";
import Accordion from "../accordion/accordion";
import PopUp from "../popup/popup";
import Order from "../order/order";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  BuyButton,
  DeliveryValue
} from "./style";

const MAX_TEXT = 200;
const COMMENTS_COUNT = 3;

function ProductPage({ product, showInfoInAccordion }) {
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [count, setCount] = useState(1);
  const [isShow, setShow] = useState(false);
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          description={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onCommentsMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    },
    {
      title: "dffgdfgdg",
      content: <p>fgdgdgdfgdgf </p>
    }
  ];
  return (
    <StyledProductPage className="app">
      <Header>
        <Title>{product.name}</Title>
        <Article>{product.code}</Article>
      </Header>
      <ProductWrapper>
        <Gallery images={product.images} name={product.name} />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            {product.oldPrice > product.price ? (
              <OldPrice children={product.oldPrice} />
            ) : (
              false
            )}
            <Price children={product.price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <Counter count={count} onChange={setCount} minValue={1} />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
            <p>Итого: {product.price * count} ₽</p>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setShow(!isShow)}>
            Купить
          </BuyButton>
          {isShow && (
            <PopUp onClose={() => setShow(!isShow)}>
              <Order />
            </PopUp>
          )}
          <ShowComment comments={product.comments} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion tabs={tabs} /> : <Tabs tabs={tabs} />}
    </StyledProductPage>
  );
}

export default ProductPage;
