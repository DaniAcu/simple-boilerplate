import { parsePath } from '../../config/scripts/utils'
import template from './index.html';
import './style.scss';

class Card extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = parsePath(template, '../');
  }
}

window.customElements.define(
  'app-card',
  Card
);
