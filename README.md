# AngularJS template
---
A simple AngularJS app with a basic file structure.


## Getting started
---
To get started you can do a simple clone from the repository and install the dependencies

### Clone AngularJS_template
Clone the AngularJS_template repository using git:
```
git clone https://github.com/xxMShipmanxx/AngularJS_template.git
cd AngularJS_template
```

If you just want to start a new project without the AngularJS_template commit history then you can do:
```
git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>
```
The depth=1 tells git to only pull down one commit worth of historical data.

### Install Dependencies
The tool I use to manage this project is npm. To install the dependencies you must navigate inside the app folder and then get npm to install the dependencies. How to install dependencies:
```
cd app
npm install
```
This will install the http-server which will allow you to run your app using npm.

### Run the Application
I have preconfigured the project with a simple development web server. The simplest way to start this server is by using the following command:
```
npm start
```
Now browse to the app at http://localhost:8000/#/


## Directory Layout
---
```
app/                --> all of the source files for the application
  assets/             --> folder that contains all assets
    css/                --> folder that contains all css files
    images/             --> folder that contains all image files
    libraries/          --> folder that contains all imported libraries
      AngularJS/          --> folder that contains all needed AngularJS files
        angular-route.js    --> defines the ngRoute module, which provides routing
        angular.js          --> contains the AngularJS framework itself
      Bootstrap/          --> folder that contains all Bootstrap files
        bootstrap.js        --> files used to importing bootstrap
    scripts/            --> folder that contains all scripts that aren't libraries
  controllers/        --> folder that contains all controllers
    view1.js            --> the controller logic for view1.html
  views/              --> folder that contains all html views
    main.html           --> a partial template for the main page
    view1.html          --> a partial template for the view1 page
  app.js              --> main application module
  index.html          --> app layout file (the main html template file of the app)
  package.json        --> the config file for npm
```
