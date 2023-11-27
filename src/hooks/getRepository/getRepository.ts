import axios from "axios";
import { RepositoriesData, RepositoryData } from "../../types/types";

const getRepository = async (username: string): Promise<RepositoriesData> => {
  try {
    const { data: repositoryData } = await axios.get<RepositoryData[]>(
      `https://api.github.com/users/${username}/repos?per_page=10&page=1`
    );

    return repositoryData;
  } catch (error) {
    console.error("Error fetching repositories", error);
    return [];
  }
};

export default getRepository;
