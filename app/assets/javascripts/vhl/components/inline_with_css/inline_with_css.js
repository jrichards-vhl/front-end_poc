/** Method that provides type definitions for generating a Vue component. */
import {defineComponent} from 'vue';
import * as CSS from './inline_with_css.scss';

/**
 * A more complex component.  This one acts as a CSS delivery mechanism.
 */
const InlineWithCSS = defineComponent({
  name: 'InlineWithCSS',
  template: `
    <p class="${CSS['root']}">
      <slot></slot>
    </p>
  `,
});

export {InlineWithCSS};
