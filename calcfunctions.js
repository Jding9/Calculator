var firstInput;
var secondInput;
var activeSign = "";
var result;

var divide = document.getElementById("divide");
divide.style.cursor="pointer";
divide.addEventListener("click", function() {
    activeSign = "divide";
});

var multiply = document.getElementById("multiply");
multiply.style.cursor="pointer";
multiply.addEventListener("click", function() {
    activeSign = "multiply";
});

var subtract = document.getElementById("subtract");
subtract.style.cursor="pointer";
subtract.addEventListener("click", function() {
    activeSign = "subtract";
});

var add = document.getElementById("add");
add.style.cursor="pointer";
add.addEventListener("click", function() {
    activeSign = "add";
});

var equal = document.getElementById("equal");
equal.style.cursor="pointer";
equal.addEventListener("click", function() {
    if (activeSign == "divide") {
        result = firstInput / secondInput;
        document.getElementById("resultoutput").innerHTML = result;
        firstInput = result;
    } else if (activeSign == "multiply") {
        result = firstInput * secondInput;
        document.getElementById("resultoutput").innerHTML = result;
        firstInput = result;     
    } else if (activeSign == "subtract") {
        result = firstInput - secondInput;
        document.getElementById("resultoutput").innerHTML = result;
        firstInput = result;     
    } else if (activeSign == "add") {
        result = firstInput + secondInput;
        document.getElementById("resultoutput").innerHTML = result;
        firstInput = result;     
    } else {
        result = firstInput;
        document.getElementById("resultoutput").innerHTML = result;
    }
    activeSign = "";
});

var clear = document.getElementById("clear");
clear.style.cursor="pointer";
clear.addEventListener("click", function() {
    result = "";
    firstInput = "";
    secondInput = "";
    activeSign = "";
    document.getElementById("resultoutput").innerHTML = "";
});


var one = document.getElementById("1");
one.style.cursor="pointer";
one.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 1;
    } else if (firstInput) {
        secondInput = 1;
    } else {
        firstInput = 1;
    }
});

var two = document.getElementById("2");
two.style.cursor="pointer";
two.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 2;
    } else if (firstInput) {
        secondInput = 2;
    } else {
        firstInput = 2;
    }
});

var three = document.getElementById("3");
three.style.cursor="pointer";
three.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 3;
    } else if (firstInput) {
        secondInput = 3;
    } else {
        firstInput = 3;
    }
});

var four = document.getElementById("4");
four.style.cursor="pointer";
four.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 4;
    } else if (firstInput) {
        secondInput = 4;
    } else {
        firstInput = 4;
    }
});

var five = document.getElementById("5");
five.style.cursor="pointer";
five.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 5;
    } else if (firstInput) {
        secondInput = 5;
    } else {
        firstInput = 5;
    }
});

var six = document.getElementById("6");
six.style.cursor="pointer";
six.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 6;
    } else if (firstInput) {
        secondInput = 6;
    } else {
        firstInput = 6;
    }
});

var seven = document.getElementById("7");
seven.style.cursor="pointer";
seven.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 7;
    } else if (firstInput) {
        secondInput = 7;
    } else {
        firstInput = 7;
    }
});

var eight = document.getElementById("8");
eight.style.cursor="pointer";
eight.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 8;
    } else if (firstInput) {
        secondInput = 8;
    } else {
        firstInput = 8;
    }
});

var nine = document.getElementById("9");
nine.style.cursor="pointer";
nine.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 9;
    } else if (firstInput) {
        secondInput = 9;
    } else {
        firstInput = 9;
    }
});

var zero = document.getElementById("0");
zero.style.cursor="pointer";
zero.addEventListener("click", function() {
    if (activeSign == "") {
        firstInput = 0;
    } else if (firstInput) {
        secondInput = 0;
    } else {
        firstInput = 0;
    }
});