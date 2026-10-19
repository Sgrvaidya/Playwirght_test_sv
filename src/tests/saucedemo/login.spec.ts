import test, { expect } from "@playwright/test";
import { login } from "../../pages/login";

const validAccounts = [
  { username: "standard_user", canLogIn: true },
  { username: "locked_out_user", canLogIn: false },
  { username: "problem_user", canLogIn: true },
  { username: "performance_glitch_user", canLogIn: true },
  { username: "error_user", canLogIn: true },
  { username: "visual_user", canLogIn: true },
] as const;

const invalidCredentials = [
  {
    name: "unknown username",
    username: "unknown_user",
    password: "secret_sauce",
    error: "Username and password do not match any user in this service",
  },
  {
    name: "incorrect password",
    username: "standard_user",
    password: "wrong_password",
    error: "Username and password do not match any user in this service",
  },
  {
    name: "both fields empty",
    username: "",
    password: "",
    error: "Username is required",
  },
  {
    name: "username empty",
    username: "",
    password: "secret_sauce",
    error: "Username is required",
  },
  {
    name: "password empty",
    username: "standard_user",
    password: "",
    error: "Password is required",
  },
] as const;

test.describe("SauceDemo login credentials", () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  for (const account of validAccounts) {
    test(`${account.username} ${account.canLogIn ? "can log in" : "is locked out"}`, async ({ page }) => {
      test.skip(account.username === "performance_glitch_user", "Skip the slow performance-glitch account scenario.");

      const loginPage = new login(page);
      await page.goto("https://www.saucedemo.com/", { waitUntil: "networkidle" });
      await loginPage.login(account.username, "secret_sauce");

      if (account.canLogIn) {
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
      } else {
        await expect(loginPage.errorMessage).toContainText("locked out");
        await expect(page).toHaveURL("https://www.saucedemo.com/");
      }
    });
  }

  for (const credentials of invalidCredentials) {
    test(`rejects ${credentials.name}`, async ({ page }) => {
      const loginPage = new login(page);
      await page.goto("https://www.saucedemo.com/", { waitUntil: "networkidle" });
      await loginPage.login(credentials.username, credentials.password);

      await expect(loginPage.errorMessage).toContainText(credentials.error);
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
  }
});