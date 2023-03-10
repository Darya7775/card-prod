import React, { useState, useRef, useEffect } from "react";
import Title from "../title/title";
import Button from "../elements/button";
import { StyledUl, Content, WrapperContent } from "./style";

function Accordion({ tabs }) {
  const [isShowAccordIn, setShouAccord] = useState(0);
  const [height, setHeight] = useState(0);
  const showContent = useRef(null);
  useEffect(() => {
    setHeight(showContent.current.offsetHeight);
  }, [height, isShowAccordIn, tabs]);
  return (
    <StyledUl>
      {tabs.length
        ? tabs.map((item, index) => {
            if (isShowAccordIn === index) {
              return (
                <li key={index}>
                  <Button>
                    <Title small as="h3">
                      {item.title}
                    </Title>
                  </Button>
                  <WrapperContent style={{ height }}>
                    <Content ref={showContent}>{item.content}</Content>
                  </WrapperContent>
                </li>
              );
            }
            return (
              <li key={index}>
                <Button
                  onClick={() => {
                    setShouAccord(index);
                    console.log(height);
                  }}
                >
                  <Title small as="h3">
                    {item.title}
                  </Title>
                </Button>
                <WrapperContent>
                  <Content>{item.content}</Content>
                </WrapperContent>
              </li>
            );
          })
        : null}
    </StyledUl>
  );
}

export default Accordion;
