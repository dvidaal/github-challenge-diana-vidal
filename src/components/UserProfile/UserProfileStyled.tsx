import styled from "styled-components";

const UserProfileStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;

  .user-profile {
    &__username {
      color: ${(props) => props.theme.colors.mainColor};
      font-family: ${(props) => props.theme.mainFont};
      font-style: italic;
    }

    &__avatar {
      padding: 10px;
      border-radius: 50%;
    }

    &__name {
      color: ${(props) => props.theme.colors.mainColor};
      font-family: ${(props) => props.theme.mainFont};
      font-weight: 900;
    }
  }
`;

export default UserProfileStyled;
