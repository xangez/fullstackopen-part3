const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const Person = require("./models/person");

const cors = require("cors");

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

morgan.token("body", (req, res) => {
  JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :res[content-length] :body - :response-time ms"));

// app.get("/", (request, response) => {
//   response.send("<h1>Hello World</h1>");
// });

// app.get("/info", (request, response) => {
//   const numberOfPeople = persons.length;
//   const currentTime = new Date();
//   const display = `<p>Phonebook has info for ${numberOfPeople} people</p><p>${currentTime}`;
//   response.send(display);
// });

app.get("/api/people", (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

app.get("/api/people/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
        const display = `<p>${person.name}</p><p>${person.number}</p>`;
        response.send(display);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const checkUnique = (name) => {
  let unique;
  Person.find({}).then((people) => {
    unique = people.find((person) => person.name === name);
  });
  return unique;
};

app.post("/api/people", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  } else if (checkUnique(body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
  response.send(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
