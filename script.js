window.addEventListener('load', function(){
	console.log('Page has loaded');
	document.getElementById('loading-page').style.display = 'none';
	console.log('loading page hidden');
	document.getElementById('main').style.display = 'block';
	console.log('displaying content');
});


window.addEventListener("scroll", function(){
	var header = document.getElementById("cn-nav");
	header.classList.toggle("cn-sticky", window.scrollY > 0);
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing the element after the class is added
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let  newsTexts = document.getElementsByClassName("news-text");
let  spanDigits = document.getElementsByClassName("digits");

function showReview(){
	for(spanDigit of spanDigits){
		spanDigit.classList.remove("active-digit");
	}
	for(newsText of newsTexts){
		newsText.classList.remove("active-text");
	}
	let i = Array.from(spanDigits).indexOf(event.target);

	spanDigits[i].classList.add("active-digit");
	newsTexts[i].classList.add("active-text");
}

