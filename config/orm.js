var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, res){
            if(err) throw err;
            cb(res);
        })
    },

    update: function(tableInput, devouredStatus, cb){
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + devouredStatus + ";", function(err, res){
            if (err) throw err;
            cb (res);
        })
    }, 

    create: function(tableInput, burgerTitle, cb){
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES('" + burgerTitle + "');", function(err, result){
            if (err) throw err;
            cb(res);
        })
    }

}

module.exports = orm;