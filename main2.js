// import { userName, cardNumber, cvc, month, year } from './main.js';

// console.log(userName);
// get localStorage value
let cardNumber = window.sessionStorage.getItem("cardNum");
let userName = window.sessionStorage.getItem("userName");
let month = window.sessionStorage.getItem("month");
let year = window.sessionStorage.getItem("year");
let cvc = window.sessionStorage.getItem("cvc");



if (+month < 10) {
    month = "0" + month;
}
// get innerText of data
let cardValue = document.querySelector('.num-value');
let cardName = document.querySelector('#name-value');
let date = document.querySelector('#date-value');
let cvcValue = document.querySelector('#cvc-value');

cardNumber.textContent = cardNumber;
cardName.innerHTML = userName;
cvcValue.innerHTML = cvc;
date.innerHTML = `${month}/${year}`;


