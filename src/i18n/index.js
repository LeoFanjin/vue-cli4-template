import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { lang } from '../ap-base/lang/index';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh',
  messages: lang
});
