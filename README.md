# project-planner

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### to start up json-server run this command
npx json-server --watch data/db.json 

<!-- material icons -->
### How to host material icon locally
visit [material-icons Downloads](https://www.npmjs.com/package/material-icons)
yarn add material-icons@latest
npm install material-icons@latest

Import in JS (example: src/main.js in Vue CLI):
like so
import 'material-icons/iconfont/material-icons.css';

To display an icon, use one of the following:

<span class="material-icons">pie_chart</span>          <!-- Filled -->
<span class="material-icons-outlined">pie_chart</span> <!-- Outlined -->
<span class="material-icons-round">pie_chart</span>    <!-- Round -->
<span class="material-icons-sharp">pie_chart</span>    <!-- Sharp -->
<span class="material-icons-two-tone">pie_chart</span> <!-- Two Tone -->

Reducing Build Size

 To reduce the build size, import only the styles you need. For example, if you only need filled and outlined icons, import filled.css and outlined.css instead of the default material-icons.css:

 -import 'material-icons/iconfont/material-icons.css';
+import 'material-icons/iconfont/filled.css';
+import 'material-icons/iconfont/outlined.css';



{
  "projects": [
    {
      "id": 1,
      "title": "Create new homepage banner",
      "details": "Lorem ipsum",
      "complete": false
    },
    {
      "id": 2,
      "title": "Make marketing email",
      "details": "Lorem ipsum",
      "complete": true
    }
  ]
}