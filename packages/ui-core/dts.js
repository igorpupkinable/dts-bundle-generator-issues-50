const {
  dependencies,
  module: filePath,
  peerDependencies,
  types: outFile,
} = require('./package.json');

module.exports = {
  entries: [
    {
      filePath,
      outFile,
      libraries: {
        importedLibraries: [
          ...Object.keys(dependencies),
          ...Object.keys(peerDependencies),
        ],
      },
    },
  ],
};
