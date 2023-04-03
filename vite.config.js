const path = require('path')

export default {
  base: "/NSIGN/",
  root: "src",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    assets: [
      {
        type: "css",
        src: "src/scss/styles.scss",
      },
    ],
    outDir: "../dist",
  },
};
