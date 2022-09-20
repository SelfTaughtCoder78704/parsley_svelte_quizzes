## Unless you are working on an existing quiz, clone this repo and create your own new folder i.e. "client_quiz_one"

## For quiz specific documentation, see the README.md in the quiz folder

cd into the folder
`npm create vite@latest . -- --template svelte`

`npm install`

## Before you begin:

- [ ] in package.json, change the name to your quiz name
- [ ] Add the following to the vite.config.js file

```js
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "src/main.js",
      name: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["svelte"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: "Svelte",
        },
      },
    },
  },
});
```

`npm run start`

## WHEN YOU ARE DONE BUILDING THE APP: Build the quiz

In main.js change the target to the element you want it in later or leave it as is. Example:

```js
var app = new App({
  target: document.getElementById("svelte-container"),
});
```

when you are ready to build the quiz, run the following command
`npm run build`

## push to github

## now in your Rails app, do the following:

Step 1:

- Add a custom template in the custom folder. Example:
  `_client_quiz_one.html.erb`

Step 2:

- Add the following to the custom template
  Example:

```html
<div id="svelte-container"></div>
```

Step 3:

- Now add those assets to their respective folders in your Rails app.
- Grab the generated script and style tags from the the `dist` folder and add them to the Rails app. You can then require the js in your page.js and import the css in your page.scss. However, you need to change the .css to .scss

## NOTE: It is better to grab the script that has the .umd.cjs extension. However in your Rails app, just change the extension to .js and remove the .umd.cjs part of the file name.

## NOTE: Each time you make a change to the svelte app, you will need to rebuild the app and copy the files into the public folder of your Rails app.

Step 4:

```yaml
page_title: "Parsley Health"
template: master_layout
content:
  - type: custom
    template: client_quiz_one
```
