import Vue from 'vue';
import MnAlert from './MnAlert.vue';
import MnModal from './MnModal.vue';
import MnActionModal from './MnActionModal.vue';
import MnContextModal from './MnContextModal.vue';
import MnLoadSpinner from './MnLoadSpinner.vue';
import MnTab from './MnTab.vue';
import MnTabs from './MnTabs.vue';


const Components = {
    MnAlert,
    MnModal,
    MnActionModal,
    MnContextModal,
    MnLoadSpinner,
    MnTab,
    MnTabs
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
