<img src="https://i.imgur.com/294n16z.png">

# About the project
A simple project, designed to practice consuming a 3rd party API

## Requirements

- Create an Express app using Express Generator.  Be sure to specify `-e` to configure the app to use the EJS template engine.

- Modify the `index.ejs` template to display a `Get Chuck Norris Joke` submit button within a form (the form needs no inputs).

- When the `Get Chuck Norris Joke` button is clicked, the form will be submitted to the server.

- The server should make a request to the following endpoint at [CHUCKNORRIS.IO](https://api.chucknorris.io/):<br>`https://api.chucknorris.io/jokes/random`

- The server should respond by rendering `index.ejs` with:
	- The text of the joke received in the API's response.
	- The `Get Chuck Norris Joke` submit button


