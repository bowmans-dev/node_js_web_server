// run: node stream

const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', ('utf-8'));

const ws = fs.createWriteStream('./files/new-lorem.txt');

// listen to data coming from the stream
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// ||

// instead of readable listener use pipe :

rs.pipe(ws);