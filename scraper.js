const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://hac.mckinneyisd.net');
    await new Promise(resolve => setTimeout(resolve, 2000));
    // above was written by ai. below is hand written
    // page.type('#LogOnDetails_UserName',);
})();
