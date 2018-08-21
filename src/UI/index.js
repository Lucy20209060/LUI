import Button from './button';
import Radio from './radio';
import Badge from './badge';
import Toast from './toast';
import Switch from './switch';
import Message from './message';
import Messagebox from './message-box';
import Input from './input';
import Tag from './tag';
import Notification from './notification';
import Icon from './icon';
import CodeInput from './code-input';
import Pagination from './pagination';
import DatePicker from './date-picker';
import Tab from './tab';
import Alert from './alert';
import InputNumber from './input-number';

import anchu_messageBox from './anchu-message-box';
import anchu_message from './anchu-message';

const components = [
	Button,
    Radio,
    Badge,
    Toast,
    Switch,
    Message,
    Messagebox,
    Input,
    Tag,
    Notification,
    Icon,
    CodeInput,
    Pagination,
    DatePicker,
    Tab,
    Alert,
    InputNumber,

    anchu_messageBox,
    anchu_message
]

const install = function(Vue) {
    /* istanbul ignore if */
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$lu_toast = Toast;
    Vue.prototype.$lu_message = Message;
    Vue.prototype.$lu_messagebox = Messagebox;
    Vue.prototype.$anchu_messageBox = anchu_messageBox;
    Vue.prototype.$anchu_message = anchu_message;
    Vue.prototype.$lu_notify = Notification;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    Button,
    Radio,
    Badge,
    Toast,
    Switch,
    Message,
    Messagebox,
    Input,
    Tag,
    Notification,
    Icon,
    CodeInput,
    Pagination,
    DatePicker,
    Tab,
    Alert,
    InputNumber,

    anchu_messageBox,
    anchu_message
}
