// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderMushroom } from '../render-utils.js';

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
