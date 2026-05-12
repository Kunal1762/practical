const express=require("express");
app=express();
app.use(express.static('public'));
app.use(express.json());
const PORT=3000;


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server is running on`)
});