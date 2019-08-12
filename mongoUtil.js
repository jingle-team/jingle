// mongodb database setup

// var db;
// const uri = "mongodb+srv://dev:duuopde5DdO3C6zD@cluster0-nfeqs.mongodb.net/test?retryWrites=true&w=majority";
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
// if (err) return console.log(err);
// db = client.db('test');
// });


// console.log(db)
// module.exports = db;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev:duuopde5DdO3C6zD@cluster0-nfeqs.mongodb.net/test?retryWrites=true&w=majority";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( uri,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('test');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};