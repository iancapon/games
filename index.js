const express=require("express")
const path = require('path');
const app=express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use("/tetris",(req,res)=>{
    res.redirect("/public/tetris/tetris.html")
})
app.use("/arquiarte",(req,res)=>{
    res.redirect("/public/arquiarte/main.html")
})
app.use("/mineclone",(req,res)=>{
    res.redirect("/public/mineclone/main.html")
})
app.use("/",(req,res)=>{
    res.redirect("/public/root/main.html")
})

app.listen(8000,_=>console.log("ESCUCHANDO PUERTO 8000"))