module.exports = {
    hello : function hello() {
        return 'Hello World!'
    },

    fibonacci : function(n) {
        let a = 0, b = 1, c = 0;
        let ans = [a, b];
        if( n <= 1 )  return a ;
        if( n <= 2 )  return b;
        for (let index = 2; index < n; index++) {
            c = a + b;
            ans[index] = c;          
            a = b;
            b = c;  
        }
        return c;
    },

    checkEquality: function(a, b){
        return a == b;
    },

    checkStrictEquality : function(a, b){
        return a === b;
    }

}