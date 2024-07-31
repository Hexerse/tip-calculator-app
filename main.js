const form = document.getElementById("form");
const buttons = document.querySelectorAll(".tip-button");
const custom = document.getElementById("custom");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const reset = document.getElementById("reset");

const calcTip = document.querySelector(".calc-tip");
const totalPerson = document.querySelector(".calc-total");

let billValue = 0;
let peopleValue = 0;
let tipValue = 0;

let billperPerson = 0;
let tipperPerson = 0;

const handleBill = () => {
  billValue = parseFloat(bill.value);
  console.log(bill.value);
};

const handlePeople = () => {
  peopleValue = parseInt(people.value);
};

const handleTip = (e) => {
  tipValue = parseFloat(e.target.value.replace("%", "") / 100);
  
};

buttons.forEach((button) => {
  button.addEventListener("click", handleTip);
});

const tipAmount = (bill, tip, people) => {
  if (bill && tip && people) {
    billperPerson = bill / people;
    tipperPerson = (bill * tip) / people;
    changeAmt(billperPerson, tipperPerson);
  }
};

const changeAmt = (billperPerson, tipperPerson) => {
  calcTip.innerHTML = `$ ${tipperPerson} `;
  totalPerson.innerHTML = `$ ${billperPerson} `;
};

const resetHTML = () => {
  calcTip.innerHTML = `$ 0`;
  totalPerson.innerHTML = `$ 0`;
};

const handleSubmit = (e) => {
  e.preventDefault();
  handleBill();
  handlePeople();
  tipAmount(billValue, tipValue, peopleValue);
};

custom.addEventListener("keyup", handleTip);
custom.addEventListener("keyup", handleSubmit)
reset.addEventListener("click", resetHTML);
form.addEventListener("submit", handleSubmit);
