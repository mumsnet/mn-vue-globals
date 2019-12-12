import Vue from "vue";
import MnAlert from './MnAlert.vue';

const Components = {
    MnAlert
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
