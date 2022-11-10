<template>
  <git-issues></git-issues>
</template>

<script>
// import Transformers from "./Transformers";
import GitHubIssues from './GitHubIssues.vue';

export default {
  name: 'Class30',
  components: {
    // "transformers-component": Transformers,
    'git-issues': GitHubIssues,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App - Class 30',
    };
  },
};
</script>
