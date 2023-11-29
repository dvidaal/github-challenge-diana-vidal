import axios from "axios";
import {
  GithubResponse,
  RepositoriesData,
  RepositoriesFilterData,
  RepositoryData,
  UserData,
} from "../../types/types";
import { useCallback } from "react";
import { apiUrl } from "../../utils/constants";

const useUser = () => {
  const getUser = useCallback(
    async (username: string): Promise<UserData> => {
      try {
        const { data: userInfoData } = await axios.get<GithubResponse>(
          `${apiUrl}/users/${username}`,
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
    },
    [apiUrl]
  );

  const getRepositoryByName = useCallback(
    async (username: string, repoName: string): Promise<RepositoriesData> => {
      try {
        const { data: repositoryData } =
          await axios.get<RepositoriesFilterData>(
            `${apiUrl}/search/repositories?q=${repoName}+user:${username}`
          );
        return repositoryData.items;
      } catch (error) {
        console.error("Error fetching repositories by name", error);
        return [];
      }
    },
    [apiUrl]
  );

  const getRepository = useCallback(
    async (username: string): Promise<RepositoriesData> => {
      try {
        const { data: repositoryData } = await axios.get<RepositoryData[]>(
          `${apiUrl}/users/${username}/repos?per_page=20&page=1`
        );

        return repositoryData;
      } catch (error) {
        console.error("Error fetching repositories", error);
        return [];
      }
    },
    [apiUrl]
  );

  return { getUser, getRepositoryByName, getRepository };
};

export default useUser;
