module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/services": { page: "/services" },
      "/services/index": { page: "/services" },
      "/contact": { page: "/contact" },
      "/contact/index": { page: "/contact" },
    };
  },
};
