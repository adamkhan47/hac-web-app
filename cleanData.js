const fs = require('fs');
// Whole point is to clean data from scraper.js into a readable format

function cleanGrades(data) {
    let thing = data;
    thing = thing.substring(thing.indexOf('<div class="AssignmentClass">'), thing.length);
    fs.writeFileSync("gradeData.txt", thing);    
    return thing;
}
module.exports = cleanGrades;