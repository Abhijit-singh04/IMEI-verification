const express = require('express')
const path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser')/*in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body */

//db
// const connectDB=require('./db/connect');
//schema
//loaded into controller


// middleware
const app = express()
app.use( express.static(path.join(__dirname, 'views')))
app.use('/static', express.static('static'));
app.use(bodyParser.json());/**https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express */


//view_engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//routes
const mainrouter =require('./routes/main-router')
app.use('/api',mainrouter)


const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        // await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();