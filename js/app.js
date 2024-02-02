import "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js";

const header = document.querySelector(".header-wrapper");
const headerBottom = document.querySelector(".header-bottom");

let prevState = window.scrollY;

window.addEventListener("scroll", () => {
	console.log(prevState, "scroll prevState");
	let scrollTop = window.scrollY;
	const scrollDown = prevState < scrollTop;
	console.log(scrollTop, "scroll scrollTop");

	if (scrollTop >= 150) {
		headerBottom.classList.add("hidden");
	} else {
		headerBottom.classList.remove("hidden");
	}

	prevState = scrollTop;
});
