import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
import App from './components/App.vue'

Vue.component('app', App)
new Vue({
    el:'#app',
    template: '<app></app>'
})