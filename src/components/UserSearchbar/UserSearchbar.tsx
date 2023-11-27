import { useState } from "react";
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

  /*   const [repositories, setRepositories] = useState<RepositoryData>({
    name: "",
  }); */

  const [repositories, setRepositories] = useState<RepositoriesData>([]);

  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    const response = await getUser(inputValue);
    setUser(response);
    const responseRepo = await getRepository(inputValue);
    setRepositories(responseRepo);
  };

  const onChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <>
      <UserSearchbarStyled>
        <input
          type="text"
          placeholder="Search username"
          value={inputValue}
          onChange={onChangeHandler}
          className="field"
        />
        <Button text="Search" action={handleSearch} />
      </UserSearchbarStyled>
      <UserProfile user={user} repositories={repositories} />
    </>
  );
};

export default UserSearchbar;
