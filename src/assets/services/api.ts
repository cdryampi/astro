import axios from "axios";
import type { Character } from "../../types/character";

const API_URL = import.meta.env.PUBLIC_API_URL || "https://rickandmortyapi.com/api";

export const getCharacters = async (page: number = 1): Promise<{ characters: Character[], totalPages: number }> => {
  try {
    const { data } = await axios.get<{ results: Character[], info: { pages: number } }>(`${API_URL}/character`, {
      params: { page },
    });
    return { characters: data.results, totalPages: data.info.pages };
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { characters: [], totalPages: 0 };
  }
};

// obtener un personaje por id

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const { data } = await axios.get<Character>(`${API_URL}/character/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching character:", error);
    return {} as Character;
  }
}

// obtener episodios de un personaje

export const getEpisodes = async (episodeUrls: string[]): Promise<string[]> => {
  try {
    const episodeRequests = episodeUrls.map(url => axios.get(url));
    const episodesData = await Promise.all(episodeRequests);
    return episodesData.map(res => res.data.name); // Devuelve solo los nombres de los episodios
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
};

// filtrar personaje porr estado y especie

export const getFilteredCharacters = async (name: string = "", status: string = "", species: string = "", page: number = 1) => {
  try {
    const { data } = await axios.get("https://rickandmortyapi.com/api/character", {
      params: { name, status, species, page },
    });
    return { characters: data.results, totalPages: data.info.pages };
  } catch (error) {
    console.error("Error fetching filtered characters:", error);
    return { characters: [], totalPages: 0 };
  }
};