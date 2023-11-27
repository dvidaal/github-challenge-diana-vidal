import { RepositoriesData, UserData, RepositoryData } from "../../types/types";
import RepositoriesFilterbar from "../RepositoriesFilterbar/RepositoriesFilterbar";
import UserProfileStyled from "./UserProfileStyled";

interface UserProps {
  user: UserData;
  repositories: RepositoriesData;
}

const UserProfile = ({ user, repositories }: UserProps): JSX.Element => {
  return (
    <>
      <UserProfileStyled className="user-profile">
        <span className="user-profile__name">{user.name}</span>
        <span className="user-profile__username">{user.login}</span>
        <img
          src={user.avatar_url}
          alt="Avatar user"
          className="user-profile__avatar"
          width="296"
          height="296"
        />
        <RepositoriesFilterbar />
        <ul className="user-profile__repository-section">
          {repositories.map((repo: RepositoryData, index: number) => (
            <li key={index} className="user-profile__repositories">
              {repo.name}
              <span className="user-profile__language">{repo.language}</span>
              <p className="user-profile__description">{repo.description}</p>
            </li>
          ))}
        </ul>
      </UserProfileStyled>
    </>
  );
};

export default UserProfile;
