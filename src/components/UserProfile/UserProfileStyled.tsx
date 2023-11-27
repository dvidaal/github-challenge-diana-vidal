import styled from "styled-components";

const UserProfileStyled = styled.article`
  display: flex;
  flex-direction: column;
  .user-profile {
    &__username {
      color: #000;
      font-family: "Roboto";
      font-style: italic;
    }

    &__avatar {
      border-radius: 50%;
    }

    &__name {
      color: #000;
      font-family: "Roboto";
      font-weight: 900;
    }
  }
`;

export default UserProfileStyled;