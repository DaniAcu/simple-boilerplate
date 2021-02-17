import app from '../../index.html'
import config from '../../app.config.json'
import { isSupportedComponent } from './components';
import { toTitleCase } from './utils';

const componentName = location.pathname.substr(1);
const componentTitle = componentName && componentName.split('-').map(toTitleCase).join(' ') + ' Component'

const title = componentTitle || config.title;

const getTemplate = (componentName) => {
  if(!componentName) return app;

  if(isSupportedComponent(componentName)) {
    return `
    <h1>${title}</h1>
    <app-${componentName}></app-${componentName}>
    `;
  }

  return `<h1>NOT FOUND</h1>`;  
}

const template = getTemplate(componentName)

document.title = title;
document.getElementById("#app").innerHTML = template;
