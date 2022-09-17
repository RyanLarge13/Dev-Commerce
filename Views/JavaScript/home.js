const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const spans = document.querySelectorAll('.nav-toggle span');
const logo = document.querySelector('.logo');
const listItems = document.querySelectorAll('nav li');
const dropShadow = document.querySelector('.drop-shadow');
const asideIcons = document.querySelectorAll('aside i');

const toggleNav = () => {
	nav.classList.toggle('open');
	dropShadow.classList.toggle('open');
	spans.forEach((span) => {
		span.classList.toggle('open');
	});
	setTimeout(() => {
		logo.classList.toggle('open');
	}, 500);
	showItems();
};

const showItems = () => {
	const navItems = document.querySelectorAll('nav li');
	navItems.forEach((item) => {
		const navItemFromView = item.getBoundingClientRect();
		navItemFromView.top > 0 && navItemFromView.bottom < vh ? item.classList.add('open') : item.classList.remove('open');
	});
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

const revert = (elems) => {
	elems.forEach((elem) => {
		elem.style.transition = '250ms ease-in-out';
	});
};

const animate = () => {
	const cards = document.querySelectorAll('.head-card');
	cards.forEach((card, index) => {
	    setTimeout(() => {
			card.style.transition = '750ms ease-in-out';
			card.style.transform = 'translateX(0)';
		}, 200 * index);
	})
	cards[cards.length - 1].addEventListener('transitionend', () => {
		revert(cards);
	});
};

window.addEventListener('DOMContentLoaded', animate);
navToggle.addEventListener('click', toggleNav);
nav.addEventListener('scroll', clearX);
nav.addEventListener('scroll', showItems);
window.addEventListener('scroll', clearIcons);