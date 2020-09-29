import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import VueMoment from "vue-momentjs";
import moment from "moment-timezone";
import "moment/locale/is";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueMoment, {
 moment
});

new Vue({
 router,
 store,
 render: (h) => h(App)
}).$mount("#app");
