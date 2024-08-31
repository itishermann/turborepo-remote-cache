/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  serverBuildTarget: 'node-cjs',
  server: './server.js',
  ignoredRouteFiles: ['.*'],
  devServerPort: 3000,
  tailwind: true,
  devServerBroadcastDelay: 1000,
};
