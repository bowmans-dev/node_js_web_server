//run: node serverInfo
const os = require('os');
const path = require('path');
const { add, multiply, divide } = require('./math')

test = add(6, 194)
console.log(test, " OK")
console.log(divide(602, 2))

console.log(os.platform(), os.homedir(), os.hostname(), os.freemem(), os.totalmem(), os.uptime(), os.arch(), os.cpus(), os.networkInterfaces(), os.release(), os.tmpdir(), os.type(), os.userInfo(), os.version());
