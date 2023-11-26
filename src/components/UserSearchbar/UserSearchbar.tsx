import { useState } from "react";
import Button from "../Button/Button";
import getUser from "../../hooks/getUser/getUser";
import { UserData } from "../../types/types";
import UserSearchbarStyled from "./UserSearchbarStyled";
import UserProfile from "../UserProfile/UserProfile";

const UserSearchbar = (): JSX.Element => {
  const [user, setUser] = useState<UserData>({
    login: "",
    avatar_url: "",
    repos_url: "",
    name: "",
  });

  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    const response = await getUser(inputValue);
    setUser(response);
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
      <UserProfile user={user} />
    </>
  );
};

export default UserSearchbar;
