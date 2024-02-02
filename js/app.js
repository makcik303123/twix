import "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js";

const app = document.querySelector(".app");
const header = document.querySelector(".header-wrapper");

console.log(header);

app.addEventListener("scroll", () => {
	let scrollTop = document.scrollHeight;
	console.log(scrollTop);

	if (scrollTop >= 100) {
		header.classList.add("hidden");
	} else {
		header.classList.remove("hidden");
	}
});
