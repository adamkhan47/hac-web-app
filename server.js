const express = require("express");
const path = require("path");
const app = express();
const yaml = require('js-yaml');
const fs = require('fs');
const { scrapeGrades } = require('./scraper.js');


// #region config.yaml reading here
const fileContents = fs.readFileSync('config.yaml', 'utf8');
const config = yaml.load(fileContents);

const PORT = config.port;
let LISTENING = config.listen;
if (LISTENING === "local") {
    LISTENING = '127.0.0.1';}
else if (LISTENING === "all") {
    LISTENING = '0.0.0.0'} 
// #endregion 

// #region Endpoints start here
app.get('/grades', async (req, res) => {
  let arrayThing = req.query;
  res.send(await scrapeGrades(arrayThing.username, arrayThing.password));
});
//#endregion

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, LISTENING, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Listening on ${LISTENING}`);
});
