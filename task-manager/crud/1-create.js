// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log('id:', id);
console.log('timestamp:', id.getTimestamp());
console.log('raw id:', id.id, ', length:', id.id.length);
console.log('hex id:', id.toHexString(), ', length:', id.toHexString().length);


MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database server.');
  }

  console.log('Connected to database server successfully!');
  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   name: 'Hari',
  //   age: 25
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user!');
  //   }

  //   console.log('Insert user successful!');
  //   console.log(result.ops);
  // });

  // db.collection('users').insertMany([
  //   { name: 'Ram', age: 22 },
  //   { name: 'Krish', age: 27 }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users!');
  //   }

  //   console.log('Insert users successful!');
  //   console.log(result.ops);
  // });

  // db.collection('tasks').insertMany([
  //   { description: 'Buy milk', completed: true },
  //   { description: 'Fill fuel', completed: false },
  //   { description: 'Pay school fees', completed: true }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks!');
  //   }

  //   console.log('Insert tasks successful!');
  //   console.log(result.ops);
  // });
});
