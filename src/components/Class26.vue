<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          {{ msg }}
        <link rel="stylesheet" href="style.css"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Transformers from "./Transformers";
// import GameOfThrones from "./GameOfThrones";

export default {
  name: 'Class26',
  components: {
    // "transformers-component": Transformers,
    // "got-component": GameOfThrones
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App - Class 26',
    };
  },
};
</script>
