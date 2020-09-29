const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.x-close');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger); 
console.log(closeMenu);

hamburger.addEventListener('click', ()=>{
  closeMenu.classList.toggle("x-closeMenu")
  menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
  if(menu.classList.contains('spread')
  && e.target != menu && e.target != hamburger  ){
    menu.classList.toggle("spread");
    closeMenu.classList.toggle("x-closeMenu");
  }
})