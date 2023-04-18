const numberInput = document.getElementById('number');
const peopleInput = document.querySelector('.people')
const customTip = document.querySelector('.box-number')
const reset = document.querySelector('.reset');
const tipAmount = document.querySelector('.result');
const tipTotal = document.querySelector('.result2');

let tips = document.getElementsByClassName('btn-tip');
let tips1 = Array.from(tips);

let numberAmount = 0.00;
let tipValue = 5;
let personAmount = 0;
numberInput.value = numberAmount;

numberInput.addEventListener('input', numberInputF);
peopleInput.addEventListener('input', peopleInputF);
customTip.addEventListener('input', customTipF);

function numberInputF(){
     numberAmount = parseFloat(numberInput.value);
     console.log(numberAmount);
     calculateTip();
}
function peopleInputF(){
     personAmount = parseFloat(peopleInput.value);
     calculateTip();
     console.log(personAmount);
}
function customTipF(){
     tipValue = parseFloat(customTip.value);
     customTip.classList.add('active-custom');
     console.log(typeof(tipValue));
     calculateTip();
}
tips1.forEach(function(val){
     val.addEventListener('click', handleClick);
});
function handleClick(event) {
     tips1.forEach((val) => {
         val.classList.remove("active");
 
         if(event.target.innerHTML == val.innerHTML) {
             val.classList.add("active");
             tipValue = parseFloat(val.innerHTML);
             console.log(tipValue);
         }
     });
     calculateTip();
 }


function calculateTip(){
     let tipAmountFull = ((numberAmount * tipValue / 100 ) / personAmount).toFixed(2);
     let tipTotalFull = (numberAmount / personAmount + parseFloat(tipAmountFull)).toFixed(2);
 
     
     if(personAmount >= 1){
          tipAmount.innerHTML = "$" + tipAmountFull;
          tipTotal.innerHTML = "$" + tipTotalFull;
          console.log(tipAmountFull);
     }
     
}
reset.addEventListener('click', () => {
     numberInput.value = 0;
     peopleInput.value = 0;
     tipAmount.innerHTML = "$0.00";
     tipTotal.innerHTML = "$0.00";
     customTip.value = "Custom";
});
 
 
