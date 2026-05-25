function add(a, b) {
    return a + b 
}
let result = add(1, 2)
console.log(result);


function subtract(a, b) {
    return a - b
}
let result2 = subtract(2, 1)
console.log(result2);

function multiply(a, b) {
    return a * b   
}

let result3 = multiply(2, 3)
console.log(result3);

function divide(a, b) {
    return a / b
}
let result4 = divide(4, 2)
console.log(result4);

function fullName(firstName, lastname) {
    return firstName + " " + lastname       
    
}

let result5 = fullName("Jesús", "García")
console.log(result5);

//Ejercicio A

function calculateDiscount(price, discount) {
    return  price - discount    
}

let result6 = calculateDiscount(100, 20)
console.log(result6);

//Ejercicio B

function greetUser(name) {
    return `Hello ${name}`    
}

let result7 = greetUser("Jesús")
console.log(result7);