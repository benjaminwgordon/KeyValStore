const express = require("express");
const app = express();
const port = 4000;

const keyValueStore = new Map();

app.post("/set", async (req, res) => {
  const queryParams = req.query;
  if (Object.keys(queryParams).length < 1) {
    res.status(400).send("invalid request: must provide a key value pair");
  } else {
    // assume first query param passed is the key val pair
    const key = Object.keys(keyValPair)[0];
    const val = keyValPair[key];
    if (!key || !val) {
      res.status(400);
      res.send("invalid request: must provide key value pair");
    } else {
      keyValueStore.set(key, val);
      res.status(200).send("ok");
    }
  }
});

app.get("/get", async (req, res) => {
  const queryParams = req.query;
  if (Object.keys(queryParams).length < 1) {
    res.status(400).send("invalid request: must provide a key to query");
  }
  // assume first query param passed is the key
  const key = Object.keys(queryParams)[0];
  if (!keyValueStore.has(key)) {
    res.status(404).send("No entry for this key exists");
  }
  const val = keyValueStore.get(key);
  res.status(200).send(val);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
