// Serves the static portfolio from the Sites asset bucket.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
