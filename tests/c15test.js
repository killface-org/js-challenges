const fs = require('fs');
const assert = require('assert');
const _ = require('lodash');

const encAnswers = require('./c15encAnswers.json');
const decAnswers = require('./c15decAnswers.json');

const C_NUM = 15;
const TITLE = 'Vigenere Cipher.';
const FILE_PATH = `./challenges/c${C_NUM}.js`;

const script = fs.readFileSync(FILE_PATH).toString('UTF-8');

let evalError = null;

try {
    eval(script);
} catch(err)
{
    evalError = err;
}

describe(`Challenge ${C_NUM}: ${TITLE}`, function () {
    it('Should be valid JavaScript', function () {
        if (evalError === null)
        {
            assert.ok(true);
        }
        else
        {
            assert.fail('Invalid JavaScript detected.')
        }
    });

    it(`Should have a function named vigenereEncrypt`, function () {
        assert.strictEqual(typeof(vigenereEncrypt), 'function', `No function named vigenereEncrypt was found.`);
    });

    it(`Should have a function named vigenereDecrypt`, function () {
        assert.strictEqual(typeof(vigenereDecrypt), 'function', `No function named vigenereDecrypt was found.`);
    });

    encAnswers.forEach(function(answer) {
        it (`Call: vigenereEncrypt('${answer.input[0]}','${answer.input[1]}') | Expected Output: ${JSON.stringify(answer.output)}`, function() {
            let result = vigenereEncrypt.apply(null, answer.input);
            assert.deepStrictEqual(result, answer.output,
                `Function returned invalid result. Function Output: ${JSON.stringify(result)}`);
        });
    });

    decAnswers.forEach(function(answer) {
        it (`Call: vigenereDecrypt('${answer.input[0]}','${answer.input[1]}') | Expected Output: ${JSON.stringify(answer.output)}`, function() {
            let result = vigenereDecrypt.apply(null, answer.input);
            assert.deepStrictEqual(result, answer.output,
                `Function returned invalid result. Function Output: ${JSON.stringify(result)}`);
        });
    });
});