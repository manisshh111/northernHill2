console.log("Its working");

let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let vidBtn= document.querySelectorAll('.vid-btn');








window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', ()=>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
});

vidBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

