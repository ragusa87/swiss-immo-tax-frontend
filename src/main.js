import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import {messages} from './locales/translations';

Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    reference: 0
  },
  mutations: {
    reference(state, value) {state.reference = parseFloat(value)}
  }
})

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
});

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
