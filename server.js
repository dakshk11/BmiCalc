const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){

    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);

    var step1 = number1 * number1
    var step2 = number2 * 703
    var result = step2 / step1

    res.send("Answer: " + result)
})

app.listen(3000, function(){
    console.log("Calculator")
})