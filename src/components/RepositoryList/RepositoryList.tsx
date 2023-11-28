import { RepositoriesData, RepositoryData } from "../../types/types";
import RepositoryListStyled from "./RepositoryListStyled";

interface RepositoryListProps {
  repositories: RepositoriesData;
}

const RepositoryList = ({ repositories }: RepositoryListProps): JSX.Element => {
  return (
    <RepositoryListStyled className="repository-list">
      <ul className="repository-list__repository-section">
        {repositories &&
          repositories.map((repo: RepositoryData, index: number) => (
            <li key={index} className="repository-list__repositories">
              {repo.name}
              <span className="repository-list__language">{repo.language}</span>
              <p className="repository-list__description">{repo.description}</p>
            </li>
          ))}
      </ul>
    </RepositoryListStyled>
  );
};

export default RepositoryList;
