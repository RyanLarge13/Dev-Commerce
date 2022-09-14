const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const spans = document.querySelectorAll('.nav-toggle span');
const logo = document.querySelector('.logo');
const listItems = document.querySelectorAll('nav li');
const dropShadow = document.querySelector('.drop-shadow');
const asideIcons = document.querySelectorAll('aside i');

const toggleNav = async () => {
	nav.classList.toggle('open');
	dropShadow.classList.toggle('open');
	spans.forEach((span) => {
		span.classList.toggle('open');
	});
  for (let k = 0; k < listItems.length; k++) {
  	setTimeout(() => {
  		listItems[k].classList.toggle('open');
  	}, 50 * k)
  }
	setTimeout(() => {
	logo.classList.toggle('open');
	}, 500);
};

const clearX = () => {
	const topHeading = document.querySelector('.top-heading');
	const headingFromTop = topHeading.getBoundingClientRect().top;
	if (headingFromTop < 75) navToggle.style.opacity = '0';
	else navToggle.style.opacity = '1';
}

const clearIcons = () => {
	const topHeading = (100 / document.querySelector('.sec-1 h2').getBoundingClientRect().top) * 100;
		for (let k = 0; k < asideIcons.length; k++) {
	if (topHeading > 16) {
			setTimeout(() => {
				asideIcons[k].style.transform = 'translate(110vw, -10vh)';
			}, 50 * k);
		} else asideIcons[k].style.transform = 'translate(0)';
	}
};

navToggle.addEventListener('click', toggleNav);
nav.addEventListener('scroll', clearX);
window.addEventListener('scroll', clearIcons);