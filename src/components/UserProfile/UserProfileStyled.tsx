import styled from "styled-components";

const UserProfileStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  .user-profile {
    &__username {
      color: #000;
      font-family: "Roboto";
      font-style: italic;
    }

    &__avatar {
      padding: 10px;
      border-radius: 50%;
    }

    &__name {
      color: #000;
      font-family: "Roboto";
      font-weight: 900;
    }

    &__repository-section {
      list-style: none;
      padding: 0;
      width: 100%;
    }

    &__repositories {
      color: #000;
      font-family: "Roboto";
      font-weight: 900;
      font-size: 1.5rem;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
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

export default UserProfileStyled;
