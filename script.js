function adjustMainContainerHeight() {
	let mainContainer = document.querySelector(".main-container");
	let contentsContainer = document.querySelector(".contents-container");

	if (contentsContainer) {
		mainContainer.style.height = contentsContainer.offsetHeight + "px";
	}
}

window.addEventListener("load", adjustMainContainerHeight);
window.addEventListener("resize", adjustMainContainerHeight);
