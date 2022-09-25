/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
