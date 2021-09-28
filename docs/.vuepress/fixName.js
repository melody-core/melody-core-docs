const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, './dist/rem.github.io');
const res = path.resolve(__dirname, './dist/rem');
fs.renameSync(target, res);