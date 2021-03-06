const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({
  //   _id: new ObjectID("5b12d680c4b6423c26a7730b")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({name: 'Kyle'}).toArray().then((documents) => {
    console.log('Users');
    console.log(JSON.stringify(documents, undefined, 2));
  }, (error) => {
    console.log('Unable to retrieve Users', error);
  });

  //db.close();
});
