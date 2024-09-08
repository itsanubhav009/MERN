
const express = require("express");
const port = 3000;
const app = express(); //express is a function that returns something
app.get('/' , (req , res)=>{

    //db - call -
 res.send('Hello WOrld') //- > what is back responding back from server

})
//anyone try to hit your server


// 
app.listen(port , ()=> {
console.log(`Example app is listening on port ${port}`);


})

 