import { RepositoriesData, UserData } from "../../types/types";
import RepositoriesFilterbar from "../RepositoriesFilterbar/RepositoriesFilterbar";
import RepositoryList from "../RepositoryList/RepositoryList";
import UserProfileStyled from "./UserProfileStyled";
interface UserProps {
  user: UserData;
  repositories: RepositoriesData;
  onUpdateFilteredRepositories: (filteredRepos: RepositoriesData) => void;
}

const UserProfile = ({
  user,
  repositories,
  onUpdateFilteredRepositories,
}: UserProps): JSX.Element => {
  return (
    <>
      <UserProfileStyled className="user-profile">
        <span className="user-profile__name">{user.name}</span>
        <span className="user-profile__username">{user.login}</span>
        <img
          src={user.avatar_url}
          className="user-profile__avatar"
          alt="Avatar user"
          width="296"
          height="296"
        />

        {user.login && (
          <RepositoriesFilterbar
            username={user.login}
            onUpdateFilteredRepositories={onUpdateFilteredRepositories}
          />
        )}
      </UserProfileStyled>
      <RepositoryList repositories={repositories} />
    </>
  );
};

export default UserProfile;
