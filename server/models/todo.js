var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });

// var newTodo2 = new Todo({
//   text: 'Edit this Video'
// });
//
// newTodo2.save().then((doc) => {
//   console.log('Todo Saved', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
