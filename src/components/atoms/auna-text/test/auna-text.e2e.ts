import { newE2EPage } from '@stencil/core/testing';

describe('auna-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<auna-text></auna-text>');

    const element = await page.find('auna-text');
    expect(element).toHaveClass('hydrated');
  });
});
