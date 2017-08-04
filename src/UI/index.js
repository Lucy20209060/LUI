import lu_button from './button';
import lu_alert from './alert';
import lu_radio from './radio';
import lu_badge from './badge';
import lu_toast from './toast';

const components = [
	lu_button,
	lu_alert,
  lu_radio,
  lu_badge,
  lu_toast
]

const install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });


  Vue.$lu_toast = Vue.prototype.$lu_toast = lu_toast;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
	install,
	lu_button,
	lu_alert,
  lu_radio,
  lu_badge,
  lu_toast
}
