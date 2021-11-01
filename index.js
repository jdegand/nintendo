// hamburger 

const bars = document.querySelector('.fa-bars');
const hamburgerPanel = document.querySelector('.mobile-hamburger-panel');
const header = document.querySelector('header');
const body = document.querySelector('body');
const topHeroMobile = document.querySelector('.top-hero-mobile');

bars.addEventListener('click', ()=> {
  hamburgerPanel.classList.toggle('open');
  header.classList.toggle('bg-white');
  body.classList.toggle('bg-black');
  topHeroMobile.classList.toggle('opacity');
})

// mobile-panel-arrows

const gamesArrow = document.querySelector('.mobile-panel-games-arrow');
const hardwareArrow = document.querySelector('.mobile-panel-hardware-arrow');

const gamesArrowContent = document.getElementById('gamesArrowContent');
const hardwareArrowContent = document.getElementById('hardwareArrowContent');

gamesArrow.addEventListener('click', ()=> {
  gamesArrowContent.classList.toggle('games-grid');
})

hardwareArrow.addEventListener('click', ()=> {
  hardwareArrowContent.classList.toggle('hardware-grid');
})

//search panel 

const close = document.getElementById('times');
const searchPanel = document.querySelector('.search-panel');

const desktopNavButton = document.querySelector('.desktop-nav-button');
const desktopNavSpan = document.getElementById('desktop-nav-span');

close.addEventListener('click', ()=> {
  searchPanel.classList.toggle('show');
})

desktopNavButton.addEventListener('click', ()=> {
  searchPanel.classList.toggle('show');
  desktopNavSpan.classList.add('red');
})

// dropdown

const secondaryArrows = document.querySelectorAll('.secondary-arrow');
const gamesClose = document.getElementById('gamesClose');
const hardwareClose = document.getElementById('hardwareClose');

secondaryArrows.forEach(arrow => arrow.addEventListener('click', ()=> {
  //console.log(e.target.parentElement.nextElementSibling)
  
  secondaryArrows.forEach(arrow => {
    arrow.parentElement.nextElementSibling.classList.remove('dropdown-open');
  }) 
  
  arrow.parentElement.nextElementSibling.classList.add('dropdown-open');
}))


gamesClose.addEventListener('click', (e)=> {
  e.target.parentElement.parentElement.classList.toggle('dropdown-open')
})

hardwareClose.addEventListener('click', (e)=> {
  e.target.parentElement.parentElement.classList.toggle('dropdown-open')
})

// faq toggle

const downArrows = document.querySelectorAll('.faq-down');

downArrows.forEach(arrow => arrow.addEventListener('click', ()=> {
    arrow.parentElement.parentElement.nextElementSibling.classList.toggle('open');

    if(arrow.parentElement.parentElement.nextElementSibling.classList.contains('open')){
        arrow.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        arrow.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }  
}))

// Lightbox

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

  }