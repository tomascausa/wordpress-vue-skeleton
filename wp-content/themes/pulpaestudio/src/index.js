import _ from 'lodash';
import Vue from 'vue';
import vuetify from '../js/plugins/vuetify';
import "../style/main.scss";

window.Vue = require('vue');
window.moment = require('moment');

// Vue Components
require('./components/components');

// Global Event Bus
window.Events = new Vue();

// Init Vue
const app = new Vue({
    el: '#app',
    components: {},
    vuetify
});
