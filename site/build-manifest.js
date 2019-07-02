const { workspaces } = require('../package.json');
const fs = require('fs');
const path = require('path');
const glob = require('glob-promise');

(async () => {
  try {
    const files = await Promise.all(
      workspaces.map(async key => {
        const globPath = path.resolve(__dirname, `../${key}`);
        if (key === 'site') return;
        const filePaths = await glob(globPath);
        return filePaths.map(filePath => {
          const { name } = require(path.resolve(filePath, './package.json'));
          return name;
        });
      })
    );
    const formattedFiles = files
      .reduce((acc, curr) => acc.concat(curr), [])
      .filter(f => f);
    fs.writeFileSync(
      'manifest.json',
      JSON.stringify({ files: formattedFiles }, null, 1)
    );
  } catch (e) {
    console.error(e);
  }
})();
