import Vue from 'vue';
import MnAlert from './MnAlert.vue';
import MnModal from './MnModal.vue';
import MnActionModal from './MnActionModal.vue';
import MnContextModal from './MnContextModal.vue';
import MnLoadSpinner from './MnLoadSpinner.vue';
import MnTab from './MnTab.vue';
import MnTabs from './MnTabs.vue';

Vue.component(MnAlert, 'MnAlert');
Vue.component(MnModal, 'MnModal');
Vue.component(MnModal, 'MnModal');
Vue.component(MnActionModal, 'MnActionModal');
Vue.component(MnContextModal, 'MnContextModal');
Vue.component(MnLoadSpinner, 'MnLoadSpinner');
Vue.component(MnTab, 'MnTab');
Vue.component(MnTabs, 'MnTabs');

export {
    MnAlert,
    MnModal,
    MnActionModal,
    MnContextModal,
    MnLoadSpinner,
    MnTab,
    MnTabs
};
