const card=document.querySelector('.card');
const container=document.querySelector('.container');
const title=document.querySelector('.title');
const button=document.querySelector('.upgrade')
const image=document.querySelector('.pic');
const sub=document.querySelector('.sub');


const loader=document.querySelector('.loader');
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
const value=document.querySelector('.powerValue');

button.addEventListener('click',()=>{
    check=parseInt(value.innerHTML);
    if(check<100){

    image.src='';
    value.innerHTML='';
    loader.hidden=false;
    setInterval(() => {
    value.innerHTML='100';
image.src='3cc229f906773a5e87224821601974ec.jpg'
 image.setAttribute("class","change");
loader.hidden=true;
title.style.color='#FF851B'
button.setAttribute("class","btn-grad")

    }, 3000);
    }
})
container.addEventListener('mouseenter',e=>{
    card.style.transition="none";
    title.style.transform='translateZ(150px)';
    image.style.transform='translateZ(100px)';
    button.style.transform='translateZ(100px)';
sub.style.transform='translateZ(50px)';



})
container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.5s ease';
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    title.style.transform='translateZ(0px)';
image.style.transform='translateZ(0px)'

button.style.transform='translateZ(0)';
sub.style.transform='translateZ(0)';





});