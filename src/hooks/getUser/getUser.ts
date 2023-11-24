import axios, { isAxiosError } from "axios";
import { Octokit } from "octokit";
import { GithubResponse, UserData } from "../../types/types";

const getUser = async (username: string): Promise<UserData> => {
  const octokit = new Octokit({
    auth: "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",
  });

  try {
    const response = await octokit.request("GET /users/{username}", {
      username: username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log("Octokit User Information:");
    console.log(response.data);
  } catch (error) {
    if (isAxiosError(error))
      console.error("Error fetching user using Octokit:", error.message);
  }

  try {
    const { data: userInfoData } = await axios.get<GithubResponse>(
      `https://api.github.com/users/${username}`
    );
    return {
      login: userInfoData.login,
      repos_url: userInfoData.repos_url,
      avatar_url: userInfoData.avatar_url,
    };
  } catch (error) {
    console.error("Error fetching users", error);
    return { login: "", avatar_url: "", repos_url: "" }; //CANVIAR
  }
};

export default getUser;
