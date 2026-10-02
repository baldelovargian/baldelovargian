console.log("Hello World");

//create a const variable name myname
const myname = `Gian A Baldelovar`;
let age = 18;
let number = 9158764715;
const address = `hda la consolacion`; 
//console
console.log(`Name: ${myname}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);

//functions 
function greet(name) {   
    
    return `goodmorning, ${name} `;
}
console.log(greet("Rene"));
//
function mdas(num1, num2) {   
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let addition = num1 + num2;
    let subtraction = num1 - num2;
     
   return `\nMultiplication: ${num1} * ${num2} =  ${multiplication}\nDivision: ${num1} / ${num2} =  ${division.toFixed(2)}\nAddition:${num1} + ${num2} =  ${addition}\nSubtraction: ${num1} - ${num2} = ${subtraction}`;
}


console.log(mdas(5, 3)); 




//query selector

const heading = document.querySelector("h1");
const contactHeading = document.querySelector("#contact h2");
const projectHeading = document.querySelector("#projects h2");   
const servicesHeading = document.querySelector("#services h2"); 


heading.textContent = "My website";
contactHeading.textContent = "Let's Connect";
projectHeading.textContent = "Projects";
servicesHeading.textContent = "Services";


heading.style.color = "white";
heading.style.backgroundColor = "maroon";

contactHeading.style.color = "white";
projectHeading.style.color = "white";
servicesHeading.style.color = "white"; 

// event listeners

heading.addEventListener("click",function(){
    heading.style.color = "black ";
});

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "blue";
        body.style.color = "pink";
    } else {

        body.style.backgroundColor = "pink";
        body.style.color = "black";
    }
});
