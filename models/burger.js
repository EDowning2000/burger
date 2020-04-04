const orm = require('../config/orm.js')

const modelBurger = {
    all : (cb)=>{
      console.log('inside burger')
      orm.all('burgers', (res)=>{
        cb(res);
      });
    },
    create: (cols,vals,cb)=>{
      orm.create('burgers', cols, vals, (res)=>{
        cb(res);
      });
    },
    update: (objColVals, condition, cb)=>{
      orm.update('burgers', objColVals, condition, (res)=>{
        cb(res);
      });
    },
    delete: (cb)=>{
      orm.delete('burgers', condition, (res)=>{
        cb(res);
      });
    }
}


module.exports= modelBurger