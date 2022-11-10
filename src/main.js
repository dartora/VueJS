// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

// createApp(App).mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>",
// });

createApp({
  router,
  components: { App },
  template: "<App/>",
}).mount("#app");
