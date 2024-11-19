
import { AddUser } from "./users/addUser.module.js"; //вставка панели меню


const contentPad = document.querySelector('.contentPad');
const topMenu = document.querySelector('.topMenu');


export function mainMenuListener(){

 const leftMenu = document.querySelector('.leftMenu');

 const dashboard = document.querySelector('.button_dashboard') 
 const application = document.querySelector('.button_application') 
 const clients = document.querySelector('.button_clients') 
 const funnel = document.querySelector('.button_funnel') 
 const partners = document.querySelector('.button_partners') 

 dashboard.addEventListener('click', ()=>{
    console.log('click dashboard')
 })

 application.addEventListener('click', ()=>{
    console.log('click application')
   
 })

 clients.addEventListener('click', ()=>{
    console.log('click clients')
    AddUser(contentPad, topMenu);
 })

 funnel.addEventListener('click', ()=>{
    console.log('click funnel')
 })

 partners.addEventListener('click', ()=>{
    console.log('click partners')
 })
}