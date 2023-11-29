import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 10px 0 20px 10px;
  display: flex;
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.colors.mainColor};
  justify-content: center;
  text-align: center;
`;

export default HeaderStyled;
