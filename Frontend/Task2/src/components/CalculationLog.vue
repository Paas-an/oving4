<template>
    <div>
      <p v-for="(entry, index) in log" :key="index">{{ entry }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['log']
  }
  </script>