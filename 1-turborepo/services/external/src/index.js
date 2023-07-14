const express = require("express");
const axios = require("axios");
const { jsonStringify } = require("@personal/json-stringify");
const app = express();

app.get("/todos/:id", async (req, res) => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
    return res.status(200).send(jsonStringify(data));
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
