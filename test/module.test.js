/* eslint-disable import/no-import-module-exports */
import { setupTest, createPage } from '@nuxt/test-utils';
import module from '../lib/module';

const previewSecret = 'secret';

describe('module', () => {
  it('Throws when previewSecret is not defined', () => {
    const nuxtScope = {
      options: {
        previewMode: {
          previewSecret: undefined,
        },
      },
    };
    const scopedModule = module.bind(nuxtScope);

    expect(() => scopedModule()).toThrow();
  });

  describe('Browser tests', () => {
    setupTest({
      testDir: __dirname,
      fixture: 'fixture',
      configFile: 'nuxt.config.js',
      browser: true,
      config: {
        previewMode: {
          previewSecret,
        },
      },
    });

    it('Preview mode is disabled by default', async () => {
      const page = await createPage('/');
      const html = await page.innerHTML('body');
      expect(html).toContain('Preview enabled: false');
    });

    it('Enables preview mode when `previewSecret` and `preview` query params are correctly set', async () => {
      const page = await createPage(`/?preview=true&previewSecret=${previewSecret}`);
      const html = await page.innerHTML('body');
      expect(html).toContain('Preview enabled: true');
    });

    it('Does not enable preview mode when `preview=false`', async () => {
      const page = await createPage(`/?preview=false&previewSecret=${previewSecret}`);
      const html = await page.innerHTML('body');
      expect(html).toContain('Preview enabled: false');
    });

    it('Does not enable preview mode when `preview` query param is missing', async () => {
      const page = await createPage(`/?previewSecret=${previewSecret}`);
      const html = await page.innerHTML('body');
      expect(html).toContain('Preview enabled: false');
    });

    it('Removes preview query params after initialization', async () => {
      const previewQueryParams = `?preview=true&previewSecret=${previewSecret}`;
      const page = await createPage(`/${previewQueryParams}`);
      const updateRoute = await page.url();
      expect(updateRoute).not.toContain(previewQueryParams);
    });

    it('Renders error page when preview secret is incorrect', async () => {
      const page = await createPage('/?preview=true&previewSecret=incorrect');
      const html = await page.innerHTML('body');
      expect(html).toContain('Invalid secret');
    });
  });
});
