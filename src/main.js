import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import VueFire from "vuefire";
import VueFroala from "vue-froala-wysiwyg";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueFroala);

new Vue({
 router,
 store,
 render: (h) => h(App)
}).$mount("#app");
