const puppeteer = require('puppeteer');

async function scrapeGrades(username, password, environment) {
    let browser;
    if (environment === "user") {
        browser = await puppeteer.launch({ headless: true });}
    else if (environment === "dev") {
        browser = await puppeteer.launch({ headless: false });}
    else {
        throw new Error("Environment in config.yaml not setup right.");
    }
    const page = await browser.newPage();
    await page.goto('https://hac.mckinneyisd.net');
    await page.waitForSelector('#LogOnDetails_UserName');
    // above was written by ai. below is hand written
    
    page.type('#LogOnDetails_UserName', username);
    await new Promise(resolve => setTimeout(resolve, 50));
    page.type('#LogOnDetails_Password', password);
    await page.waitForSelector('#login');
    page.click('#login');
    await page.waitForSelector('#hac-Classes');
    const page2 = await browser.newPage();
    await page.close();
    await page2.goto('https://hac.mckinneyisd.net/HomeAccess/Content/Student/Assignments.aspx');
    const html = await page2.content();
    await browser.close();    
    return html;
}
async function scrapeSchedule(username, password, environment) {
    let browser;
    if (environment === "user") {
        browser = await puppeteer.launch({ headless: true });}
    else if (environment === "dev") {
        browser = await puppeteer.launch({ headless: false });}
    else {
        throw new Error("Environment in config.yaml not setup right.");
    }
    const page = await browser.newPage();
    await page.goto('https://hac.mckinneyisd.net');
    await page.waitForSelector('#LogOnDetails_UserName');
    // above was written by ai. below is hand written
    
    page.type('#LogOnDetails_UserName', username);
    await new Promise(resolve => setTimeout(resolve, 50));
    page.type('#LogOnDetails_Password', password);
    await page.waitForSelector('#login');
    page.click('#login');
    await page.waitForSelector('#hac-Classes');
    const page2 = await browser.newPage();
    await page.close();
    await page2.goto('https://hac.mckinneyisd.net/HomeAccess/Content/Student/Classes.aspx');
    const html = await page2.content();
    await browser.close();    
    return html;
}
module.exports = { scrapeGrades, scrapeSchedule };
