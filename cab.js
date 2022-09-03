const btn = document.querySelector('#btnmenu');
const menu = document.querySelector('#menu');

const btnperfilmenu = document.querySelector('#btnperfilmenu');
const perfilmenu = document.querySelector('#perfilmenu');


    btn.addEventListener('click', () =>{
        console.log('a unaaad')
        menu.classList.toggle('hidden')
    });

    btnperfilmenu.addEventListener('click', ()=>{
        perfilmenu.classList.toggle('hidden')
    })
 