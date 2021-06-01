const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const uppercamelcase = require('uppercamelcase');
const { paramCase } = require('param-case');
const endOfLine = require('os').EOL;

const Components = require('./../components.json');

// String.prototype.interpolate = function(params) {
//     const keys = Object.keys(params);
//     const values = Object.values(params);
//     return new Function(...keys, `return \`${this}\`;`)(...values);
// }

const OUTPUT_PATH = path.join(__dirname, '../src/index.js');
const IMPORT_TEMPLATE = {
    ui: 'import {{name}} from \'../packages/{{package}}/index.js\';',
    element: 'import {{name}} from \'element-ui/packages/{{package}}/index.js\';',
    other: 'import { {{name}} } from \'element-ui\';',
};

const INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
const MAIN_TEMPLATE = `/* Automatically generated by './build/entry.js' */
{{include}}
import locale from 'element-ui/src/locale';
import InfiniteScroll from 'element-ui/packages/infinite-scroll/index.js';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';
{{names}}

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};
`;

var includeTemplate = [];
var installTemplate = [];
var listTemplate = [];
var namesTemplate = [];

Object.keys(Components.ui).forEach((name) => {
    const componentName = uppercamelcase(name);
    includeTemplate.push(render(IMPORT_TEMPLATE.ui, { name: componentName, package: name }));
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, { name: componentName, component: name }));
    listTemplate.push(`  ${componentName}`);
});

includeTemplate.push(render(IMPORT_TEMPLATE.other, {
    name: Components['element-ui'].map(name => uppercamelcase(name)).join(',' + endOfLine)
}));

Components['element-ui'].forEach((name) => {
    const componentName = uppercamelcase(name);
    // includeTemplate.push(render(IMPORT_TEMPLATE.element, { name: componentName, package: paramCase(name) }));

    if (['Loading', 'MessageBox', 'Notification', 'Message', 'InfiniteScroll'].indexOf(componentName) === -1) {
        namesTemplate.push(render(`{{name}}.name = 'Jr{{name}}';`, { name: componentName }));
        installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, { name: componentName, component: name }));
    }

    if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

const template = render(MAIN_TEMPLATE, {
    include: includeTemplate.join(endOfLine),
    install: installTemplate.join(',' + endOfLine),
    names: namesTemplate.join(endOfLine),
    version: process.env.VERSION || require('../package.json').version,
    list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);