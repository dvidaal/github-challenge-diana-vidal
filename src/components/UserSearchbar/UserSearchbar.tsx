import React, { useState } from "react";
import Button from "../Button/Button";
import getUser from "../../hooks/getUser/getUser";
import { RepositoriesData, UserData } from "../../types/types";
import UserSearchbarStyled from "./UserSearchbarStyled";
import UserProfile from "../UserProfile/UserProfile";
import getRepository from "../../hooks/getRepository/getRepository";

const UserSearchbar = (): JSX.Element => {
  const [user, setUser] = useState<UserData>({
    login: "",
    avatar_url: "",
    name: "",
  });

  const [repositories, setRepositories] = useState<RepositoriesData>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await getUser(inputValue);
    setUser(response);

    const responseRepo = await getRepository(response.login);
    setRepositories(responseRepo);
  };

  const onUpdateFilteredRepositories = (filteredRepos: RepositoriesData) => {
    setRepositories(filteredRepos);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <UserSearchbarStyled onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search username"
          value={inputValue}
          onChange={onChangeHandler}
          className="field"
        />
        <Button text="Search" type="submit" />
      </UserSearchbarStyled>

      <UserProfile
        user={user}
        repositories={repositories}
        onUpdateFilteredRepositories={onUpdateFilteredRepositories}
      />
    </>
  );
};

export default UserSearchbar;
