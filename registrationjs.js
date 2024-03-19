const main = document.querySelector('.main');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.loginbtn-popup');
const closebtn = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    main.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    main.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    main.classList.add('active-popup');
});

closebtn.addEventListener('click', ()=>{
    main.classList.remove('active-popup');
});




