import Vue from "vue";
import Component1 from "./Component1.vue";
import Component2 from "./Component2.vue";

const Components = {
    Component1,
    Component2
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export {
    Component1,
    Component2
}
