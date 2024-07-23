window.addEventListener('load', function(){
	console.log('Page has loaded');
	document.getElementById('loading-page').style.display = 'none';
	console.log('loading page hidden');
	document.getElementById('main').style.display = 'block';
	console.log('displaying content');
});
// ///////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", function(){
	var header = document.getElementById("cn-nav");
	header.classList.toggle("cn-sticky", window.scrollY > 0);
});
// //////////////////////////////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let popup = document.getElementById("popup");
let banner = document.getElementById("cn-banner-text");

function openPopup() {
	popup.classList.add("open-popup");
	 banner.classList.add("cn-banner-hidden");

}


function closePopup() {
	popup.classList.remove("open-popup");
	banner.classList.remove("cn-banner-hidden");
}




