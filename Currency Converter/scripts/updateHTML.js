import {getCurrencyCode, exchangeRate} from './currenciesAPI.js'

async function addCurrencyCodeTOList(){
    const codes = await getCurrencyCode()
    if (!codes) {
        throw new Error("could not get currencies codes")
    }
    const fromCurrency = document.getElementById('from-currency')
    const toCurrency = document.getElementById('to-currency')

    for (const code of codes) {
        let optionFrom = document.createElement('option')
        optionFrom.innerHTML = code
        let optionTO = optionFrom.cloneNode(true)
        fromCurrency.appendChild(optionFrom)
        toCurrency.appendChild(optionTO)
        optionFrom.classList.add('optionFrom')
        optionTO.classList.add('optionTO')
    }
}
async function conversionButtonEvent(){
    const conversionBtn = document.querySelector('.btn-converter')
    conversionBtn.addEventListener('click',async ()=>{
        const exchangeResult = await exchangeRate(
            document.getElementById('from-currency').value,
            document.getElementById('to-currency').value,
            document.getElementById('amount').value
    )
        validationInputNumner()
        const resultLabel = document.getElementById('result')
        resultLabel.innerHTML = exchangeResult.toFixed(2)
    })
}
function validationInputNumner(){
    let validationFeild = document.querySelector("small");
    if(!(Number.isInteger(parseFloat(document.getElementById('amount').value)))){
        validationFeild.innerHTML = 'Enter number only'
        validationFeild.style.color ='red'
        validationFeild.style.fontSize = '10px'
        e.preventDefault()
    }else{
        validationFeild.innerHTML = " ";
    }

}

async function resetButton() {
    const reset = document.querySelector('.reset')
    reset.addEventListener('click',async ()=>{
        location.reload();

    })
}
async function switchCurrency(){
    const switchArrow = document.querySelector('.switch')
    switchArrow.addEventListener('click',async ()=>{
        let to = document.getElementById('to-currency').value
        let from = document.getElementById('from-currency').value
        document.getElementById('to-currency').value = from;
        document.getElementById('from-currency').value = to;
    })
}
async function main(){
    try{
        await switchCurrency()
        await addCurrencyCodeTOList()
        await conversionButtonEvent()
        await resetButton()
    }catch(err){
        console.log("faced an err, ", err)
    }
}

main()
