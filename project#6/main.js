// variable
let userInfo = document.querySelectorAll('input');
let form = document.querySelector("form")
let nameInput = userInfo.item(0);
let cardNumberInput = userInfo.item(1);
let monthNumberInput = userInfo.item(2);
let yearNumberInput = userInfo.item(3);
let cvcNumberInput = userInfo.item(4);
let cardValue = document.querySelector('.num-value');
let cardName = document.querySelector('#name-value');
let date = document.querySelector('#date-value');
let cvcValue = document.querySelector('#cvc-value');


 let userName = "";
 let cardNumber = "";
 let month = "00";
 let year = "00";
 let cvc = "";


// let cardNumber = window.localStorage.getItem("cardNum");
// let userName = window.localStorage.getItem("userName");
// let month = window.localStorage.getItem("month");
// let year = window.localStorage.getItem("year");
// let cvc = window.localStorage.getItem("cvc");




    








// functions to test validation
function error (input,msg){
    let parent = input.parentElement;
    let error = parent.querySelector('small');
    input.style.border = "hsl(0, 100%, 66%)  solid  1px"
    error.textContent = msg;
}

function success (input){
    let parent = input.parentElement;
    let error = parent.querySelector('small');
    input.style.border = "hsl(270, 3%, 87%) solid  2px"
    error.textContent = "";

}

function validateStringField(inputField,inputFieldData){
    if  (inputFieldData == ""){
        error(inputField,'Username cannot be blank.');  
        return false;  
    }
    success(inputField);
    return true;
}


function validateNumberField(inputField,inputFieldData,digit,min,max){
    if  (!inputFieldData){
        error(inputField,'Number cannot be blank.');
        return false 
    }
    if (!parseFloat(inputFieldData)) {
        error(inputField,'Wrong format, number only');
        return false;
    }
    if( (inputFieldData.split(" ").join("").length > digit || inputFieldData.split(" ").join("").length < digit)){
        inputField.setAttribute("maxlength", digit);
        inputField.setAttribute("minlength", digit);
        error(inputField,`Number must be ${digit} digit.`);
        console.log(inputFieldData.length);
        return false;
    }
    // if( (inputFieldData.split(" ").join("").length > digit)){
    //     inputField.setAttribute("maxlength", digit);
    //     inputField.setAttribute("minlength", digit);
    //     error(inputField,`Number must be ${digit} digit.`);
    //     console.log(inputFieldData.length);
    //     return false;
    
    if((max !== null) && (+inputFieldData < min || +inputFieldData > max )){
        error(inputField,`Number must be larger than ${min} and smaller than ${max}.`);
        console.log("error")
        return false;
    }

    
    success(inputField);
    return true;
}








userInfo.forEach(e =>{
    e.oninput = function (){
        if(e.id === "card-name" ){
            userName = e.value
            window.sessionStorage.setItem("userName",userName)
            cardName.innerHTML = userName;
            console.log(userName.length)
            validateStringField(nameInput,userName);
        }
        if(e.id === "MM" ){
            month = e.value
            window.sessionStorage.setItem("month",month)
            validateNumberField(monthNumberInput,month,2,1,12);            
            date.innerHTML = `${month}/${year}`;


        }
        if(e.id === "card-num" ){
            cardNumber = e.value
            window.sessionStorage.setItem("cardNumber",cardNumber)
            cardValue.textContent = cardNumber;
            validateNumberField(cardNumberInput,cardNumber,16,null,null)

        }
        if(e.id === "YY" ){
            year=e.value;
            window.sessionStorage.setItem("year",year)
            validateNumberField(yearNumberInput,year,2,24,99);
            date.innerHTML = `${month}/${year}`;

        }
        
        if(e.id === "cvc" ){
            cvc = e.value;
            window.sessionStorage.setItem("cvc",cvc)
            cvcValue.innerHTML = cvc;
            validateNumberField(cvcNumberInput,cvc,3,100,1000);

        }       
    }
});

// date.innerHTML = `${month}/${year}`;

// submitting form

form.addEventListener("submit",function(e){
    console.log(userName);


    
    let isNameValid = validateStringField(nameInput,userName);
    let iscardNunmberValid = validateNumberField(cardNumberInput,cardNumber,16,null,null);
    let isCvcNumberValid = validateNumberField(cvcNumberInput,cvc,3,100,1000);
    let isMonthNumberValid = validateNumberField(monthNumberInput,month,2,1,12);
    let isYearNumberValid = validateNumberField(yearNumberInput,year,2,24,99);
    
    if(!(isNameValid&&iscardNunmberValid&&isCvcNumberValid&&isMonthNumberValid&&isYearNumberValid)){
        e.preventDefault();
    }else{
        return
    }
});




