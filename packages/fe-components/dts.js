const {
  dependencies,
  module: filePath,
  peerDependencies,
  types: outFile,
} = require('./package.json');

module.exports = {
  compilationOptions: {
    followSymlinks: false,
  },
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
      output: {
        exportReferencedTypes: false,
      },
    },
  ],
};
