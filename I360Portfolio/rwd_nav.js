'use strict';
// Written by Erika Lee for I360 Web Design at IU
// Only for use in I360 and by I360 students

let open = document.querySelector('.open-menu');
let close = document.querySelector('.close-menu');
let menuOpen = false;

function openMenu() {
    open.style.display = 'none';
    close.style.display = 'block';
    menuOpen = true;
    document.querySelectorAll('.menu-item').forEach((item) => item.classList.add('dropdown'));
}
function closeMenu() {
    open.style.display = 'block';
    close.style.display = 'none';
    menuOpen = false;
    document.querySelectorAll('.menu-item').forEach((item) => item.classList.remove('dropdown'));
}

document.addEventListener('DOMContentLoaded', () => closeMenu());
window.addEventListener("resize", closeMenu);
document.querySelector('.menu-button').addEventListener('click', () => (menuOpen) ? closeMenu() : openMenu());


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

  //Javascript credit to W3Schools: https://www.w3schools.com/howto/howto_js_collapsible.asp
  