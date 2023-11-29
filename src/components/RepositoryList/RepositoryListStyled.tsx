import styled from "styled-components";

const RepositoryListStyled = styled.div`
  width: 100%;
  .repository-list {
    &__repository-section {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      width: 100%;
    }

    &__repositories {
      color: ${(props) => props.theme.colors.mainColor};
      font-family: ${(props) => props.theme.mainFont};
      font-weight: 900;
      font-size: 1.5rem;
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }

    &__description {
      font-style: italic;
      font-size: 1rem;
    }

    &__language {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: 100;
    }

    &__repositories:last-child {
      border-bottom: none;
    }
  }
`;

export default RepositoryListStyled;
