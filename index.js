//run: node index

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8');
        console.log(data);
        // delete original file lorem.txt:
        // await fsPromises.unlink(path.join(__dirname, 'files', 'lorem.txt'), data);

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nSome new text added with append');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

// fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);   
// })

fileOps();

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error`);
    console.error(err);
    process.exit(1);
})