module.exports = {
    sum: function(num1, num2){
        return num1 + num2;
    },smaller: function(num1, num2){
        // return the smallest (lower)
        if(num1 < num2)
            return num1;

            return num2;
        },    
        greater: function(num1, num2, num3){
            // if num1 is greater than num2 and num3, return num1
            // if num2 is greater than num1 and num3, return num2
            // if the first two are not true, return num3
            if(num1 > num2 && num1 > num3) return num1;
            if(num2 > num1 && num2 > num3) return num2;
            return num3;
        },
        multiply: function(num1,num2){
            return num1 * num2;
        },
        divide: function(num1, num2){
            if(num2 == 0){
            return "Error, you cannot divide by zero";
            return 0;
        }
            return num1 / num2;
        },
        isEven: function(num){
            var res = num % 2; // divide by 2, get the residue (not the result). % modulus (mod) operator
            //if(res == 0) return true;
            //return false;

            return res == 0;// return either true or false;

            // return (num %2) == 0;
        }
    };