//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //new ES6 feature

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect MongoDB DataBase');
  }
  console.log('Connected to MongoDB Database');
  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((res) => {
  //   console.log(res);
  // });
  //delete first occurance
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((res) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed:false}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name:'Rakesh'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users')
  .findOneAndDelete({_id: new ObjectID('599e757efaaa46dceada3cc8')})
  .then((res) => {
    console.log(res);
  });
  
//  db.close();
});
