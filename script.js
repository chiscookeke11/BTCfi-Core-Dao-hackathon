window.addEventListener('load', function() {
    console.log('Page has loaded');
    document.getElementById('loading-page').style.display = 'none';
    console.log('loading page hidden');
    document.getElementById('main').style.display = 'block';
    console.log('displaying content');
});

// Code for the loading page



// code for on scroll intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// code for popup
let popup = document.getElementById("popup");
let banner = document.getElementById("cn-banner-text");

function openPopup() {
	popup.classList.add("open-popup");
	 banner.classList.add("cn-banner-hidden");
	 document.body.style.overflow = "hidden";

}

function closePopup() {
	popup.classList.remove("open-popup");
	banner.classList.remove("cn-banner-hidden");
	document.body.style.overflow = "auto";
};
//// code for sticky navbar
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

//// code for carousel slide
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1, 
            loop: true, 
            margin: 10, 
            nav: false, 
            dots: true, 
            autoplay: true, 
            autoplayTimeout: 3000, 
            autoplayHoverPause: true 
        });
    });



