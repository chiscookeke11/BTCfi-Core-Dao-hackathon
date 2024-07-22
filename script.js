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
            observer.unobserve(entry.target); // Stop observing the element after the class is added
        }
    });
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let  newsTexts = document.getElementsByClassName("news-text");
let  spanDigits = document.getElementsByClassName("digits");
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

let userTexts = document.getElementsByClassName("news-page");
let userPics = document.getElementsByClassName("cn-nav-btn");

function showReview(event){
  for(let userPic of userPics){
    userPic.classList.remove("active-li");
  }
  for(let userText of userTexts){
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-li");
  userTexts[i].classList.add("active-text");
}


