const fs = require('fs');
const assert = require('assert');
const _ = require('lodash');

const answers = require('./c2answers.json');

const C_NUM = 2;
const TITLE = 'Sum values in an array.';
const FN_NAME = 'sumArray';
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

    it(`Should have a function named ${FN_NAME}`, function () {
        assert.strictEqual(typeof(sumArray), 'function', `No function named ${FN_NAME} was found.`);
    });

    answers.forEach(function(answer) {
        it (`Input: [${answer.input[0]}] | Expected Output: ${answer.output}`, function() {
            let result = sumArray.apply(null, answer.input);
            assert.strictEqual(result, answer.output,
                `Function returned invalid result. Function Output: ${result}`);
        });
    });
});