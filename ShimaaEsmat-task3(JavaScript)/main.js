let amount = document.getElementById('amount')
const fromCurrency = document.getElementById('from-currency')
const toCurrency = document.getElementById('to-currency')
let btn = document.querySelector('.btn-converter')
let switchArrow = document.querySelector('.switch')
const resultLabel = document.getElementById('result')
let numberValidation = document.querySelector("small")


btn.addEventListener('click', function(e){
    numberValidation.innerHTML = ' '
    if (!(Number.isInteger(parseInt(amount.value)))){
        numberValidation.innerHTML = 'Enter number only'
        numberValidation.style.color ='red'
        e.preventDefault()
    }else {
        convertCurrency(amount)

    }
})


function convertCurrency(amount){
    let result
    if(fromCurrency.innerHTML == 'Egyptian Pound'){
        result = amount.value * 0.021
    }else {
        result = amount.value * 48.16
    }
    console.log(fromCurrency.innerHTML)
    resultLabel.innerHTML = result.toFixed(2)
}



switchArrow.addEventListener('click',function(){
    let from = fromCurrency.innerText;
    fromCurrency.innerHTML = toCurrency.innerHTML
    toCurrency.innerHTML = from

})


