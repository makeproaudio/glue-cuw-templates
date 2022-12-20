import { newSpecPage } from '@stencil/core/testing';
import { MyStencilWidget } from './guw-my-stencil-widget';

describe('guw-my-stencil-widget', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyStencilWidget],
      html: '<guw-my-stencil-widget></guw-my-stencil-widget>',
    });
    expect(root).toEqualHtml(`
      <guw-my-stencil-widget>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </guw-my-stencil-widget>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyStencilWidget],
      html: `<guw-my-stencil-widget first="Stencil" last="'Don't call me a framework' JS"></guw-my-stencil-widget>`,
    });
    expect(root).toEqualHtml(`
      <guw-my-stencil-widget first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </guw-my-stencil-widget>
    `);
  });
});
