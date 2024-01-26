var vCounter = 0;
var vBody = document.querySelector("body");
let letIconsFile = "./assets/icons.svg#"

//VARIABLES TOPBAR
var vHeader = document.querySelector(".classHeader");
var vBtnMenu = document.querySelector("#idBtnMenu");
var vBtnsMenuOptions = document.querySelector(".classBtnsMenuOptions");
var vBtnMenuOpt = document.querySelectorAll(".classBtnMenuOpt");

//SHOW-HIDE TOPBAR
window.onscroll = function () {
	const letScrollYPosition = 300;
	if (window.scrollY >= letScrollYPosition) {
		vHeader.classList.add("classShowHeader");
	} else {
		vHeader.classList.remove("classShowHeader");
	}
};

	//SHOW-HIDE VERTICAL MENU
	vBtnMenu.addEventListener ("click", () => {
		if (vCounter == 0) {
			funcJsShowMenuNav();
		} else {
			funcJsHideMenuNav();
		}
	});

	//HIDE MENU WHEN CLICK
	for (let i = 0; i < vBtnMenuOpt.length; i++) {
		vBtnMenuOpt[i].addEventListener("click", function() {
			funcJsHideMenuNav();
		});
	};

//SHOW-HIDE SLIDER
function funcJsShowMenuNav() {
	vBtnsMenuOptions.classList.add("classBtnsMenuOptionsShow");
	vBody.classList.add("classHideOverflowY");
	vCounter = 1;
};
function funcJsHideMenuNav() {
	vBtnsMenuOptions.classList.remove("classBtnsMenuOptionsShow");
	vBody.classList.remove("classHideOverflowY");
	vCounter = 0;
};