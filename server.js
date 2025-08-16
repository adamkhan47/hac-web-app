const express = require("express");
const path = require("path");
const app = express();
const yaml = require('js-yaml');
const fs = require('fs');


// start config.yaml reading here
const fileContents = fs.readFileSync('config.yaml', 'utf8');
const config = yaml.load(fileContents);

const PORT = config.port;



app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
