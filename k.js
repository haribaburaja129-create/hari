var exp=require("express")
var app=exp()

app.get("/",(req,res)=>
{
    res.send("hello")
})
 app.listen(9000)