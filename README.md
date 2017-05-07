[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](https://www.npmjs.com/package/express-mvc-generator/)

[Express'](https://www.npmjs.com/package/express-mvc-generator) Model View Controller Application Generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]


## Installation

```sh
$ npm install express-mvc-generator -g 
```
##Display the command options with the -h option:


```bash
 express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to EJS)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

```

#### For example, the following creates an Express app named myapp in the current working directory:


express myapp:

```bash
$ express myapp


   create : myapp
   create : myapp/public/js/script.js
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/js
   create : myapp/public/img
   create : myapp/public/css
   create : myapp/public/css/style.css
   create : myapp/config
   create : myapp/config/routes.js
   create : myapp/config/constants.js
   create : myapp/config/database.js
   create : myapp/config/passport.js
   create : myapp/app/views
   create : myapp/app/views/login.ejs
   create : myapp/app/views/signup.ejs
   create : myapp/app/views/index.ejs
   create : myapp/app/views/index.ejs
   create : myapp/app/views/error.ejs
   create : myapp/app/views/404.html
   create : myapp/app/controllers
   create : myapp/app/controllers/home.js

   install dependencies:
     $ cd myapp && npm install

   run the app:
     $ DEBUG=myapp:* node app or nodemon app 

   create : myapp/app/models
   create : myapp/app/models/home.js
   create : myapp/lib
   create : myapp/lib/email.js

```



Install dependencies:

```bash
$ npm install
```

###File Structure

```bash
$ express myapp


myapp
|
|
|____app
|      |____controllers
|      |    |____home.js
|      |
|      |____models
|      |     |___home.js
|      |
|      |____views
|           |___404.ejs
| 	    |___error.ejs
|           |___index.ejs
|           |___login.ejs
|           |___signup.ejs
|	
|
|_____config
|     |___auth.js
|     |___constants.js
|     |___database.js
|     |___passport.js
|     |___routes.js
|
|
|____lib
|    |___email.js
|
|____node_modules
|
|
|____public.js
|    |____css
|    |    |__style.css
|    |    
|    |____js
|    |    |__script.js
|    |
|    |____img
|    |    |__img.jpg
|    |
|    |
|    |____uploads
|         |__img.jpg
|      
|   
|
|_____app.js
|
|
|
|_____package.json

 ```




###Important Settings
1) Open your config/database.js , Please configure your mongo db.
2) Open your config/constants.js , Please configure your constants(SMTP ....). 
3) Do you want use SMTP ,Please uncomment passport.js line 95  to 98



Run The express-mvc-generator Application

```bash
$ node app or nodemon app 
```

```sh
Demo URL's

Signup : http://localhost:8042/signup
Login :  http://localhost:8042/login

```



## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
        --jade          add jade engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory


## Features

- Very Good  file structure MVC style Express. 
- Already We Given Examples of Controller and Model(Mongoose) , Passport  and Config Settings
- Pre Installed Important and Most Used NPM Packages , and used Example 
- We Given Simple And Well understanding Express MVC Example
- We already included most used and important npm modules like as pm2 ,async, body-parse, sessions, flash, cookie, dateformat, mongoose, nodemailer , nodemon, passport
- Support View engines:
  - Jade
  - Handlebars
  - Swig
  - EJS
  - Marko
  - Nunjucks
- Supported CSS pre-processors
  - SASS (both node-sass and ruby sass)
  - LESS
  - Stylus
- Supported Databases (with MVC structure):
 - MongoDB
 - MySQL
 - PostgreSQL
 - RethinkDB
 - SQLite



## Help/Assistance

Email Us : rajaram.tavalam@gmail.com          


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-mvc-generator.svg
[npm-url]: https://npmjs.org/package/express-mvc-generator
[downloads-image]: https://img.shields.io/npm/dm/express-mvc-generator.svg
[downloads-url]: https://npmjs.org/package/express-mvc-generator


