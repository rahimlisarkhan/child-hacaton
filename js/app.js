let navBack = document.querySelector('.navigation__background');
let navMenu = document.querySelector('.navigation__nav');


function clickDropdown(){

    if (navMenu.style.opacity === '0' || navMenu.style.opacity === ''){
        navMenu.style.opacity = '1';
        navMenu.style.width = "100%";
        navBack.style.transform = 'scale(80)'
    }else{
        navMenu.style.opacity = '0';
        navMenu.style.width = "0";
        navBack.style.transform = 'scale(0)'
    }
        
      


}

function clickMenu() {

    if (navMenu.style.opacity === '1'){
        navMenu.style.opacity = '0';
        navMenu.style.width = "0";
        navBack.style.transform = 'scale(0)'
    }
}


window.onscroll = function() {fixscroll()};

var scrollBtn = document.getElementById("btn-arv");
var arv = 80;
console.log(arv)

function fixscroll() {
  if (window.pageYOffset >= arv) {
    console.log(window.pageYOffset) 
    scrollBtn.style.opacity="1";
  } else {
    scrollBtn.style.opacity=".1";
  }

}