let navBack=document.querySelector(".navigation__background"),navMenu=document.querySelector(".navigation__nav");function clickDropdown(){"0"===navMenu.style.opacity||""===navMenu.style.opacity?(navMenu.style.opacity="1",navMenu.style.width="100%",navBack.style.transform="scale(80)"):(navMenu.style.opacity="0",navMenu.style.width="0",navBack.style.transform="scale(0)")}function clickMenu(){"1"===navMenu.style.opacity&&(navMenu.style.opacity="0",navMenu.style.width="0",navBack.style.transform="scale(0)")}window.onscroll=function(){fixscroll()};var scrollBtn=document.getElementById("btn-arv"),arv=80;function fixscroll(){window.pageYOffset>=arv?(console.log(window.pageYOffset),scrollBtn.style.opacity="1"):scrollBtn.style.opacity=".1"}console.log(arv);