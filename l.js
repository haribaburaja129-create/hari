var exp=require("express")
var poth=require("path")
var db=require("body-parser")
const path = require("path")
var mongoose=require("./m/bd")
var database=require("mongodb://localhost:27017")
var q=require("mongdb")
const {data } = require("mongoose")

var app=exp()
app.set("views",path.join(__dirname+"/viwes"))
app.set("view engine","ejs")
app.use(db.urlencoded({extended:false}))
app.use(db.json())

app.get("/",(req,res)=>
{
    res.render("l")
})
app.post("/i",(req,res)=>
{
    var a=req.body.name
    var b=req.body.email
    var c=req.body.possword
    console.log(a,b,c)
    var data=database.Schema(
        name=a,email=b,possword=c
    )
})

app.listen(6090)