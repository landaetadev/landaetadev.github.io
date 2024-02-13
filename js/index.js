var vShowVerticalMenu = false;
var vBody = document.querySelector("body");
let letIconsFile = "./assets/icons.svg#"

//VARIABLES TOPBAR
var vBtnMenu = document.querySelector("#idBtnMenu");
var vBtnsMenuOptions = document.querySelector(".classBtnsMenuOptions");
var vBtnMenuOpt = document.querySelectorAll(".classBtnMenuOpt");

//SHOW-HIDE VERTICAL MENU
vBtnMenu.addEventListener ("click", () => {
	if (vShowVerticalMenu == false) {
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
	vShowVerticalMenu = true;
};
function funcJsHideMenuNav() {
	vBtnsMenuOptions.classList.remove("classBtnsMenuOptionsShow");
	vBody.classList.remove("classHideOverflowY");
	vShowVerticalMenu = false;
};