import styled from "styled-components";

const StyledOldPrice = styled.del.attrs((props) => ({
  children: `${props.children} ₽`
}))`
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  line-height: 1;
`;

export default StyledOldPrice;
