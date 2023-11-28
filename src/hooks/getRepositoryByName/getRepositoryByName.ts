import axios from "axios";
import { RepositoriesData, RepositoriesFilterData } from "../../types/types";

const getRepositoryByName = async (
  username: string,
  repoName: string
): Promise<RepositoriesData> => {
  try {
    const { data: repositoryData } = await axios.get<RepositoriesFilterData>(
      `https://api.github.com/search/repositories?q=${repoName}+user:${username}`
    );
    console.log(repositoryData);
    return repositoryData.items;
  } catch (error) {
    console.error("Error fetching repositories by name", error);
    return [];
  }
};

export default getRepositoryByName;
