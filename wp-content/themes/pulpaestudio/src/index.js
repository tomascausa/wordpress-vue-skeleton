import _ from 'lodash';
import Vue from 'vue';
import vuetify from '../js/plugins/vuetify';

window.Vue = require('vue');
window.moment = require('moment');

// Vue Components
// require('./components/components');

// Global Event Bus
window.Events = new Vue();

// Add the router to every vue instance.
// Vue.prototype.router = router;
// Vue.prototype.goBack = () => {
//     router.go(-1);
// };

const app = new Vue({
    el: '#app',
    components: {},
    vuetify
});
