import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
