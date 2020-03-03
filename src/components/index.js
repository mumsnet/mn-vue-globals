import Vue from 'vue';
import MnAlert from './MnAlert';
import MnModal from './MnModal';
import MnActionModal from './MnActionModal';
import MnContextModal from './MnContextModal';
import MnLoadSpinner from './MnLoadSpinner';
import MnTab from './MnTab';
import MnTabs from './MnTabs';
import MnInputPassword from './MnInputPassword';
import MnInput from './MnInput';
import MnInputCheckbox from './MnInputCheckbox';
import MnInputRadio from './MnInputRadio';
import MnInputSetEmail from './MnInputSetEmail';
import MnContentBlock from './MnContentBlock';
import helpers from '../helpers';


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
    MnInputCheckbox,
    MnInputRadio,
    MnContentBlock,
    MnInputSetEmail
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export {
    Components,
    helpers
};
