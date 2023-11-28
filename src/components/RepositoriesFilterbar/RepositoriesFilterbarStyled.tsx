import styled from "styled-components";

const RepositoriesFilterbarStyled = styled.form`
  display: flex;
  justify-content: center;
  color: black;
  gap: 15px;

  .filter-bar {
    background-color: #fff;
    border: 1px solid #56585b;
    height: 40px;
    padding: 10px 16px;
    color: #000;
    border-radius: 10px;
    width: 100%;
  }

  .filter-options {
    background-color: #fff;
    border: 1px solid #56585b;
    color: #909093;
    border-radius: 10px;
    padding: 5px;
  }
`;

export default RepositoriesFilterbarStyled;
