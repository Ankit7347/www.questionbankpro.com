burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('display-nav-resp');
    navList.classList.toggle('display-nav-resp');
    navbar.classList.toggle('height-nav-resp');
})