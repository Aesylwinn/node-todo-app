const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '5b1330e584581313091ab57b11';
// var id = '5b1330e584581313091ab57b';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Invalid id', id);
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     console.log('Id not found');
//     return;
//   }
//   console.log('Todo', todo);
// }).catch((err) => {
//   console.log(err);
// });

User.findById('5b13072bb488523d62efdb6d').then((user) => {
  if (!user) {
    console.log('User not found');
    return;
  }

  console.log(user);
}).catch((error) => {
  console.log(error);
});
