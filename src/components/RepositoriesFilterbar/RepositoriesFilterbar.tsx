import RepositoriesFilterbarStyled from "./RepositoriesFilterbarStyled";
import getRepositoryByName from "../../hooks/getRepositoryByName/getRepositoryByName";
import Button from "../Button/Button";
import { RepositoriesData } from "../../types/types";
import { useState } from "react";

interface RepositoriesFilterbarProps {
  username: string;
  onUpdateFilteredRepositories: (filteredRepos: RepositoriesData) => void;
}

const RepositoriesFilterbar = ({
  username,
  onUpdateFilteredRepositories,
}: RepositoriesFilterbarProps): JSX.Element => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateFilteredRepositories([]);
    setUserInput(event.target.value);
  };

  const filterRepositoryByName = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const filteredRepos = await getRepositoryByName(username, userInput);
    onUpdateFilteredRepositories(filteredRepos);
  };

  return (
    <RepositoriesFilterbarStyled onSubmit={filterRepositoryByName}>
      <input
        type="text"
        placeholder="Filter repository..."
        className="filter-bar"
        onChange={handleInputChange}
        value={userInput}
      />
      <Button type="submit" text="Search" />
    </RepositoriesFilterbarStyled>
  );
};

export default RepositoriesFilterbar;
