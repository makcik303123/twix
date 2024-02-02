import "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js";

const app = document.querySelector(".app");
const header = document.querySelector(".header-wrapper");

console.log(app);
console.log(header);
let prevState = window.scrollY;

window.addEventListener("scroll", () => {
	console.log(prevState, "scroll prevState");
	let scrollTop = window.scrollY;
	const scrollDown = prevState < scrollTop;
	console.log(scrollTop, "scroll scrollTop");

	if (scrollTop >= 150 && scrollDown) {
		header.classList.add("hidden");
	} else {
		header.classList.remove("hidden");
	}

	prevState = scrollTop;
});
