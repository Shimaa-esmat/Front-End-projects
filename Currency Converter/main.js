let amount = document.getElementById('amount')
const fromCurrency = document.getElementById('from-currency')
const toCurrency = document.getElementById('to-currency')
let btn = document.querySelector('.btn-converter')
let switchArrow = document.querySelector('.switch')
const resultLabel = document.getElementById('result')
let numberValidation = document.querySelector("small")
let option = document.querySelector('option')
let reset = document.querySelector('.reset')


async function getCurrencyExchangeObject(){
    let rateExchangeAPI = await fetch('https://v6.exchangerate-api.com/v6/705c3dfceae1f4da1ce98dab/latest/USD')
    return await rateExchangeAPI.json()
}

async function getConversionRate(rateExchange){
    const conversionRate = rateExchange.conversion_rates;
    const currencyKeys = Object.keys(conversionRate);
    return [currencyKeys, conversionRate];
}

async function makeCurrencyList(currencies){
    const [currencyKeys, conversionRate] = await currencies;
    for (let currency = 0;currency < currencyKeys.length;currency++){
        let optionFrom = document.createElement('option');
        optionFrom.innerHTML = currencyKeys[currency];
        let optionTO = optionFrom.cloneNode(true);
        fromCurrency.appendChild(optionFrom);
        toCurrency.appendChild(optionTO);
        optionFrom.classList.add('optionFrom');
        optionTO.classList.add('optionTO');
    }

}



function chooseCurrency() {
    return new Promise((resolve) => {
        let targetFromCurrency = 'USD';
        let targetToCurrency = 'USD';

        fromCurrency.addEventListener('change', (e) => {
            targetFromCurrency = e.target.value;
            if(targetFromCurrency && targetToCurrency){
                resolve ([targetFromCurrency, targetToCurrency])
            }
        }, false);
        
        toCurrency.addEventListener('change',(e)=>{
            targetToCurrency = e.target.value;
            if(targetFromCurrency && targetToCurrency){
                resolve ([targetFromCurrency, targetToCurrency])
            }
        else{
            resolve ([targetFromCurrency, targetToCurrency])

        }
        },false)

    });
}
async function convertCurrency(amount,chooseCurrency,currencies){
    const [firstCUrrency,secondCurrency]  = await chooseCurrency()
    const [currencyKeys, conversionRate] = await currencies;
    const secondCurrencyValue = conversionRate[secondCurrency];
    const firstCUrrencyValue = conversionRate[firstCUrrency]
    let result
    result = parseInt(amount.value) * (secondCurrencyValue/firstCUrrencyValue)
    console.log(result)
    return result;

}



async function main(){
    const getCurrencyExchange = await getCurrencyExchangeObject();
    const getRate =await getConversionRate(getCurrencyExchange);
    await makeCurrencyList(getRate);
    // console.log(getRate)
    const [currencyKeys, conversionRate] = await getConversionRate(getCurrencyExchange);
    let [firstCUrrency,secondCurrency]  = await chooseCurrency()
    // console.log(conversionRate)
    // console.log(firstCUrrency)


    reset.addEventListener('click',()=>{
        location.reload()
    })
    switchArrow.addEventListener('click',()=>{
        // console.log(toCurrency.value)
    const from = fromCurrency.value;
    const to = toCurrency.value
    // location.reload()

    fromCurrency.value = to
    toCurrency.value = from
    secondCurrency = from;
    firstCUrrency=to;
    console.log(firstCUrrency)

})
// console.log(firstCUrrency)

btn.addEventListener('click', (e) => {
    numberValidation.innerHTML = ' '
    if (!(Number.isInteger(parseInt(amount.value)))){
        numberValidation.innerHTML = 'Enter number only'
        numberValidation.style.color ='red'
        e.preventDefault()
    }else {
        console.log(firstCUrrency)
        const secondCurrencyValue = conversionRate[secondCurrency];
        const firstCUrrencyValue = conversionRate[firstCUrrency]
        let result
        result = parseInt(amount.value) * (secondCurrencyValue/firstCUrrencyValue)
        console.log(result)
        resultLabel.innerHTML = result.toFixed(2)
    }

})


}

main();
















