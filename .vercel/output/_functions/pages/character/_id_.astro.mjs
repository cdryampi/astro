import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DMkRMATn.mjs';
import 'kleur/colors';
import { g as getCharacterById, a as getEpisodes, $ as $$Layout } from '../../chunks/Layout_BZiRblxq.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const character = await getCharacterById(Number(id));
  if (!character) {
    throw new Error("Character not found");
  }
  const episodes = await getEpisodes(character.episode);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Personaje: ${character.name} - Rick & Morty`, "description": `Detalles sobre ${character.name}, un personaje de Rick & Morty. Estado: ${character.status}, Especie: ${character.species}, G\xE9nero: ${character.gender}.`, "image": character.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-center 
              transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"> <!-- Imagen con efecto 3D --> <div class="perspective-1000"> <img${addAttribute(character.image, "src")}${addAttribute(character.name, "alt")} class="rounded-lg w-40 mx-auto border border-amber-500 shadow-lg
        transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6"> </div> <h1 class="text-4xl font-bold text-amber-400 mt-4">${character.name}</h1> <p class="text-xl text-gray-300 mt-2">Estado: <span class="font-semibold">${character.status}</span></p> <p class="text-lg text-gray-300">Especie: ${character.species}</p> <p class="text-lg text-gray-300">Género: ${character.gender}</p> <p class="text-lg text-gray-300">Origen: ${character.origin.name}</p> <!-- Localización con fondo dinámico --> <div class="mt-6 p-4 rounded-lg text-gray-300 shadow-lg border border-gray-700"${addAttribute(`background-image: url('/img/planet.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;`, "style")}> <h2 class="text-xl font-bold text-white">🌍 Localización Actual</h2> <p class="text-lg">${character.location.name}</p> </div> <!-- Lista de episodios con efecto --> <div class="mt-6 text-left bg-gray-700 p-4 rounded-lg shadow-md"> <h2 class="text-2xl font-bold text-amber-300">📺 Aparece en:</h2> <ul class="mt-2 text-gray-300"> ${episodes.map((episode) => renderTemplate`<li class="mt-1 border-l-4 border-amber-400 pl-2 hover:scale-105 transition-transform">${episode}</li>`)} </ul> </div> <!-- Botón de Volver con animación --> <a href="/" class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-red-500 hover:from-red-500 hover:to-amber-500 
             text-white rounded-lg transition-transform transform hover:scale-110 shadow-md">
🔙 Volver
</a> </div> ` })}`;
}, "C:/codigo/astro/src/pages/character/[id].astro", undefined);

const $$file = "C:/codigo/astro/src/pages/character/[id].astro";
const $$url = "/character/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
