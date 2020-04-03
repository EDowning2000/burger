const orm = require('../config/orm.js')

const modelBurger = {
  all: (cb)=>{
    orm.allCats((res)=>{
      cb(res)
    })
  }
}






module.exports= modelBurger