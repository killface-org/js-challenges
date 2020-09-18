/*
Substitution Cipher.

Create a function called subCipher that takes two parameters, the first one will be a string that is to be encoded. The
second is the number of times to shift the alphabet to create the substitution key. This will be used to encode the
string. The function needs to preserve the case of the letters, and ignore anything that is not a letter.

For example if the shift parameter is 1 that means that each character in the string should be shifted by one. So
a->z, b->a, c->b, and etc. If the shift parameter was 2 then it would be a->y, b->z, c->a, and etc.

Examples:

Call: subCipher('The Quick Brown Fox Jumps Over The Lazy Dogs.', 0)
Returns: 'The Quick Brown Fox Jumps Over The Lazy Dogs.'

Call: subCipher('The Quick Brown Fox Jumps Over The Lazy Dogs.', 1)
Returns: 'Sgd Pthbj Aqnvm Enw Itlodc Nudq Sgd Kzyx Cnfr.'

Call: subCipher('The Quick Brown Fox Jumps Over The Lazy Dogs.', 13)
Returns: 'Gur Dhvpx Oebja Sbk Whzcrq Bire Gur Ynml Qbtf.'

Call: subCipher('The Quick Brown Fox Jumps Over The Lazy Dogs.', 26)
Returns: 'The Quick Brown Fox Jumps Over The Lazy Dogs.'

Useful References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

Notes:

You can create more than one function in your solution, as long as subCipher exists and returns the correct result the
test will pass.

*/

//Start writing your code.