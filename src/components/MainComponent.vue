<template>
    <div class="flex flex-col items-center mt-6">
      <h1 class="text-4xl font-bold text-amber-400 mb-6">Rick & Morty Characters</h1>
  
      <div class="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="character in characters"
            :key="character.id"
            class="p-5 border-2 border-amber-600 rounded-3xl bg-gradient-to-b from-amber-800 to-gray-900 shadow-xl
                   hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:border-amber-400"
          >
            <img :src="character.image" :alt="character.name" class="w-full rounded-lg shadow-md border border-amber-400" />
            <h2 class="text-xl font-bold mt-3 text-amber-300 text-center">{{ character.name }}</h2>
            <p class="text-sm mt-2 text-gray-300 text-center">Status: <span class="font-semibold">{{ character.status }}</span></p>
            <p class="text-sm text-gray-300 text-center">Species: <span class="font-semibold">{{ character.species }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getCharacters } from "../assets/services/api";
  import { ref, onMounted } from "vue";
  
  const characters = ref([]);
  
  onMounted(async () => {
    characters.value = await getCharacters();
  });
  </script>
  