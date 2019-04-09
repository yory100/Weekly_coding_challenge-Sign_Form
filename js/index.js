const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const hideOverlay = document.getElementById('hide-overlay');
const signUpOver = document.getElementById('sign-up-overlay')
const signInOver = document.getElementById('sign-in-overlay')

signUp.addEventListener('click', () => {
	hideOverlay.classList.add("slide");
	buttonOnBottom(signUpOver);
	buttonOnTop(signInOver);
});

signIn.addEventListener('click', () => {
	hideOverlay.classList.remove("slide");
	buttonOnTop(signUpOver);
	buttonOnBottom(signInOver);
});

/* After transition completed button on top */
const buttonOnTop = (elem) => {
	setTimeout(()=> {
		elem.style.zIndex = "2"
	}, 500);
}

const buttonOnBottom = elem => elem.style.zIndex = "0";