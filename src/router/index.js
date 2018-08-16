import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import CanvasPage from '@/components/canvas';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/canvas',
      name: 'canvasPanel',
      component: CanvasPage,
    },
  ],
});

