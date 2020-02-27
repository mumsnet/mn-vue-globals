import Vue from 'vue';
import MnAlert from './MnAlert.vue';
import MnModal from './MnModal.vue';
import MnActionModal from './MnActionModal.vue';
import MnContextModal from './MnContextModal.vue';
import MnLoadSpinner from './MnLoadSpinner.vue';
import MnTab from './MnTab.vue';
import MnTabs from './MnTabs.vue';
import MnInputPassword from './MnInputPassword.vue';
import MnInput from './MnInput.vue';
import MnContentBlock from './MnContentBlock.vue';


const Components = {
    MnAlert,
    MnModal,
    MnActionModal,
    MnContextModal,
    MnLoadSpinner,
    MnTab,
    MnTabs,
    MnInputPassword,
    MnInput,
    MnContentBlock
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
