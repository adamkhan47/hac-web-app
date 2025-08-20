const puppeteer = require('puppeteer');

async function scrapeGrades(username, password, environment, domain) {
    let browser;
    if (environment === "user") {
        browser = await puppeteer.launch({ headless: true });}
    else if (environment === "dev") {
        browser = await puppeteer.launch({ headless: false });}
    else {
        throw new Error("Environment in config.yaml not setup right.");
    }
    const page = await browser.newPage();
    await page.goto('https://' + domain);
    await page.waitForSelector('#LogOnDetails_UserName');
    // above was written by ai. below is hand written
    
    try {
        page.type('#LogOnDetails_UserName', username);
        await new Promise(resolve => setTimeout(resolve, 50));
        page.type('#LogOnDetails_Password', password);
        await page.waitForSelector('#login');
        page.click('#login');
    }
    catch(error) {
        await browser.close()
        return "Invalid sending request";
    }
    await page.waitForSelector('#hac-Classes, .validation-summary-errors');
    if (await page.$('.validation-summary-errors')) {
        await browser.close()
        return "Invalid login";
    }
    const page2 = await browser.newPage();
    await page.close();
    await page2.goto('https://' + domain + '/HomeAccess/Content/Student/Assignments.aspx');
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
    await page.goto('https://' + domain);
    await page.waitForSelector('#LogOnDetails_UserName');
    // above was written by ai. below is hand written
    try {
        page.type('#LogOnDetails_UserName', username);
        await new Promise(resolve => setTimeout(resolve, 50));
        page.type('#LogOnDetails_Password', password);
        await page.waitForSelector('#login');
        page.click('#login');
    }
    catch(error) {
        await browser.close()
        return "Invalid sending request";
    }
    await page.waitForSelector('#hac-Classes, .validation-summary-errors');
    if (await page.$('.validation-summary-errors')) {
        await browser.close()
        return "Invalid login";
    }
    const page2 = await browser.newPage();
    await page.close();
    await page2.goto('https://' + domain + '/HomeAccess/Content/Student/Classes.aspx');
    const html = await page2.content();
    await browser.close();    
    return html;
}
module.exports = { scrapeGrades, scrapeSchedule };
