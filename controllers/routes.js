var express = require ("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(burgerData){
        console.log(burgerData);
        res.render("index", {burger_data: burgerData});
    })
})

router.put("/burgers/:id", function(req, res){
    // console.log(req.body)
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    })
})

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(res){
        console.log(res);
        res.redirect("/");
    })
})

module.exports = router;