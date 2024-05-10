let innerSideBar = document.querySelector('.inner-side-bar');
let pageLinks = document.querySelectorAll('.links');
// console.log(pageLinks.innerHTML);
let claseBtn = document.querySelector('.close')
let sideBar = document.querySelector(".lines");

// let bageLinks - 

claseBtn.addEventListener('click',function(){
    innerSideBar.style.display = "none";
    sideBar.style.display = "block";

})
sideBar.addEventListener('click',function(){
    sideBar.style.display = "none";
    innerSideBar.style.display = "flex";

})





//  console.log(window.location);
// pageLinks.forEach(el => {
//     // console.log(el.innerText)
//     window.onblur = function (e) {
//         console.log(e.target)
//     }
//     window.onfocus = function (e) {
//         console.log(e.target)
//     };
    

//     });
    // el.click();
    // if(el.act)



 // If users come back to the current tab again, the below function will invoke

if(sideBar.style.display = "none"){
    // pageLinks.item(2).onclick
    // console.log("none")
}

// fetch json file
let destinations = new Array();

function getData(key){
    return fetch('./assets/data.json')
    .then(response => response.json())
    .then( data => { 
        // console.log(data["destinations"][0].name)
        value = data[key]; // Return the value associated with the key
    })
}
// destination data
let moons = document.querySelectorAll(".moon");
let moonName = document.querySelector('.moon-name')
let moonImage = document.querySelector('.first-section > img');
let moonDescription = document.querySelector('.article > p');
let distanceValue = document.querySelector('.dis-value');
let travelTime = document.querySelector('.time-value');


console.log(travelTime)


getData("destinations").then(() => {
    value.forEach(e => {
        moons.forEach(el =>{
            console.log(el)
            el.addEventListener('click',function(){
                moons.forEach(ele =>{
                ele.classList.remove('active');
                })
                console.log(el)
                el.classList.add('active')
                if(el.textContent.toLowerCase() == e.name.toLowerCase()){
                    moonName.innerHTML = e.name.toUpperCase();
                    moonImage.setAttribute('src',e.images.png);
                    moonDescription.innerHTML = e.description
                    distanceValue.innerHTML = e.distance
                    travelTime.innerHTML = e.travel

                }
            
            
        })
    })
})    

});








// moons.forEach(el =>{
//     el.addEventListener('click',function(e){
        
//         console.log(el);
//     })
// })


