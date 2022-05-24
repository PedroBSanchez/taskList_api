const express = require("express");
const { use } = require("express/lib/application");
const TaskModel = require("../src/models/task.model.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Métdos HTTP

// findAll (GET), findById (Get), save (Post), update (Put), delete (Delete)

app.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const tasks = await TaskModel.findById(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.create(req.body);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const tasks = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const tasks = await TaskModel.findByIdAndRemove(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//////////////////

// Subir Servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
