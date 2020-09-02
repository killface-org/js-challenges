/*
Create a basic object: Part 2.

Create a function called makePerson that takes two parameters. The first parameter will be a string with a person's
name, and the second parameter will be the age. The goal of the function is to parse out the pieces of a name, and
generate and object that looks like this

{
    name: {
        first: '',
        middle: '', //Note: If there is no middle name this property should not be present.
        last: ''
    },
    age: 0
}

Examples:

Call: makePerson('John Smith', 30)
Returns: {name:{first: 'John', last: 'Smith'}, age: 30}

Call: makePerson('Jane Susan Doe', 25)
Returns: {name:{first: 'Jane', middle: 'Susan', last: 'Doe'}, age: 30}

*/

//Start writing your code.