const fs = require('fs');
const { convert } = require('html-to-text');
// Whole point is to clean data from scraper.js into a readable format

function cleanGrades(data) {
    let thing = data;
    thing = thing.substring(thing.indexOf('<div class="AssignmentClass">'), thing.length);
    thing = convert(thing);
    let firstClass = thing.substring(0,thing.indexOf("Quarter"));
    let arrayOfClasses = [firstClass];
    fs.writeFileSync("gradeData.txt", thing);    
    let amountOfClasses = thing.split("Show All Averages").length-2; 
    let nameofclassgetter = thing;
    for (let i = 0; i<amountOfClasses; i++) {
        nameofclassgetter = nameofclassgetter.substring(nameofclassgetter.indexOf("Show All Averages") + 17);
        let lines = nameofclassgetter.trim().split('\n');
        let className = lines.find(line => line.trim() !== '');
        if (className) {
            arrayOfClasses.push(className.trim());
        }
    }
    console.log(arrayOfClasses);
    return thing;   
    }
module.exports = cleanGrades;