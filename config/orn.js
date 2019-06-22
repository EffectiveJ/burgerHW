var connection = require("./connection.js");


var orn = {
  selecAll:function(tableImput, colToSearch){
      var queryString = "SELECT * FROM ??";
      connection.query(queryString[tableImput,colToSearch], function(err, result){
          if(err) throw err;
          console.log(result);
      });
  },
  insertOne: function(tableImput, colToSearch){
      var queryString = "INSERT INTO ? WHERE ?? = ?";
      connection.query(queryString[tableImput, colToSearch], function(err, result){
          if(err) throw err;
          console.log(result);
      });
  },
  updateOne: function(tableImput, colToSearch, valOfCol){
      var queryString = "SET ? FROM ? WHERE ?? = ?";
      connection.query(queryString[tableImput, colToSearch, valOfCol], function(err, result){
          if(err) throw err;
          console.log(result);
      });
  }
};
module.exports = orn;