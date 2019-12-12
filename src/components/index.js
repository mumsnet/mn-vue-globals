import Vue from 'vue';
import MnAlert from './MnAlert.vue';
import MnModal from './MnModal.vue';

const Components = {
    MnAlert,
    MnModal
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
