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
  display.innerText= `${num1} ${operator} ${num2}`;

  }
 
}

function setOperator(op) {
    if (num1 !== "") {
      operator = op;
      render();
    }
  } 

 
function multiNum(){
  operator = "x"
  render();
 
}

function divNum(){
    operator = "/"
    render();
     
    }

function addNum(){
    operator = "+"
    render();
  
   

 }

 function subNum(){
    operator = "-"
    resNum();render();
   
          }   

  function setNum(num){
    
    const number = num.target.innerText;
    if (operator === "") {
      num1 += number;
      display.innerText = num1;
      console.log(display.innerText)
    } else {
      num2 += number;
      display.innerText = num2;
    }
    render();
  }    
       
        
           
function resNum( ){
  const n1=Number(num1);
  const n2 = Number(num2);

  switch(operator) {
    case "x":
      total = n1 * n2;
      break;
    case "/":
      total = n1 /n2;
      break;
    case "+":
      total = n1 + n2;
      break;
    case "-":
      total = n1- n2;
      break;
    
  }
  
  display.innerText = total;

}