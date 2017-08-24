//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //new ES6 feature

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB DataBase');
  }
  console.log('Connected to MongoDB Database');

  // db.collection('Todos')
  // .findOneAndUpdate(
  //   {_id: new ObjectID('599ea04ee13628d64c01d91b')},
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      _id:new ObjectID('599e73fe7ae503dcc7c3925f')
    },
    {
      $set: {
        name:'Rakesh'
      },
      $inc: {
        age: 2
      }
    },
    {
      returnOriginal: false
    }
  ).then((res) => {
    console.log(res);
  });

//  db.close();
});
