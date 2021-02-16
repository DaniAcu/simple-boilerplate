import app from '../../index.html'
import config from '../../app.config.json'

const componentName = location.pathname.substr(1);
const componentTitle = componentName && componentName.split('-').map(toTitleCase).join(' ') + ' Component'

const title = componentTitle || config.title;

const template = componentName ? `
  <h1>${title}</h1>
  <app-${componentName}></app-${componentName}>
` : app;

document.title = title;
document.getElementById("#app").innerHTML = template;

/* --------------------- */

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}