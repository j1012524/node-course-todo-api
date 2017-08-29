const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "59a4de46c4409c3ed82c4f0d";
//
// if(!ObjectId.isValid(id)) {
//   console.log('Id not Valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

var userId = '59a12e2b066d7ff7d5644792';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
});
