## Clone this repo and create your own new folder i.e. "client_quiz_one"

cd into the folder
`npm create vite@latest . -- --template svelte`

`npm install`

`npm run start`

## Build the quiz

when you are ready to build the quiz, run the following command
`npm run build`

## push to github

## now in your Rails app, add the following to your controller

@svelte = 'true'
@svelte_quiz = "client_quiz_one" # this is the same name as the folder you created in the previous step

## in the custom folder add a new file called : Example: svelte_quiz_one.html.erb

## in the custom template add the following output from the svelte app you just built it is in dist/assets

### Example:

```html
<script type="module" crossorigin src="/index.0000000af.js"></script>
<link rel="stylesheet" href="/index.0000000af.css" />
```

&#8593;
RENAME THE FILES TO WHATEVER MAKES SENSE FOR YOUR QUIZ

## copy both of the above files into the public folder of your Rails app

Each time you make a change to the svelte app, you will need to rebuild the app and copy the files into the public folder of your Rails app
