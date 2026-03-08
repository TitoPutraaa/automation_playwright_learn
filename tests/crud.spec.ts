import { test, expect } from '@playwright/test';

test('Create', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/')
  await page.getByTestId('text-input').fill('running');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByText('running')).toBeVisible()


//   await page.getByTestId('todo-item-toggle').check();
//   await page.getByTestId('todo-item-button').click();
});

test('Read', async({page})=> {
    await page.goto('https://todomvc.com/examples/react/dist/')
  await page.getByTestId('text-input').fill('cooking');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(1);
})

// test("Update", async({page}) => {
//   await page.goto('https://todomvc.com/examples/react/dist/')
//   await page.pause()
//   const addTodo = page.getByTestId('text-input')
//   const updTarget = page.getByTestId('todo-list').getByTestId('text-input')
//   await addTodo.fill('cooking');
//   await addTodo.press('Enter');
//   await addTodo.fill('swiming');
//   await addTodo.press('Enter');
//     const todo = page.locator('.todo-list li label').getByText('cooking');

//   await expect(page.getByText('buy some food')).toBeVisible()
// })

test.only('Delate', async({page}) => {
    await page.goto('https://todomvc.com/examples/react/dist/')
    const input = page.getByTestId('text-input')
    await input.fill('Coding');
    await input.press('Enter');
    await input.fill('eat');
    await input.press('Enter');
    const del = page.locator('.todo-list li').filter({hasText : 'Coding'});
    await del.hover()
    await del.getByTestId('todo-item-button').click();

    await expect(del).toHaveCount(0)
})

