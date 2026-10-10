import { divide } from '../src/calculator.js';

describe('divide', () => {
    it('divides the first number with the second one', () => {
        expect(divide(6, 2)).toBe(3);
    });

});

describe('divide', () => {
    it('tries to divide with zero', () => {
        expect(divide(6, 0)).toBe(3);
    });

});

describe('divide', () => {
    it('tries to divide a number with a string', () => {
        expect(divide(6, "hello")).toBe(3);
    });

});

describe('divide', () => {
    it('tries to divide a string with a number ', () => {
        expect(divide("6", 2)).toBe(3);
    });

});

describe('divide', () => {
    it('correct division but the expected outcome is wrong', () => {
        expect(divide(6, 2)).toBe(10);
    });

});


