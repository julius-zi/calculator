
let op = "/";
let num1 = 1;
let num2 = 2;


function addit(num1,num2) {
    return num1 + num2;
};

function subst(num1,num2) {
    return num1 - num2;
};

function multi(num1,num2) {
    return num1 * num2;
};

function divis(num1,num2) {
    return num1 / num2;
};


function operate(num1,num2,op) {
    


}

let operations = {
    '+' : addit(num1,num2),
    '-' : subst(num1,num2),
    '*' : multi(num1,num2),
    '/' : divis(num1,num2)
};

console.log(operations[op])