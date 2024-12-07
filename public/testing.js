const puppeteer = require("puppeteer");

async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  //open browser
  const page = await browser.newPage();
  await page.goto("https://uw-roundnet-project.web.app/");

  // test interest form
  // navigate to club interest form page

  await page.click("#form");
  await new Promise((r) => setTimeout(r, 1000));

  // input selections
  await page.type("#name", "test_name");
  await page.type("#emaill", "test_email");
  await page.select("#year", "Senior");

  await page.click(
    "#backing > form > div:nth-child(6) > sub-label:nth-child(2) > input[type=checkbox]"
  );
  await page.click(
    "#backing > form > div:nth-child(7) > sub-label:nth-child(2) > input[type=radio]"
  );

  // submit selections
  await page.click("#submit");

  // test create account button
  await new Promise((r) => setTimeout(r, 1000));

  await page.click("#signupbtn");
  await page.type("#email", "test@test.com");
  await page.type("#password", "password");
  await page.click("#signup_form > div:nth-child(3) > div > button");
}

go();
