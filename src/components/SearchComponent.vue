<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["updateFilters"]);

// Filtros reactivos
const searchQuery = ref<string>("");
const statusFilter = ref<string>("");
const speciesFilter = ref<string>("");

// Función para emitir cambios al padre
const updateFilters = () => {
  emit("updateFilters", {
    name: searchQuery.value,
    status: statusFilter.value,
    species: speciesFilter.value,
  });
};
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
    <!-- Input de búsqueda -->
    <input 
      v-model="searchQuery"
      @input="updateFilters"
      type="text" 
      placeholder="Buscar por nombre..." 
      class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600"
    />

    <!-- Filtro por estado -->
    <select v-model="statusFilter" @change="updateFilters" class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600">
      <option value="">Todos los estados</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconocido</option>
    </select>

    <!-- Filtro por especie -->
    <select v-model="speciesFilter" @change="updateFilters" class="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600">
      <option value="">Todas las especies</option>
      <option value="Human">Humano</option>
      <option value="Alien">Alien</option>
      <option value="Robot">Robot</option>
    </select>
  </div>
</template>
