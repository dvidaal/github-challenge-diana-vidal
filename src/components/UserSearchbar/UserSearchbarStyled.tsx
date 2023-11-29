import styled from "styled-components";

const UserSearchbarStyled = styled.form`
  display: flex;
  justify-content: center;

  .field {
    color: ${(props) => props.theme.colors.mainColor};
    width: 100%;
    background-color: #fff;
    border: 1px solid #56585b;
    height: 40px;
    padding: 10px 16px;
    border-radius: 10px;
    margin-left: 30px;
  }
`;

export default UserSearchbarStyled;
