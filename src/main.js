import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import {messages} from './locales/translations';

Vue.use(VueI18n);

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
});

Object.defineProperty(Vue.prototype, '$locale', {
  get: function () {
    return i18n.locale
  },
  set: function (locale) {
    i18n.locale = locale
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
