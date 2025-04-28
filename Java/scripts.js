function openModal(eventName) {
    const modal = document.getElementById("registerModal");
    modal.style.display = "block";
    
    document.getElementById("registerForm").onsubmit = function(e) {
      e.preventDefault(); 
      alert("You have successfully registered for: " + eventName);
      closeModal(); 
    };
  }
  
  function closeModal() {
    const modal = document.getElementById("registerModal");
    modal.style.display = "none";
  }
// ///////////////////////////////////////////////////////////////////////
                                           // side_par
const menuBar = document.querySelector('.home_page_menu_bar');  
const sidebar = document.querySelector('.home_page_sidebar');  
const body = document.querySelector('body');  


menuBar.addEventListener('click', (event) => {
    event.stopPropagation();  
    sidebar.classList.toggle('active');  
});

body.addEventListener('click', (event) => {

    if (!sidebar.contains(event.target) && !menuBar.contains(event.target)) {
        sidebar.classList.remove('active');  
    }
});

sidebar.addEventListener('click', (event) => {
    event.stopPropagation();  
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////
                                              // home_page

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
}

setInterval(showNextSlide, 5000);

let header = document.querySelector('.home_page_header');
let sticky = header.offsetTop;  

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');  
    } else {
        header.classList.remove('sticky'); 
    }
};
function buyProduct(name, price, image) {
    
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', image);
    
    window.location.href = "./html/cart.html";
    // window.location.href = "https://radyshawer.github.io/Final_project/html/cart.html";

}