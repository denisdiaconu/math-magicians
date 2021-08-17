import '@testing-library/jest-dom'
import calculate from './testing_files/calculate'

describe('Testing calculator functions', () => {
    test('Test if the resut of 2 + 3 is 5', () => {
        const operations = {
            entire: {
                total: '3',
                operation: '+',
                next: '2'
            },
            option: '='
        }
        const result = calculate(operations.entire, operations.option);
        expect(result.total).toBe('5')
    })
    test('Test if the resut of 3 - 2 is 1', () => {
        const operationsMinus = {
            entire: {
                total: '3',
                operation: '-',
                next: '2'
            },
            option: '='
        }
        const resultMinus = calculate(operationsMinus.entire, operationsMinus.option);
        expect(resultMinus.total).toBe('1')
    })
    test('Test if the resut of 3 X 2 is 6', () => {
        const operationsPer = {
            entire: {
                total: '3',
                operation: 'x',
                next: '2'
            },
            option: '='
        }
        const resultPer = calculate(operationsPer.entire, operationsPer.option);
        expect(resultPer.total).toBe('6')
    })
    test('Test if the resut of 4 ÷ 2 is 2', () => {
        const operationsDiv = {
            entire: {
                total: '4',
                operation: '÷',
                next: '2'
            },
            option: '='
        }
        const resultDiv = calculate(operationsDiv.entire, operationsDiv.option);
        expect(resultDiv.total).toBe('2')
    })
    test('Test if the resut of 5 % 2 is 1', () => {
        const operationsOp = {
            entire: {
                total: '5',
                operation: '%',
                next: '2'
            },
            option: '='
        }
        const resultOp = calculate(operationsOp.entire, operationsOp.option);
        expect(resultOp.total).toBe('1')
    })
    test('Testing AC function', () => {
        const entireAc = {
            total: '5',
            operation: '%',
            next: '2'
        }
        const button = 'AC'
        const resultAc = calculate(entireAc, button);
        expect(resultAc.total).toBe('')
    })
    test('Testing . function', () => {
        const entireDot = {
            total: '5',
            operation: '+',
            next: '5'
        }
        const buttonDot = '.'
        const resultDot = calculate(entireDot, buttonDot);
        expect(resultDot.next).toBe('5.')
    })
})