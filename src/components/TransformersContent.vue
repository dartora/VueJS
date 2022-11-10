<template>
  <div>
    <h4>Transformers Content</h4>
    {{ $route.params.name }}
  </div>
</template>
<!-- <template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<script>
export default {
  name: 'TransformersContent',
  data() {
    return {
      transformersContent: [{ name: '' }, { name: '' }, { name: '' }],
    };
  },
};
</script>
