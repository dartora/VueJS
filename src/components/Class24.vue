<template
  ><div>
    {{ msg }}
    <transformers-component></transformers-component>
    <!-- <got-component /> -->
  </div>
</template>

<script></script>

<script>
import Transformers from "./Transformers";
import GameOfThrones from "./GameOfThrones";

export default {
  name: "Class24",
  components: {
    "transformers-component": Transformers,
    "got-component": GameOfThrones
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
