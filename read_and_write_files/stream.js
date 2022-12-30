//run: node stream
const fs = require('fs');
const rs = fs.createReadStream('./files/lorem.txt', ('utf-8'));
const ws = fs.createWriteStream('./files/new-lorem.txt');

// listen to data coming from the stream and write it to the new file
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// or
// instead use pipe:

rs.pipe(ws);