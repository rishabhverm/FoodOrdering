let bars = document.querySelector('#bars');
let navbar = document.querySelector('.navbar'); // Add a dot before 'navbar'

bars.onclick = () => {
  bars.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
let section = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header .navbar a');

window.onscroll =()=>{
  menubar.classList.remove('fa-times');
  navbar.classList.remove('active');
  section.forEach(sec =>{
    let top = window.scrollY;
    let hi
  })
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 7500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // loop:true,
});



var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 7500,
  //   disableOnInteraction: false,
  // },
 
   loop:true,
   breakpoint:{
   0:{
    slidesperview:1,
   }  ,
   640:{
    slidesperview:2,
   },
   768:{
    slidesperview:2,
   },
  1024:{
    slidesperview:3,
   },

   }
});