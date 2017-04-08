# Recipe Box

An app for searching, saving, and rating recipes.

![screenshot](/Recipe-Box_Screenshot-Splash.png?raw=true "Splash Page")

![screenshot](/Recipe-Box_Screenshot-Main.png?raw=true "Main Page")

## User Stories
As a user I can search for recipes by ingredients.
As a user I can save recipes to access them later.
As a user I can delete my individual saved recipes.
As a user I can rate my individual saved recipes.
Possible future implementation: add notes to my saved recipes.
Possible future implementation: add Facebook Login.

### Technology used

* Node
* Express
* React
* React Router
* Redux
* Mongoose
* Travis CI
* Mocha
* Heroku

### Lessons Learned

* React Router recently released some pretty big changes; that caused some confusion during my development. Integrating the Material-UI library gave me quick access to some styled elements, but also created a couple of hard to diagnose issues with my React props. I ran into a problem publishing to Heroku at one point because apparently their Linux filesystem is case-sensitive, whereas on Mac & Windows computers it is not, so case differences are ignored. I had to change the name of my component instead of just capitalizing it.
