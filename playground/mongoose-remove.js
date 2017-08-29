const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'59a4ff53c1e0d546348339ed'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('59a4ff53c1e0d546348339ed').then((todo) => {
//   console.log(todo);
// });
