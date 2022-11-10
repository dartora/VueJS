<template>
  <v-card>
    <v-item
      ><div>
        {{ msg }} <br />
        ERROR 404
      </div>
    </v-item>
  </v-card>
</template>

<script>
// import Transformers from "./Transformers";
export default {
  name: 'Error404',
  data() {
    return {
      msg: 'Página não encontrada!',
    };
  },
};
</script>
