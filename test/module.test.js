import { setupTest, createPage } from '@nuxt/test-utils';

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'fixture',
    configFile: 'nuxt.config.ts',
    browser: true,
  });

  test('render', async () => {
    const page = await createPage('/');
    const html = await page.innerHTML('body');
    expect(html).toContain('Works');
  });
});
