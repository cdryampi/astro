import axios from 'axios';
import { c as createComponent, a as createAstro, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_DMkRMATn.mjs';
import 'kleur/colors';
import 'clsx';

const API_URL = "https://rickandmortyapi.com/api";
const getCharacters = async (page = 1) => {
  try {
    const { data } = await axios.get(`${API_URL}/character`, {
      params: { page }
    });
    return { characters: data.results, totalPages: data.info.pages };
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { characters: [], totalPages: 0 };
  }
};
const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/character/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching character:", error);
    return {};
  }
};
const getEpisodes = async (episodeUrls) => {
  try {
    const episodeRequests = episodeUrls.map((url) => axios.get(url));
    const episodesData = await Promise.all(episodeRequests);
    return episodesData.map((res) => res.data.name);
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
};
const getFilteredCharacters = async (name = "", status = "", species = "", page = 1) => {
  try {
    const { data } = await axios.get("https://rickandmortyapi.com/api/character", {
      params: { name, status, species, page }
    });
    return { characters: data.results, totalPages: data.info.pages };
  } catch (error) {
    console.error("Error fetching filtered characters:", error);
    return { characters: [], totalPages: 0 };
  }
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Rick & Morty Explorer",
    description = "Explora el universo de Rick & Morty con datos detallados de personajes y episodios."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-gray-900 text-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/codigo/astro/src/layouts/Layout.astro", undefined);

export { $$Layout as $, getEpisodes as a, getFilteredCharacters as b, getCharacters as c, getCharacterById as g };
