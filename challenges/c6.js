/*
Create a basic object.

Create a function called makePerson that takes three parameters. The parameters will be the first name, last name, and
and age. Return an object that looks like this {firstName: '', lastName: '', age: 0}.

Examples:

Call: makePerson('John', 'Smith', 30)
Returns: {firstName: 'John', lastName: 'Smith', age: 30}

Call: makePerson('Jane', 'Doe', 25)
Returns: {firstName: 'Jane', lastName: 'Doe', age: 25}

*/

//Start writing your code.

function makePerson(first, last, age)
{
    return {
        firstName: first,
        lastName: last,
        age: age
    };
}