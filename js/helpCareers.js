/* BOTONES */
const web = document.querySelector('.desarrollo__web');
const mark = document.querySelector('.marketing');
const foto = document.querySelector('.fotografia');
const xClose = document.querySelector('.close');
const xClosem = document.querySelector('.closem');
const xClosef = document.querySelector('.closef');
/* VENTANAS */
const helpWeb = document.querySelector('.help__web');
const helpMarketing = document.querySelector('.help__marketing');
const helpFotografia = document.querySelector('.help__fotografia');

console.log(web);
console.log(mark);
console.log(foto);
console.log(xClose);

web.addEventListener('click', ()=>{
  helpWeb.classList.toggle("career__desarrolloWeb");
})
mark.addEventListener('click', ()=>{
  helpMarketing.classList.toggle("career__marketing");
})
foto.addEventListener('click', ()=>{
  helpFotografia.classList.toggle("career__fotografia");
})


window.addEventListener('click', e=>{
  if(helpWeb.classList.contains('career__desarrolloWeb')
  && e.target == xClose){
    helpWeb.classList.toggle("career__desarrolloWeb");
    console.log("funcionaw");
  }
})
window.addEventListener('click', e=>{
  if(helpMarketing.classList.contains('career__marketing')
&& e.target == xClosem){
  helpMarketing.classList.toggle("career__marketing");
  console.log("funcionam");
}
})
window.addEventListener('click', e=>{
  if(helpFotografia.classList.contains('career__fotografia')
  && e.target == xClosef){
    helpFotografia.classList.toggle("career__fotografia");
    console.log("funcionaf");
  }
})


