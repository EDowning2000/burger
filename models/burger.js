const orm = require('../config/orm.js')

const modelBurger = {
    selectAll : (cb)=>{
      orm.selectOne('burgers', (res)=>{
        cb(res);
      });
    },
    insertOne: (cols,vals,cb)=>{
      orm.insertOne('burgers', cols, vals, (res)=>{
        cb(res);
      });
    },
    updateOne: (objColVals, condition, cb)=>{
      orm.updateOne('burgers', objColVals, condition, (res)=>{
        cb(res);
      });
    },
    deleteOne: (cb)=>{
      orm.deleteOne('burgers', condition, (res)=>{
        cb(res);
      });
    }
}






module.exports= modelBurger