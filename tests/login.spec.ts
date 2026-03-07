import {test, expect} from '@playwright/test'

test("LOGIN : Positive", async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.pause()

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
});