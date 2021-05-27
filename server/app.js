require('dotenv').config();
const Express = require('express'); //1
const app = Express();  //2
app.use(Express.json());
const dbConnection = require('./db');
const controllers = require('./controllers');
const middleware = require('./middleware');

// app.use(Express.static(__dirname + '/public'))
// console.log(__dirname);
// app.get('/', (req, res) => res.render('index'));
// app.get('/pies', (req, res) => res.render('I love pie!'));

app.use(middleware.headers);
app.use('/user', controllers.userController);
app.use('/pies', controllers.pieController);

// app.use('/pies', middleware.validateSession, controllers.piecontroller);  - validates ALL routes within the pie controller

//*original listening before db
// app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));    //3

dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(process.env.PORT, () => 
        console.log(`[Server]: App is listening on ${process.env.PORT}`));  
})
.catch((err) => {
    console.log(`[Server] has crashed ${err}`);
})




/*

    1. invoking nodes 'require()' function. Specifying the name of the module we want to import (express)

    2. The app variable is actually creating our express application. We grab the express module (part 1) and invoke it. 
        - unlocks the use of HTTP requests, middleware functionality, and some other basic application settings. 

    3. Starts our server on port 4000 and runs a console log that states that it is running.  

    https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env 

    *****

    MVC - Model View Controller
    Model: in a to do app, we might define what a 'task' is and that a 'list' is a collection of tasks.
    
    View: Will define what the todos and lists look like visually. Think frontend (React).
    
    Controller: could define how a user adds a task or marks another as complete. 
        - may connect the View's add button to the Model so that when you click "add task" the model adds a new task. 

*/

/*

The authenticate() method tests if the connection with the database is okay.
That returns a promise. If the connection is good, we use the .sync() method to sync the models to our database.

*/