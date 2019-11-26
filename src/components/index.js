import Vue from "vue";
import MnClickOutside from "./MnClickOutside.vue";
import MnFetchJson from "./MnFetchJson.vue";

const Components = {
    MnClickOutside,
    MnFetchJson
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
