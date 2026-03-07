import { test, expect } from '@playwright/test';

test('Registrasi : Positive', async ({ page }) => {
    await page.goto('https://testrigor.com/sign-up/')
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Tito');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Bamulo');
  await page.getByRole('textbox', { name: 'Email*' }).fill(`bamulotito${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Company name*' }).fill('Djoin');
  await page.getByRole('textbox', { name: 'Password*' }).fill('Password123!');
  await page.getByRole('textbox', { name: 'Password Confirmation*' }).fill('Password123!');
  await page.getByRole('button', { name: 'Register Now' }).click();
  await page.waitForURL('https://testrigor.com/sign-up/sign-up-form-paid-account/')

    await expect(page).toHaveURL("https://testrigor.com/sign-up/sign-up-form-paid-account/")
});

test('Registrasi : Negative (password tidak valid)', async ({ page }) => {
    await page.goto('https://testrigor.com/sign-up/')
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Tito');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Bamulo');
  await page.getByRole('textbox', { name: 'Email*' }).fill(`bamulotito${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Company name*' }).fill('Djoin');
  await page.getByRole('textbox', { name: 'Password*' }).fill('Tito3!');
  await page.getByRole('textbox', { name: 'Password Confirmation*' }).fill('Tito3!');
  await page.getByRole('button', { name: 'Register Now' }).click();
    await expect(page.locator('#error-state')).toHaveText('Oops! Password must be at least 8 characters long.')
});

test('Registrasi : Negative (gmail format tidak valid)', async ({ page }) => {
    await page.goto('https://testrigor.com/sign-up/')
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Tito');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Bamulo');
  await page.getByRole('textbox', { name: 'Email*' }).fill(`format password salah`);
  await page.getByRole('textbox', { name: 'Company name*' }).fill('Djoin');
  await page.getByRole('textbox', { name: 'Password*' }).fill('Tito3!');
  await page.getByRole('textbox', { name: 'Password Confirmation*' }).fill('Tito123!');
  await page.getByRole('button', { name: 'Register Now' }).click();
    await expect(page.locator('#error-state')).toHaveText('Oops! Please enter a valid email')
});