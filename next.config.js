module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/services": { page: "/services.html" },
      "/contact": { page: "/contact.html" },
    };
  },
};
