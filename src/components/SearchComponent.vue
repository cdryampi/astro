<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import type { Character } from "../types/character";

const searchTerm = ref<string>("");
const characters = ref<Character[]>([]);

const searchCharacters = async () => {
  console.log("Buscando personaje:", searchTerm.value);
  if (searchTerm.value.trim() === "") return;

  try {
    const { data } = await axios.get<{ results: Character[] }>(
      "https://rickandmortyapi.com/api/character",
      { params: { name: searchTerm.value } }
    );
    console.log("Resultados obtenidos:", data.results);
    characters.value = data.results;
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    characters.value = [];
  }
};
</script>

<template>
  <div class="flex flex-col items-center mt-6">
    <input
      type="text"
      placeholder="Buscar personaje..."
      v-model="searchTerm"
      class="px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white"
    />
    <button
      class="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      @click="searchCharacters"
    >
      Buscar
    </button>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <div v-for="char in characters" :key="char.id" class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img :src="char.image" :alt="char.name" class="rounded-lg w-full" />
        <h2 class="text-xl mt-2">{{ char.name }}</h2>
        <p class="text-sm opacity-75">{{ char.status }} - {{ char.species }}</p>
      </div>
    </div>
  </div>
</template>
