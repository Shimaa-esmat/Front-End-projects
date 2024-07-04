const baseURL = `https://v6.exchangerate-api.com/v6/d5036f99ecc074b889af41d8/`


async function getCurrencyCode(){
    const fetchRequest = await fetch(baseURL + 'codes');
    const fetchResponse = await fetchRequest.json();
    if(!fetchRequest || !fetchResponse){
        return undefined;
    }
    const codes=[];
    for(let fullCode of fetchResponse["supported_codes"]){
        codes.push(fullCode[0])
    }
    return codes
}

async function getCurrenciesExchangeRate(sourseCurrency,destinationCurrency){
    const conversionRateRequest = await fetch(baseURL + `pair/${sourseCurrency}/${destinationCurrency}`);
    const conversionRateResponse = await conversionRateRequest.json();
    return conversionRateResponse['conversion_rate'];
}
async function exchangeRate(sourceCurrency, destinationCurrency, amount){
    const exchangeRate = await getCurrenciesExchangeRate(sourceCurrency,destinationCurrency);
    if(!exchangeRate){
        return undefined;
    }
    return (amount*exchangeRate)

}


export {getCurrencyCode , getCurrenciesExchangeRate, exchangeRate}

