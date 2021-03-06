var orn = require("../controllers/orn.js");

var burger = {
    all: function (cb) {
        orn.all("burgers", function (res) {
            cb(res)
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function(objColVals, condition, cb) {
        orm.delete("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
};
module.exports = burger;