const mongoose = require("mongoose");

if (process.argv.length > 3) {
  console.log(
    "please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://blueSky:${password}@cluster0.5yeev.mongodb.net/<note-app>?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is easy",
  date: new Date(),
  important: true,
});

note.save().then((result) => {
  console.log("note saved");
  mongoose.connection.close();
});

// Fetching objects from the database
