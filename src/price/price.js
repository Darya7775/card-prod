import styled from "styled-components";

const StyledPrice = styled.span.attrs((props) => ({
  children: `${props.children} ₽`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
`;

export default StyledPrice;
