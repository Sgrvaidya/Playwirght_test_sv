import fs from 'fs';
import path from 'path';
import { test as setup } from '@playwright/test';
import { login } from '../../pages/login';

const authFile = path.resolve(__dirname, '../../../playwright/.auth/user.json');

setup('global-setup', async ({ page }) => {
  const loginPage = new login(page);

  await page.goto('https://www.saucedemo.com/', { waitUntil: 'networkidle' });
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  fs.mkdirSync(path.dirname(authFile), { recursive: true });
  await page.context().storageState({ path: authFile });
});