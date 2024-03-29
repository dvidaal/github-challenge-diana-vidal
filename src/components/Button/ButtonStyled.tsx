import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  font-family: ${(props) => props.theme.mainFont};
  justify-content: center;
  align-items: center;
  border: 3px solid #fff;
  width: 50px;
  height: 40px;
`;

export default ButtonStyled;
