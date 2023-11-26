import { UserData } from "../../types/types";
import UserProfileStyled from "./UserProfileStyled";

export interface UserProps {
  user: UserData;
}

const UserProfile = ({ user }: UserProps): JSX.Element => {
  return (
    <>
      <UserProfileStyled className="user-profile">
        <span className="user-profile__name">{user.name}</span>
        <span className="user-profile__username">{user.login}</span>
        <span>{user.repos_url}</span>
        <img
          src={user.avatar_url}
          alt="Avatar user"
          className="user-profile__avatar"
          width="296"
          height="296"
        />
      </UserProfileStyled>
    </>
  );
};

export default UserProfile;
