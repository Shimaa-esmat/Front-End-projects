let UserInfo = document.querySelectorAll('input');

UserInfo.forEach(e =>{
    e.oninput = function (){
        if(e.id === "card-name" ){
            window.sessionStorage.setItem("userName",e.value);
        }
        if(e.id === "MM" ){
            window.sessionStorage.setItem("month",e.value);
        }
        if(e.id === "card-num" ){
            window.sessionStorage.setItem("cardNum",e.value);
        }
        if(e.id === "YY" ){
            window.sessionStorage.setItem("year",e.value);
        }
        if(e.id === "cvc" ){
            window.sessionStorage.setItem("cvc",e.value);
        }
        if(e.id === "sub-btn" ){
            window.localStorage.setItem("btn",e);
        }

    }

});


let btn = UserInfo.item(5)

btn.addEventListener("click",function(){
    window.localStorage.setItem("userName",window.sessionStorage.getItem("userName"));
    window.localStorage.setItem("month",window.sessionStorage.getItem("month"));
    window.localStorage.setItem("cardNum",window.sessionStorage.getItem("cardNum"));
    window.localStorage.setItem("year",window.sessionStorage.getItem("year"));
    window.localStorage.setItem("cvc",window.sessionStorage.getItem("cvc"));
})

