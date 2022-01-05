/* eslint-disable import/no-import-module-exports */
import { setupTest, createPage, expectModuleToBeCalledWith } from '@nuxt/test-utils';
import module from '../lib/module';

const previewSecret = 'secret';

describe('module', () => {
  describe('Plugin options', () => {
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

    const options = {
      previewSecret: 'secret',
      persistent: true,
      storageType: 'sessionStorage',
      storageKey: 'myStorageKey',
    };

    describe('Using options shorthand', () => {
      setupTest({
        testDir: __dirname,
        fixture: 'fixture',
        browser: true,
        config: {
          modules: [
            [module, options],
          ],
        },
      });

      it('Options are passed to plugin', () => {
        expectModuleToBeCalledWith('addPlugin', {
          src: expect.stringContaining('plugin.client.js'),
          options,
        });
      });
    });

    describe('Using `previewMode` object in options', () => {
      setupTest({
        testDir: __dirname,
        fixture: 'fixture',
        browser: true,
        config: {
          modules: [
            module,
          ],
          previewMode: options,
        },
      });

      it('Options are passed to plugin', () => {
        expectModuleToBeCalledWith('addPlugin', {
          src: expect.stringContaining('plugin.client.js'),
          options,
        });
      });
    });
  });

  describe('Browser tests', () => {
    setupTest({
      testDir: __dirname,
      fixture: 'fixture',
      browser: true,
      config: {
        modules: [
          module,
        ],
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
