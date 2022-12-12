import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



// menu mobile 
let menuIcon = document.querySelector("#menu_toggle");
let menu = document.querySelector(".menu_mobile");

menuIcon.addEventListener("click", function(){
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
})



// slideshow homepage

function initHome(){
  const swiper = new Swiper('#swiperHp', {
    loop: true,
    slidesPerView: 1,
    draggable: true,
    grabCursor: true,
    spaceBetween: 0,
    speed: 1000,
    parallax: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    on: {
     slideChangeTransitionStart: function () {
         let activeSlide = this.el.querySelector('div.swiper-slide-active');
         let caption = activeSlide.getAttribute("data-caption");
         let captionTitle = activeSlide.getAttribute("data-title");
         let slideCaption = document.querySelector(".slide-captions");
         if(slideCaption != null){
           slideCaption.innerHTML = "<p class='slide-title'>" + captionTitle + "<p class='current-title-hp'>" + caption + "</p>"
         }
     }
   } 
  });
}

initHome()

// slideshow galleria

function initGalleria(){
  const swiperGalleria = new Swiper('#swiperGalleria', {
    loop: true,
    slidesPerView: 1,
    draggable: true,
    grabCursor: true,
    spaceBetween: 0,
    centeredSlides: true,
    // effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    on: {
     slideChangeTransitionStart: function () {
         let activeSlide = this.el.querySelector('div.swiper-slide-active');
         let caption = activeSlide.getAttribute("data-caption");
         let captionTitle = activeSlide.getAttribute("data-title");
         let slideCaption = document.querySelector(".gallery-captions");
         if(slideCaption != null){
           slideCaption.innerHTML = "<p class='slide-title'>" + captionTitle + "<p class='current-title'>" + caption + "</p>"
         }
     }
   }
  
  });
}

// Slide Project function
function sliderProjects(carosello, modal){
  const swiperGalleria = new Swiper(carosello, {
    loop: true,
    slidesPerView: 1,
    draggable: true,
    grabCursor: false,
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
     slideChangeTransitionStart: function () {
         let activeSlide = this.el.querySelector('div.swiper-slide-active');
         let caption = activeSlide.getAttribute("data-caption");
         let captionTitle = activeSlide.getAttribute("data-title");
         let slideCaption = modal.querySelector(".project-captions");
         if(slideCaption != null){
           slideCaption.innerHTML = "<p class='slide-title'>" + captionTitle + "<p class='current-title'>" + caption + "</p>"
         }
     }
   }
  
  });
}

// Tabs projects 
function initProjects(){
  let tabProjects = document.querySelectorAll(".project-tab");

  tabProjects.forEach((item)=>{
    let tabId = item.getAttribute("tab");

    item.addEventListener("click", function(evt){
        let modal = document.getElementById(tabId);
        modal.style.display = "block";
        let close = modal.querySelector('.close-btn');
        let carosello = modal.querySelector('.project-swiper');
        sliderProjects(carosello, modal);
        close.addEventListener('click', function(){
          modal.style.display = "none";
        })
      });
  })
}


// Tabs navbar

let navTabs = document.querySelectorAll(".nav-tab");

navTabs.forEach((item)=>{
  let tabId = item.getAttribute("tab");

  item.addEventListener("click", function(evt){
      let i;
      let x = document.getElementsByClassName("section");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        navTabs[i].classList.remove("nav-active");
      }
      if (item.classList.contains('link-menu-open')) {
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
      }
      document.getElementById(tabId).style.display = "flex";
      evt.target.classList.add("nav-active");
      
      if(tabId == "hp"){initHome()}
      if(tabId == "galleria"){initGalleria()}
      if(tabId == "realizzazioni"){initProjects()}

  });
})


// Tabs servizi

let serviziTabs = document.querySelectorAll(".tablink");

serviziTabs.forEach((item)=>{
  let serviceId = item.getAttribute("tab");

  item.addEventListener("click", function(evt){
    let i;
    let x = document.getElementsByClassName("service");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      serviziTabs[i].classList.remove("tab-active");
    }

    document.getElementById(serviceId).style.display = "block";
    evt.target.classList.add("tab-active");
  })

})



  