import Input from './src/main';

/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.component(Input.name, Radio);
};

export default Input;