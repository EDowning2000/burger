//this file has all of the logic for the application
const connection = require("../config/connection.js");
const mysql = require('mysql')

function createQmarks(number){
  let questionMarks = [];
    for(var i=0; i< number; i++){
      questionMarks.push('?')
    }
    return questionMarks.toString();
} //a function to make the number of insertions to question marks so that they can be used by the query

function translateSql(obj){
  let sqlArray = [];
    for (var key in obj){
      var value = obj[key];
        if (Object.hasOwnProperty.call(ob,key)){
          if (typeof value === 'string'&& value.indexOf(' ')>= 0){
            value ="'" = value + "'"
          }
          sqlArray.push(key + '=' + value)
        }
    }
    return sqlArray.toString();
} //translates the sql data to a string



var orm = {
  selectAll: (table,cb)=>{
    var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, (err,res)=>{
        if (err){
          throw err
        }
        cb(res)
      })
  },

  insertOne: (table, cols,vals,cb)=>{
    var queryString = "INSERT INTO " +table+ ' ('+ cols.toString()+ ') '+ 'VALUES (' + createQmarks(vals.length) + ');' ;
    //this is building out the sql string. The createQmarks function adds questionmarks equal to the length of the values needed so the string recognizes its taking in input.
      console.log(queryString);
        connection.query(queryString, (err,res)=>{
          if (err){
            throw err
          }
          cb(res);
      });
  },

  updateOne: (table, objColVals, condition, cb)=>{
    var queryString = 'UPDATE ' +table+ ' SET ' + translateSql(objColVals) +
    ' WHERE ' + condition + ';';
      connection.query(queryString, (err,res)=>{
        if (err){
          throw err
        }
        cb(res)
      })
  },

  deleteOne: (table, condition, cb)=>{ //just an extra function in case a deletion is needed.
    var queryString= "DELETE FROM " +table+ " WHERE "+condition + ';';
      connection.query(queryString, (err, res)=>{
        if (err){
          throw err
        }
      })
      cb(res)
  }
}




module.exports = orm;