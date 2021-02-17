import templates from '../../components/**/*.html';
import '../../components/**/*.scss';

const components = new Map(
  Object.keys(templates).map((name) => [name, templates[name].index])
);

components.forEach((template, name) => {
  window.customElements.define(
    `app-${name}`,
    class extends HTMLElement {
      constructor() {
          super();
          this.innerHTML = template;
      }
    }
  );  
})

export const isSupportedComponent = name => Array.from(components.keys()).some(component => component === name);


