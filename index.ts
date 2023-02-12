import puppeteer from 'puppeteer-core';


(async () => {

  const { BROWSER_EXE_PATH, USERNAME_TESTING, PASSWORD_TESTING } = process.env;

  const browser = await puppeteer.launch({ executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", headless: false });
  const page = await browser.newPage();
  await page.goto("https://twitter.com")
  await (new Promise(r => setTimeout(r, 10000)));
  await browser.close()
})();