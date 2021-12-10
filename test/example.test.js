// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderMushroom } from '../render-utils.js';
import { findFriendByName } from '../data-utils.js';

const test = QUnit.test;

test('renderMushroom should return a div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const div = document.createElement('div');
    div.classList.add('mushroom');
    const expected = div;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected.outerHTML);
});


test('findFriendByName should take in a name and an array, and return the name', (expect) => {


    const expected = friends[name];
                

    const actual = findFriendByName();

    expect.equal(actual, expected);
});

console.log(findFriendByName());