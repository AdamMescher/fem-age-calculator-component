const fs = require('fs');

const {
  generateComponentIndexTemplate,
  generateComponentTemplate,
  generateComponentStyleModuleTemplate,
  generateComponentStoriesTemplate,
  generateComponentStoriesMarkdownTemplate,
  generateComponentUnitTestsTemplate,
} = require('./fileTemplates/generateFileTemplates.js');

const componentName = process.argv[2];

const indexTemplate = generateComponentIndexTemplate(componentName);
const componentTemplate = generateComponentTemplate(componentName);
const componentStyleModuleTemplate =
  generateComponentStyleModuleTemplate(componentName);
const componentStoriesTemplate =
  generateComponentStoriesTemplate(componentName);
const componentStoriesMarkdownTemplate =
  generateComponentStoriesMarkdownTemplate(componentName);
const componentUnitTestsTemplate =
  generateComponentUnitTestsTemplate(componentName);

const files = [
  {
    path: `./src/components/${componentName}/index.ts`,
    template: indexTemplate,
  },
  {
    path: `./src/components/${componentName}/${componentName}.tsx`,
    template: componentTemplate,
  },
  {
    path: `./src/components/${componentName}/${componentName}.module.scss`,
    template: componentStyleModuleTemplate,
  },
  {
    path: `./src/components/${componentName}/${componentName}.stories.tsx`,
    template: componentStoriesTemplate,
  },
  {
    path: `./src/components/${componentName}/${componentName}.mdx`,
    template: componentStoriesMarkdownTemplate,
  },
  {
    path: `./__tests__/${componentName}.test.tsx`,
    template: componentUnitTestsTemplate,
  },
];

try {
  console.log(`Generating files for ${componentName} component...`);

  if (!fs.existsSync(`./src/components/${componentName}/`)) {
    fs.mkdirSync(`./src/components/${componentName}`);
  } else {
    console.log(
      `WARNING: COMPONENT DIRECTORY ALREADY EXIST AT "./src/components/${componentName}"`
    );
  }

  files.forEach((file) => {
    if (!fs.existsSync(file.path)) {
      fs.writeFileSync(file.path, file.template.trim(), 'utf-8');
    } else {
      console.log(`WARNING: COMPONENT FILE ALREADY EXIST AT "${file.path}"`);
    }
  });

  console.log(`Successfully created dir and files for ${componentName}`);
} catch (error) {
  console.log(`Something went wrong: `);
  console.error({ error });
}
