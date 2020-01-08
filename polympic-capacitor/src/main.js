import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
/* import Ionic from '@ionic/vue' */

import Home from './components/Home.vue'
import About from './components/About.vue'
import Mappy from './components/Mappy.vue'
import Tabs from './components/Tabs.vue'

import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* Vue.use(Ionic) */

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/map',
      name: 'Mappy',
      component: Mappy
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')