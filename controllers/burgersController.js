const express=require('express');
const burger= require('../models/burger.js');
const router = express.Router();




router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    //instead of json, this is how it renders to handlebars
    res.render("index", hbsObject);
  });
});

router.post('/api/burgers', (req,res)=>{
  burger.insertOne(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured],(result)=>{
    res.json({ id: result.insertId})//sends back the id of the new burger
    }
  )
})
router.put