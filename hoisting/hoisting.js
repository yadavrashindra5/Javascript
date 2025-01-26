//javascript preferences the declaration of variable, function and class first and initialization is known as hoisting

var x=1;
a();
b();

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}