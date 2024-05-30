const {capitalize, reverseString, calculator, cipher, analyseArray}  =  require('./code');

describe('capitalization code', () => {
    it ('capitalizes the capitalized', () => {
        expect(capitalize('Name')).toBe('Name')
    })
    it('capitalizes a word starts with lower case', () => {
        expect(capitalize('name')).toBe('Name')
    })
    it('capitalizes a word starts with lower case followed by some uppercases', () => {
        expect(capitalize('nAmE')).toBe('Name')
    })
})

describe('reversing a string', () => {
    it('reverses a string', ()=> {
        expect(reverseString('strings')).toBe('sgnirts')
    })
})

describe('Doing Calculation', () => {
    describe('doing addition', () => {
        it ('adds 2 and 3, gives 5', ()=> {
            expect(calculator.add(2, 3)).toBe(5)
        })
        it ('adds -10 and 4, gives -6', ()=> {
            expect(calculator.add(-10, 4)).toBe(-6)
        })
    })
    describe('doing subtraction', ()=> {
        it ('subtracts 5 from 10 and gives 5', ()=> {
            expect(calculator.subtract(10, 5)).toBe(5)
        })
        it ('suntracts -5 from 10 and gives 15', ()=>{
            expect(calculator.subtract(10, -5)).toBe(15)
        })
    })
    describe('doing multiplication', ()=> {
        it ('it multiplies 3 by 5 and gives 15', ()=> {
            expect(calculator.multiply(3, 5)).toBe(15)
        })
        it ('it multiplies -3 by -5 and gives 15', ()=> {
            expect(calculator.multiply(-3, -5)).toBe(15)
        })
    })
    describe('doing division', () => {
        it ('divides -6 by 3 and gives -2', ()=> {
            expect(calculator.divide(-6, 3)).toBe(-2)
        })
        it ('divides -6 by -3 and gives -2', ()=> {
            expect(calculator.divide(-6, -3)).toBe(2)
        })
        it ('never devides a num by zero', ()=> {
            expect(calculator.divide(6, 0)).toBe(undefined)
        })
    })
})

describe('cipering a text', () => {
    it("ciphers a text 'xyz' with shift 3 to abc", () => {
        expect(cipher('xyz', 3)).toBe('abc')
    })
    it("ciphers with case preservation like 'HeLLo' with shift 3 to 'KhOOr'", ()=> {
        expect(cipher('HeLLo', 3)).toBe('KhOOr')
    })
    it ('will never change non-alphabetic characters', () => {
        expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})

describe('Nalyzing array', () => {
    it ("analyzes array of numbers and return an object with props", () => {
        expect(analyseArray([1, 8, 3, 4, 2, 6]))
        .toEqual(
                {
                    average: 4,
                    min: 1,
                    max: 8,
                    length: 6
                })
    })
})