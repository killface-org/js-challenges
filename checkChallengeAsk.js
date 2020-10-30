const fs = require('fs');
const Mocha = require('mocha');

const C_NUM = process.argv[2];

function runCheck(cNum)
{
    if (!cNum)
    {
        console.log(`Please provide a challenge number to test.`);
        process.exit(0);
    }

    const FILE_PATH = `./tests/c${cNum}test.js`

    if (!fs.existsSync(FILE_PATH))
    {
        console.log(`Cannot find challenge ${cNum}.`);
        process.exit(0);
    }

    let mocha = new Mocha({
        bail: true,
        reporter: 'spec'
    });

    mocha.addFile(FILE_PATH);

    mocha.run();
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Which challenge should I check? ', cNum => {
    runCheck(cNum);
    readline.close();
});
