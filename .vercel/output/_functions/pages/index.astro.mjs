import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_DMkRMATn.mjs';
import 'kleur/colors';
/* empty css                                */
import { defineComponent, useSSRContext, ref, mergeProps, onMounted } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as getFilteredCharacters, c as getCharacters, $ as $$Layout } from '../chunks/Layout_BZiRblxq.mjs';
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchComponent",
  emits: ["updateFilters"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const searchQuery = ref("");
    const statusFilter = ref("");
    const speciesFilter = ref("");
    const updateFilters = () => {
      emit("updateFilters", {
        name: searchQuery.value,
        status: statusFilter.value,
        species: speciesFilter.value
      });
    };
    const __returned__ = { emit, searchQuery, statusFilter, speciesFilter, updateFilters };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-4 mb-6 bg-gray-800 p-4 rounded-lg shadow-md" }, _attrs))}><input${ssrRenderAttr("value", $setup.searchQuery)} type="text" placeholder="Buscar por nombre..." class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600"><select class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600"><option value=""${ssrIncludeBooleanAttr(Array.isArray($setup.statusFilter) ? ssrLooseContain($setup.statusFilter, "") : ssrLooseEqual($setup.statusFilter, "")) ? " selected" : ""}>Todos los estados</option><option value="alive"${ssrIncludeBooleanAttr(Array.isArray($setup.statusFilter) ? ssrLooseContain($setup.statusFilter, "alive") : ssrLooseEqual($setup.statusFilter, "alive")) ? " selected" : ""}>Vivo</option><option value="dead"${ssrIncludeBooleanAttr(Array.isArray($setup.statusFilter) ? ssrLooseContain($setup.statusFilter, "dead") : ssrLooseEqual($setup.statusFilter, "dead")) ? " selected" : ""}>Muerto</option><option value="unknown"${ssrIncludeBooleanAttr(Array.isArray($setup.statusFilter) ? ssrLooseContain($setup.statusFilter, "unknown") : ssrLooseEqual($setup.statusFilter, "unknown")) ? " selected" : ""}>Desconocido</option></select><select class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600"><option value=""${ssrIncludeBooleanAttr(Array.isArray($setup.speciesFilter) ? ssrLooseContain($setup.speciesFilter, "") : ssrLooseEqual($setup.speciesFilter, "")) ? " selected" : ""}>Todas las especies</option><option value="Human"${ssrIncludeBooleanAttr(Array.isArray($setup.speciesFilter) ? ssrLooseContain($setup.speciesFilter, "Human") : ssrLooseEqual($setup.speciesFilter, "Human")) ? " selected" : ""}>Humano</option><option value="Alien"${ssrIncludeBooleanAttr(Array.isArray($setup.speciesFilter) ? ssrLooseContain($setup.speciesFilter, "Alien") : ssrLooseEqual($setup.speciesFilter, "Alien")) ? " selected" : ""}>Alien</option><option value="Robot"${ssrIncludeBooleanAttr(Array.isArray($setup.speciesFilter) ? ssrLooseContain($setup.speciesFilter, "Robot") : ssrLooseEqual($setup.speciesFilter, "Robot")) ? " selected" : ""}>Robot</option></select></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SearchComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const SearchComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CharacterGridComponent",
  setup(__props, { expose: __expose }) {
    __expose();
    const characters = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const filters = ref({
      name: "",
      status: "",
      species: ""
    });
    const fetchCharacters = async () => {
      if (filters.value.name || filters.value.status || filters.value.species) {
        const { characters: charList, totalPages: total } = await getFilteredCharacters(
          filters.value.name,
          filters.value.status,
          filters.value.species,
          currentPage.value
        );
        characters.value = charList;
        totalPages.value = total;
      } else {
        const { characters: charList, totalPages: total } = await getCharacters(currentPage.value);
        characters.value = charList;
        totalPages.value = total;
      }
    };
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchCharacters();
      }
    };
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchCharacters();
      }
    };
    const updateFilters = (newFilters) => {
      filters.value = newFilters;
      fetchCharacters();
    };
    onMounted(fetchCharacters);
    const __returned__ = { characters, currentPage, totalPages, filters, fetchCharacters, nextPage, prevPage, updateFilters, SearchComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-6" }, _attrs))}><h1 class="text-4xl font-bold text-amber-400 mb-6">Rick &amp; Morty Characters</h1>`);
  _push(ssrRenderComponent($setup["SearchComponent"], { onUpdateFilters: $setup.updateFilters }, null, _parent));
  _push(`<div class="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-7xl"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"><!--[-->`);
  ssrRenderList($setup.characters, (character) => {
    _push(`<a${ssrRenderAttr("href", `/character/${character.id}`)} class="p-5 border-2 border-amber-600 rounded-3xl bg-gradient-to-b from-amber-800 to-gray-900 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:border-amber-400"><img${ssrRenderAttr("src", character.image)}${ssrRenderAttr("alt", character.name)} class="w-full rounded-lg shadow-md border border-amber-400"><h2 class="text-xl font-bold mt-3 text-amber-300 text-center">${ssrInterpolate(character.name)}</h2><p class="text-sm mt-2 text-gray-300 text-center">Status: <span class="font-semibold">${ssrInterpolate(character.status)}</span></p><p class="text-sm text-gray-300 text-center">Species: <span class="font-semibold">${ssrInterpolate(character.species)}</span></p></a>`);
  });
  _push(`<!--]--></div><div class="flex justify-center gap-4 mt-6"><button class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"${ssrIncludeBooleanAttr($setup.currentPage === 1) ? " disabled" : ""}> \u2B05 Anterior </button><span class="text-xl font-bold text-white">P\xE1gina ${ssrInterpolate($setup.currentPage)} de ${ssrInterpolate($setup.totalPages)}</span><button class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"${ssrIncludeBooleanAttr($setup.currentPage === $setup.totalPages) ? " disabled" : ""}> Siguiente \u27A1 </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CharacterGridComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const CharacterGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rick & Morty Explorer", "description": "Explora el universo de Rick & Morty con datos detallados de personajes y episodios." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CharacterGrid", CharacterGrid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/codigo/astro/src/components/CharacterGridComponent.vue", "client:component-export": "default" })} ` })}`;
}, "C:/codigo/astro/src/pages/index.astro", undefined);

const $$file = "C:/codigo/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
