/** Method that provides type definitions for generating a Vue component. */
import {defineComponent} from 'vue';

/**
 * A simple inline component.  Since vue.esm-browser doesn't include type
 * definitions, we would probably want to write our own.
 */
const InlineExample = defineComponent({
  name: 'InlineExample',
  template: `
    <p>
      This paragraph is rendered as an "inline component".  Vue is able to parse
      a custom tag within the markup rendered by a .erb and replace it with a
      corresponding template.
    </p>
  `,
});

export {InlineExample};
