import {test, expect} from '@playwright/test'

test("LOGIN : Positive (Valid username & password)", async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
});

test("LOGIN : Negative (wrong username)", async({page}) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.fill('#username', 'wrongusername');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await expect(page.locator('#error')).toBeVisible()
  await expect(page.locator('#error')).toHaveText('Your username is invalid!')
});

test("LOGIN : Negative (wrong password)", async({page}) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.fill('#username', 'student');
  await page.fill('#password', '');
  await page.click('#submit');
  await expect(page.locator('#error')).toBeVisible() 
    await expect(page.locator('#error')).toHaveText('Your password is invalid!')

});