const basePath = process.env.GUI_BASE_PATH || "/";
console.log("GUI base path: " + basePath);

module.exports = {
  basePath: basePath,
  trailingSlash: true,
};
