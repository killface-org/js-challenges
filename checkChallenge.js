const fs = require('fs');
const Mocha = require('mocha');

const C_NUM = process.argv[2];

if (!C_NUM)
{
    console.log(`Please provide a challenge number to test.`);
    process.exit(0);
}

const FILE_PATH = `./tests/c${C_NUM}test.js`

if (!fs.existsSync(FILE_PATH))
{
    console.log(`Cannot find challenge ${C_NUM}.`);
    process.exit(0);
}

let mocha = new Mocha({
    bail: true,
    reporter: 'spec'
});

mocha.addFile(FILE_PATH);

mocha.run();