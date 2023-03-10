import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Content = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid #ddd;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;

const WrapperContent = styled.div`
  position: relative;
  height: 0px;
  overflow: hidden;
  width: 100%;
  transition: 0.3s;
`;

export { StyledUl, Content, WrapperContent };
