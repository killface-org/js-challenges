const fs = require('fs');
const assert = require('assert');
const _ = require('lodash');

const C_NUM = 1;
const TITLE = 'Let\'s create an Array.';
const FN_NAME = 'makeArray';
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

    it(`Should have a function named $FN_NAME`, function () {
        assert.strictEqual(typeof(makeArray), 'function', `No function named ${FN_NAME} was found.`);
    });

    for (let i = 5; i < 10; i++)
    {
        it(`Input: ${i}: Should return an array.`, function() {
            let result = makeArray(i);
            if (_.isArray(result))
            {
                assert.ok(result);
            }
            else
            {
                assert.fail(`Return value is not an Array. Function Returned: ${JSON.stringify(result)}`)
            }
        });

        it(`Input: ${i}: Array should have ${i}  elements.`, function() {
            let result = makeArray(i);
            assert.strictEqual(result.length, i,
                `Array length should be ${i}, function returned array with length ${result.length}. Function Returned: ${JSON.stringify(result)}`);
        });

        it(`Input: ${i}: Each element in the array should equal ${i}`, function() {
            const result = makeArray(i);
            result.forEach((item) => {
                if (item !== i)
                {
                    assert.fail(`Not all elements have the value ${i}. Function Returned: ${JSON.stringify(result)}`);
                }
            });
            assert.ok(result);
        });
    }
});