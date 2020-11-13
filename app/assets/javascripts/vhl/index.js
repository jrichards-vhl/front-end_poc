/**
 * In order to support DOM templates (templates rendered by .erb's), we have to
 * import a distribution of Vue that includes its template compiler.  The
 * default Vue distribution assumes a bundler with the ability to compile
 * component files at build time.
 * @see node_modules/vue/README.md
 */
// @ts-ignore
import * as Vue from 'vue/dist/vue.esm-browser';
import {InlineExample} from './components/inline_example';
import {InlineWithCSS} from './components/inline_with_css';

const app = Vue.createApp({
  template: '#root-template',
});

app.component('InlineExample', InlineExample);
app.component('InlineWithCSS', InlineWithCSS);

app.mount('#vue-app');
