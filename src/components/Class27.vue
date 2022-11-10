<template>
  <v-container name="ctnClass27" class="grey lighten-5">
    <v-row name="rowClass27" no-gutters>
      <v-col name="colClass27" key="class27" cols="12" sm="4">
        <v-card name="cardClass27" class="pa-2" outlined tile>
          {{ msg }}
        </v-card>
        <v-card name="sideBar" :class="['pa-2', sidebar]" outlined tile>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.dark {
  background-color: black;
  width: 100px;
  height: 100px;
}
.light {
  background-color: lightblue;
  width: 100px;
  height: 100px;
}
</style>

<script>
// import Transformers from "./Transformers";
// import GameOfThrones from "./GameOfThrones";

export default {
  name: 'Class27',
  components: {
    // "transformers-component": Transformers,
    // "got-component": GameOfThrones
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App - Class 27',
    };
  },
  props: {
    sidebar: String,
  },
  created() {
    console.log('prop sidebar', this.sidebar);
  },
};
</script>
