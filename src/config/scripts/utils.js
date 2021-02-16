export function parsePath (html, path){
  return html.replace(/@\//g, path)
}