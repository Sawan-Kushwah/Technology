let navbar = document.querySelector('.navbar')
let rightnav = document.querySelector('.rightnav')
let navlist = document.querySelector('.navlist')
let burger = document.querySelector('.burger')
 
burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('v-height-resp');
    navlist.classList.toggle('visible-resp');
    rightnav.classList.toggle('visible-resp');
})

const btnLogin =document.querySelector('#btn-1');
const wraper =document.querySelector('.wraper');
let cross =document.querySelector('.off');

btnLogin.addEventListener( 'click' ,()=>{
    wraper.classList.add('active-popup');
 })
 cross.addEventListener('click' ,()=>{
    wraper.classList.remove('active-popup');
 })

 const btnregister =document.querySelector('#btn-2');
 const wraperRes = document.querySelector('.wraper-register');
 let close = document.querySelector('.close');


 btnregister.addEventListener('click' , ()=>{
    wraperRes.classList.add('active-pop');
 })
 
  close.addEventListener('click' ,()=>{
   wraperRes.classList.remove('active-pop');
   })