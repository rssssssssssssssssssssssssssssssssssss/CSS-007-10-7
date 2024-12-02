let FirstName //Questio 1
function greetUser(){
    document.getElementById('output').innerHTML='name';
    console.log(FirstName)
    
}

greetUser();


function changeText(){ //quetsion 2
    document.getElementById('message').innerText='Hello, World';
}

document.getElementById('submit2').addEventListener('click', changeText);


let number1; //question 3
let number2;
function addNumbers(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    document.getElementById('result').innerText = (number1 + number2);
}
document.getElementById('submit3').addEventListener('click', addNumbers);


let text; //question 4
function inputText(){
    text = document.getElementById('input').value;
    document.getElementById('title').innerText = (text);
}

document.getElementById('submit4').addEventListener('click', inputText);


let input1;
let input2;
function combine(){
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;
    document.getElementById('combinedText').innerText = (input1 + input2);
}
document.getElementById('submit5').addEventListener('click', combine);


function changeBackground(){
    colorBox.style.backgroundcolor = '';
    document.getElementById('colorBox').innerHTML = '<div id="colorBox" style="height:20px; width:100%; position: absolute; float:bottom; background-color:#3B24D1"></div>'
}
document.getElementById('submit6').addEventListener('click', changeBackground);