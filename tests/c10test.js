const fs = require('fs');
const assert = require('assert');
const _ = require('lodash');

const answers = require('./c10answers.json');

const C_NUM = 10;
const TITLE = 'Count duplicates in an array.';
const FN_NAME = 'countStates';
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
        assert.strictEqual(typeof(countStates), 'function', `No function named ${FN_NAME} was found.`);
    });

    answers.forEach(function(answer) {
        it (`Input: ${JSON.stringify(answer.input[0])} | Expected Output: ${JSON.stringify(answer.output)}`, function() {
            let result = countStates.apply(null, answer.input);
            assert.deepStrictEqual(result, answer.output,
                `Function returned invalid result. Function Output: ${JSON.stringify(result)}`);
        });
    });
});