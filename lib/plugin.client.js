export default (
  {
    enablePreview,
    query,
    route,
    redirect,
    error,
  },
  inject
) => {
  const { preview, previewSecret, ...otherQueryParams } = query;
  const persistant = JSON.parse('<%= options.persistant %>');
  const storageKey = '<%= options.storageKey %>';

  // Feature check for Local Storage API
  // @see https://mathiasbynens.be/notes/localstorage-pattern
  const storage = (() => {
    // eslint-disable-next-line new-parens
    const uid = new Date().toJSON();
    let storage;
    let result;

    try {
      (storage = window['<%= options.storageType %>']).setItem(uid, uid);
      // eslint-disable-next-line eqeqeq
      result = storage.getItem(uid) == uid;
      storage.removeItem(uid);
      return result && storage;
    } catch (exception) {
      return null;
    }
  })();

  inject('previewMode', {
    enter: enterPreview,
    exit: exitPreview,
  });

  if (persistant && storage?.getItem(storageKey)) {
    const data = JSON.parse(storage.getItem(storageKey));

    if (preview || previewSecret) {
      removePreviewQueryParams();
    }

    enterPreview(data);
    return;
  }

  if (preview !== 'true') {
    // Not in preview mode, so we don't need to do anything.
    return;
  }

  // lodash templating of plugin options passed by module.
  if (previewSecret !== '<%= options.previewSecret %>') {
    onReady(() => error({
      statusCode: 401,
      message: 'Invalid secret.',
    }));
    return;
  }

  enterPreview();
  onReady(removePreviewQueryParams);

  function enterPreview (data = {}) {
    if (persistant && storage) {
      storage.setItem(storageKey, JSON.stringify(data));
    }
    enablePreview(data);
  }

  function exitPreview () {
    if (persistant && storage) {
      storage.removeItem(storageKey);
    }
    window.location.reload();
  }

  function removePreviewQueryParams () {
    const routeWithoutPreviewQueryParams = {
      ...route,
      query: otherQueryParams,
    };
    redirect(routeWithoutPreviewQueryParams);
  }

  // The `window.onNuxtReady(fn)` are needed to avoid hydration issues:
  // @see https://github.com/nuxt/nuxt.js/issues/4491#issuecomment-648979464
  function onReady (fn) {
    window.onNuxtReady(() => fn());
  }
};
