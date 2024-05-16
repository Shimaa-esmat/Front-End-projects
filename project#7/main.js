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





 console.log(pageLinks[0].textContent.toLowerCase().includes('home'));


// fetch json file
let destinations = new Array();

function getData(key){
    return fetch('./assets/data.json')
    .then(response => response.json())
    .then( data => { 
        value = data[key]; 
    })
}





//// destination data
let moons = document.querySelectorAll(".moon");
let moonName = document.querySelector('.moon-name')
let moonImage = document.querySelector('.moon-photo > img');
let moonDescription = document.querySelector('.bio');
let distanceValue = document.querySelector('.dis-value');
let travelTime = document.querySelector('.time-value');

window.onload = function() {
    moonImage.style.animation = "newmoon 5s forwards";
};
getData("destinations").then(() => {
    value.forEach(e => {
        moons.forEach(el =>{
            el.addEventListener('click',function(){
                moons.forEach(ele =>{
                ele.classList.remove('active-moon');
                
                })
                el.classList.add('active-moon')
                if(el.textContent.toLowerCase() == e.name.toLowerCase()){
                    moonName.innerHTML = e.name.toUpperCase();
                    moonImage.setAttribute('src',e.images.png);
                    moonDescription.innerHTML = e.description
                    distanceValue.innerHTML = e.distance
                    travelTime.innerHTML = e.travel
                }
                // moonImage.style.width = "0px";
                // moonImage.style.height = "0px";
                // moonImage.style.animation = "newmoon 0.5s forwards";
        })
    })
})    

});


// crew data
let crews = document.querySelectorAll(".crew");
let crewName = document.querySelector('.crew-name')
let crewImage = document.querySelector('.crew-photo > img');
let bio = document.querySelector('.bio');
let crewJob = document.querySelector('.job');



getData("crew").then(() => {
    value.forEach(e => {
        crews.forEach(el =>{
            console.log(e.name)
            el.addEventListener('click',function(){
                // console.log(el.parentElement.parentElement.firstElementChild.firstElementChild)
                console.log(el.id);
                crews.forEach(ele =>{
                ele.classList.remove('active-crew');
                })
                el.classList.add('active-crew')
                if(el.id.toLowerCase() == e.name.toLowerCase()){
                    console.log("fff");
                    crewName.innerHTML = e.name.toUpperCase();
                    crewImage.setAttribute('src',e.images.png);
                    crewJob.innerHTML = e.role
                    bio.innerHTML = e.bio

                }
            
            
        })
    })
})    

});




// tech data

let technology = document.querySelectorAll(".tech");
let tschnologyName = document.querySelector('.tech-name')
let technologyImageLandscape = document.querySelector('.landscape');
let technologyImagePortrait = document.querySelector('.portrait');
let description = document.querySelector('.bio');



getData("technology").then(() => {
    value.forEach(e => {
        technology.forEach(el =>{
            console.log(e.name)
            el.addEventListener('click',function(){
                console.log(el.id);
                technology.forEach(ele =>{
                ele.classList.remove('active-tech');
                })
                el.classList.add('active-tech')
                if(el.id.toLowerCase() == e.name.toLowerCase()){
                    console.log("fff");
                    tschnologyName.innerHTML = e.name.toUpperCase();
                    technologyImagePortrait.setAttribute('src',e.images.portrait);
                    technologyImageLandscape.setAttribute('src',e.images.landscape);
                    description.innerHTML = e.description

                }
            
            
        })
    })
})    

});