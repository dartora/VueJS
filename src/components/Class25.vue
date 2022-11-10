<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col :key="arrow" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <a href="./class25/arrow" target="">
            Arrow
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Transformers from "./Transformers";
// import GameOfThrones from "./GameOfThrones";

export default {
  name: 'Class25',
  components: {
    // "transformers-component": Transformers,
    // "got-component": GameOfThrones
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App - Class 25',
    };
  },
};
</script>
