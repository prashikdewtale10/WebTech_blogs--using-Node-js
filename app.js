const express =require('express');
const { Shape } = require('three');
const bodyParser=require('body-parser')



const app = express()
const port = 5000

// STatic files
app.use(express.static('public'));
app.use("/css",express.static(__dirname+"public/css"))
app.use("/img",express.static(__dirname+"public/img"))
app.use("/js",express.static(__dirname+"public/js"))

// Templating engine
app.set("views",'./src/views')
app.set("view engine",'ejs')
app.engine('ejs', require('ejs').__express);
app.use(bodyParser.urlencoded({extended:true}))


// Routes 

const newsRouter = require('./src/routes/news')
app.use("/",newsRouter)
app.use("/article",newsRouter)

// app.get("/",(req,res)=>{
//     res.write("Hello Prashik")
// })



// app listening 
app.listen(port,()=>{
    console.log(`App is Listening on port ${port}`)
})
