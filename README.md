## Clone this repo and create your own new folder i.e. "client_quiz_one"

cd into the folder
`npm create vite@latest . -- --template svelte`

`npm install`

`npm run start`

## Build the quiz

when you are ready to build the quiz, run the following command
`npm run build`

## push to github

## now in your Rails app, do the following:

Step 1:

- Add a custom template in the custom folder. Example:
  `_client_quiz_one.html.erb`

Step 2:

- Paste the script tag from the Svelte App -- located in the dist folder -- into the file just like when you install a tracking script.
- Do the same for the style tag.

Step 3:

- Now add those assets to the public folder in your Rails app.
  NOTE:

## Each time you make a change to the svelte app, you will need to rebuild the app and copy the files into the public folder of your Rails app.

Step 4:

- Add your welcome controller but include the following code

```ruby
@svelte = 'true'
@svelte_quiz = "client_quiz_one" # or the name you gave the custom template
....
```

Step 5:

```yaml
page_title: "Parsley Health"
template: master_layout
content:
  - type: custom
    template: client_quiz_one
```
