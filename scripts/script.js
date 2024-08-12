window.onload = function (){
   const preloader = document.querySelector('.preloader');
   const header = document.querySelector('#header');
    setTimeout(()=>{
        preloader.style.display = 'none';
        header.scrollIntoView({ behavior: 'smooth' });
    }, 1500)
}





