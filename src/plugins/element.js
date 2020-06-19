import Vue from 'vue';
import {
  Button,
  DatePicker,
  Dialog,
  Form,
  FormItem,
  Input,
  Select,
  Table,
  TableColumn,
  Tooltip,
  Loading,
  Message,
  MessageBox
} from 'element-ui';

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Loading);
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;
