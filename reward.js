let claimBtn = document.getElementById("claim-btn");
let claimedBtn = document.getElementById("claimed-btn");

function claiming (){
	 claimBtn.style.zIndex = '0';
	 claimBtn.style.display = 'none';
	claimedBtn.style.zIndex = '999';
}