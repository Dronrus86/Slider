const btn = document.querySelectorAll('.shopping_button');
const form = document.getElementById('form');


form.addEventListener("click", (e) =>{
    e.preventDefault();
  });


let slideIndex = 1;
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
 
    let slides = document.getElementsByClassName("catalog_conditioners");
    
   
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  

   for (let slide of slides) {
        slide.style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";  
  }