const multBtn = document.getElementById("multi");
const diviBtn = document.getElementById("divied");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subt");
const resBtn = document.getElementById("res");
const clrBtn = document.getElementById("clear");
const display = document.getElementById('total')
const numbersEl = document.querySelectorAll('.numbers')


multBtn.addEventListener('click',multiNum);
diviBtn.addEventListener('click',divNum);
addBtn.addEventListener('click', addNum);
subBtn.addEventListener('click',subNum);
clrBtn.addEventListener('click',init);
resBtn.addEventListener('click',resNum);


numbersEl.forEach(function(num){
  num.addEventListener('click',setNum)
});

let total;
let num1;
let num2;
let operator;

init();
function init() {
  total = 0;
  num1 = "";
  num2 = "";
  operator ="";
  render();
}

function render() {
  if (operator === ""){
    display.innerText=num1;
  }
  else{
  display.innerText= num1+" "+operator+" "+num2;

  }
 
}

function setOperator(op) {
    if (num1 !== "") {
      operator = op;
      render();
    }
  } 

 
function multiNum(num1,num2){
  console.log(operator)
  operator = "x"
  total = num1*num2;
   resNum();
  
 
  render();
}

function divNum(num1,num2){
    operator = "/"
    total = num1/num2;
    resNum();
      
    render();
    }

function addNum(num1,num2){
    operator = "+"
    total = num1+num2;
    resNum();
  
   
    render();
 }

 function subNum(num1,num2){
    operator = "-"
    total =num1-num2;
    resNum();
  
    
    render();
          }   

  function setNum(num){
    
    const number = num.target.innerText;
    if (operator === "") {
      num1 = number;
      display.innerText = num1;
      console.log(display.innerText)
    } else {
      num2 = number;
      display.innerText = num2;
    }
    render();
  }    
       
        
           
function resNum( ){

  display.innerText = total;
 render();
}