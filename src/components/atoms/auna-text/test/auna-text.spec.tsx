import { newSpecPage } from '@stencil/core/testing';
import { AunaText } from './auna-text';

describe('auna-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AunaText],
      html: `<auna-text></auna-text>`,
    });
    expect(page.root).toEqualHtml(`
      <auna-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </auna-text>
    `);
  });
});
