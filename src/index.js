const express = require("express");

const app = express();

const TodoRouter = require("./routes/todo");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/todos", TodoRouter);

module.exports = app;
