import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#001d38',
                secondary: '#00adbc',
                accent: '#8c9eff',
                error: '#b71c1c',
                white: '#ffffff'
            }
        }
    }
}

export default new Vuetify(opts);
