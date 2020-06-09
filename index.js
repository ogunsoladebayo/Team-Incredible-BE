require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mainRoute = require('./routes/route')
const app=express();

//for cross origin
app.use(cors());

// set view engine to ejs
app.set('view engine', 'ejs')

//for accepting json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//call in the route
app.use(mainRoute)

//the main page
app.get('/', (req,res)=>{
    res.send("first_name:John","last_name:John","email:boyroberto@gmail.com","phone:John,password:emi,cpassword:emi");
})

// about page
app.get('/about', (req,res)=>{
    res.render('pages/about')
})

//let handle 404 errors
app.use((req, res, next)=>{
    res.status(404).send(`no page found in this microapi.dev `);
next();
})
// //let handle error 500
app.use((err,req, res, next)=>{
console.error(err.stack);
console.log('something went wrong sorry');
})

const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`server running on ${PORT}`));
