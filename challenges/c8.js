/*
Generate a label name.

Create a function called generateLabelName that takes one parameter. The first parameter will be an object that can
describe the name of a business or a person. The function will return a string that can be used on a label.
A property on the object called isHuman differentiates between business and human names. Human names should be
generated as "LastName, FirstName MiddleName", while business names should just be the name. Note that in some cases
there will not be a middle name property, as such it will not be included in the label.

Examples:

Call: generateLabelName({name: 'Google', isHuman: false})
Returns: 'Google'

Call: generateLabelName({firstName: 'John', lastName: 'Smith', isHuman: true})
Returns: 'Smith, John'

Call: generateLabelName({firstName: 'Jane', middleName: 'Susan', lastName: 'Doe', isHuman: true})
Returns: 'Doe, Jane Susan'

*/

//Start writing your code.