const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://blueSky:${password}@cluster0.5yeev.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const name = process.argv[3];
const number = process.argv[4];

const person = new Person({
  name: name,
  number: number,
});

const printEntries = () => {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
};

const savePerson = () => {
  person.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
};

if (process.argv.length < 3) {
  console.log(
    "please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
} else if (process.argv.length === 3) {
  printEntries();
} else {
  savePerson();
}

// Fetching objects from the database
