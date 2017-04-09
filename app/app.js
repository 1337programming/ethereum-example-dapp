import app from './components/app.vue';
import router from './router/router';
import store from './store/store';

import Vue from 'vue';
import VueEvents from 'vue-events';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';

Vue.use(VueEvents);
Vue.use(VueRouter);
Vue.use(VueStash);

new Vue({
  el: '#app',
  render: h => h(app),
  router: new VueRouter(router),
  data: {store}
});
