// import the module into the file
var mathLib = require('./myMath');

function init(){
    console.log("Intro");

    var res = mathLib.sum(21, 21);
    console.log("Result: "+ res);

    var smaller = mathLib.smaller(65465545644, 65465432132654651)
    console.log("Result: " + smaller);

    var greater = mathLib.greater(651,995,23);
    console.log("Result: " + greater);

    var mult = mathLib.multiply(5,10);
    console.log("Result: "+ mult );

    var div = mathLib.divide(1,5); //if try to divide by 0, show an error , return 0 as a result
    console.log("Result: "+ div )

    var e = mathLib.isEven(98);
    console.log("Result: " + e);
};


init();