import Vue from 'vue'
import store from './store'
import router from './router'


import App from './views/App.vue'

new Vue({
    router,
    store,
    ...App
})
