import { newE2EPage } from '@stencil/core/testing';

describe('guw-my-stencil-widget', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<guw-my-stencil-widget></guw-my-stencil-widget>');
    const element = await page.find('guw-my-stencil-widget');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<guw-my-stencil-widget></guw-my-stencil-widget>');
    const component = await page.find('guw-my-stencil-widget');
    const element = await page.find('guw-my-stencil-widget >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
