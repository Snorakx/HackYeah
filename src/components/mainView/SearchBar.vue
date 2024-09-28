<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="placeholder"
        class="search-input"
      />
      <button class="search-button">
        <i class="search-icon">🔍</i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
        placeholder: 'Wyszukaj trasę'
      }
    },
    methods: {
      // Add search functionality here
    }
  }
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 5px 10px;
    width:80%;
    margin-top: 16px;
  }
  
  .search-input {
    flex-grow: 1;
    border: none;
    background: transparent;
    font-size: 16px;
    padding: 5px;
  }
  
  .search-input:focus {
    outline: none;
  }
  
  .search-button,
  .options-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
  
  .search-icon,
  .options-icon {
    font-style: normal;
  }
  </style>