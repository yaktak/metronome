import Vue from 'vue';
import App from './components/App';
import store from './store';

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  store,
});
