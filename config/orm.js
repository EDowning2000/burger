const connection = require("../config/connection.js");
const mysql = require('mysql')

var orm = {
  allCats = (cb)=>{
    var queryString = 'SELECT * FROM burger';
      connection.query(queryString, (err, result)=>{
        if(err) throw err;
          cb(result)
      })
  }
}




module.exports = orm;