// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('renderMushroom should return a div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = actual.outerHTML;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = document.createElement('div');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
