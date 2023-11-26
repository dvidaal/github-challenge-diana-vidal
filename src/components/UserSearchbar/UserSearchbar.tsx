import { useState } from "react";
import Button from "../Button/Button";
import getUser from "../../hooks/getUser/getUser";
import { UserData } from "../../types/types";

const UserSearchbar = (): JSX.Element => {
  const [user, setUser] = useState<UserData>({
    login: "",
    avatar_url: "",
    repos_url: "",
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
      <div>
        <input
          type="text"
          placeholder="Type GitHub username"
          value={inputValue}
          onChange={onChangeHandler}
        />
        <Button action={handleSearch} />
        <span>{user.login}</span>
      </div>
    </>
  );
};

export default UserSearchbar;
