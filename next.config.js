module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'http://industrialsuccession.com/:path*',
        permanent: true,
      },
];
  },
};
