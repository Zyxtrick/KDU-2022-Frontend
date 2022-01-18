const assert = require('chai').assert;
const app = require('../app');


describe('Testing with Mocha', function(){
    describe("Testing Hello", function () {    
        it("App returns Hello World", function () {
            assert.equal(app.hello(), "Hello World!");
        })
    
        it("App must return a string", function(){
            assert.typeOf(app.hello(), 'String');
        })
    }),

    describe('Testing Fibonacci', function(){
        it('Print 5 length Fibonacci', function(){
            assert.equal(app.fibonacci(5), 3);
        })

        it('Fibonacci must return a integer', function(){
            assert.isNumber(app.fibonacci(5));
        })
    }),

    describe('Testing Equality', function(){
        it('5 == \'5\'', function(){
            assert.isTrue(app.checkEquality(5, '5'));
        })

        it('5 == [5]', function(){
            assert.isTrue(app.checkEquality(5, '5'));
        })

        it('5 ===\'5\'', function(){
            assert.isTrue(app.checkStrictEquality(5, [5]));
            
        })

        it('5 ===\'5\'', function(){
            assert.isTrue(app.checkStrictEquality(5, [5]));
            
        })

        
    })

})
