import axios from "axios";
import { GithubResponse, UserData } from "../../types/types";

const getUser = async (username: string): Promise<UserData> => {
  try {
    const { data: userInfoData } = await axios.get<GithubResponse>(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return {
      login: userInfoData.login,
      avatar_url: userInfoData.avatar_url,
      name: userInfoData.name,
    };
  } catch (error) {
    console.error("Error fetching users", error);
  }

  return { login: "", avatar_url: "", name: "" };
};

export default getUser;
