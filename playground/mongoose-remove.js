const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b1355053ca5321d2b945e93'});

Todo.findByIdAndRemove('5b1355053ca5321d2b945e93').then((todo) => {
  console.log(todo);
});
