//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //new ES6 feature

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB DataBase');
  }
  console.log('Connected to MongoDB Database');

  // db.collection('Todos').find({
  //   _id: new ObjectID("599e7252973bf2dcb20f1a22")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({name:'Rakesh'}).toArray().then((docs) => {
    console.log(`Users`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
      console.log('Unable to fetch Users', err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count ${count}`);
  }, (err) => {
      console.log('Unable to fetch Users', err);
  });

//  db.close();
});
