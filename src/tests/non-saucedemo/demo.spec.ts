import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto('https://automatewithbipin.in/');

  await expect(page).toHaveTitle(/PracticeKart/);
});

test("first Test", async ({ page }) => {

  await page.goto("https://automatewithbipin.in/", { waitUntil: "networkidle" });
  await page.getByText("Alert / Dialogue Box", { exact: true }).click();
  page.once("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.locator("//button[@id='alertBtn']").waitFor()
  await page.locator("//button[@id='alertBtn']").click();
});

test("file Download", async ({ page }) => {
  await page.goto("https://automatewithbipin.in/");
  await page.locator("//div[@data-view='download']").click();
  await page.locator("//button[text()='Go to Download Page']").waitFor();

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download Practice File" }).click(),
  ]);
  expect(await download.failure()).toBeNull();
  test.setTimeout(30000);
  await download.saveAs("D:\\PlayWrightPractice\\src\\tests\\testout\\practice-download.txt");
  
});


test("Testnew " , async ({ page }) => {



});

