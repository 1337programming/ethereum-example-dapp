import Home from '../components/home.vue';
import Test from '../components/test.vue';

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
}
