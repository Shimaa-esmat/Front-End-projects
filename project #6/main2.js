
// get localStorage value
let cardNum = window.localStorage.getItem("cardNum");
let user = window.localStorage.getItem("userName");
let MM = window.localStorage.getItem("month");
let YY = window.localStorage.getItem("year");
let cvc = window.localStorage.getItem("cvc");


if (+MM < 10) {
    MM = "0" + MM;
}
// get innerText of data
let cardValue = document.querySelector('.num-value');
let cardName = document.querySelector('#name-value');
let date = document.querySelector('#date-value');
let cvcValue = document.querySelector('#cvc-value');

cardValue.textContent = cardNum;
cardName.innerHTML = user;
cvcValue.innerHTML = cvc;
date.innerHTML = `${MM}/${YY}`;


