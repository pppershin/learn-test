import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error(`Function doesn't work correctly!`);
}
if (capitalize('') !== '') {
    throw new Error(`Function doesn't work correctly!`);
}

console.log('Everything is alright');
