const fs = require('fs');

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const componentName = process.argv[2];

const dashCase = /[a-z\-]+$/;

if(!componentName.match(dashCase)) {
  console.error("Format Error: Remeber to use dash case for the name like this `component-name`");
  process.exit(1);
}

console.log("Generating files...");

const componentTitle = componentName.split("-").map(toTitleCase).join("");

const html = 
`<div class="${componentName}">
  ${componentTitle} Component!
</div>
`;

const scss =
`.${componentName}{
  width: 200px;
  height: 200px;
  background-color: #0092aa;
  margin: 5px;
}
`

const dir = `./src/components/${componentName}`;

if (fs.existsSync(dir)) {
  console.error(`Generate Error: Component ${componentName} already exist.`);
  process.exit(1);
}

fs.mkdirSync(dir);

const content = {
  'index.html': html,
  'style.scss': scss,
};

Object.keys(content).forEach(file => fs.writeFileSync(`${dir}/${file}`, content[file]))
