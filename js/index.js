var vCounter = 0;
var vBody = document.querySelector("body");

//VARIABLES TOPBAR
var vHeader = document.querySelector(".classHeader");
var vBtnMenu = document.querySelector("#idBtnMenu");
var vBtnsMenuOptions = document.querySelector(".classBtnsMenuOptions");
var vBtnMenuOpt = document.querySelectorAll(".classBtnMenuOpt");

//VARIABLES SLIDER
var vShowCards = document.querySelector(".classShowCardsContainer");
var vMakeCardHTML = ``;
let letProjectsFolder = "https://filedn.eu/lUfpa3BpLa45XCcSIQyWRHF/WWW/FilesProjects/"
let letGitHubFolder = "https://github.com/landaetadev/"
var vShowProjects = document.querySelector(".classProjectsContainer");
var vBtnHideProject = document.querySelector(".classBtnHideProject");
var vShowProjectContainer = document.querySelector(".classShowProjectContainer");
var vMakeProjectHTML = ``;

//SHOW-HIDE TOPBAR
window.onload = (function() {
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
});

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

//SHOW PROJECTS
fetch('./js/JSONTableProjects.json')
.then(response => response.json())
.then(JSONData => {
	ReadTable(JSONData);
});

function ReadTable(JSONData) {

	for (var vJSONi = 0; vJSONi < JSONData.length; vJSONi++) {

	//Make Project Card HTML
	vMakeCardHTML += `<div class="classProjectCard">`;
	vMakeCardHTML +=	`<a href="javascript:clickCard(vNumCard = ${vJSONi})">`;

	vMakeCardHTML +=    `<h3 class="classCardTitle">${JSONData[vJSONi].jsonTitle}</h3>`;

	vMakeCardHTML +=    `<div class="classCardImage">`;
	vMakeCardHTML +=        `<img src="${letProjectsFolder}${JSONData[vJSONi].jsonImgScreen}" alt="Imagen App Video" class="classFileCard">`;
	vMakeCardHTML +=    `</div>`;

	vMakeCardHTML +=    `<p class="classCardLang">${JSONData[vJSONi].jsonLangs}</p>`;

	vMakeCardHTML +=	`</a>`;
	vMakeCardHTML += `</div>`;
	vShowCards.innerHTML = vMakeCardHTML;

	//Make Project HTML
	vMakeProjectHTML += `<div class="classShowProject">`;
	vMakeProjectHTML += 	`<h3 class="classShowProjectTitle">${JSONData[vJSONi].jsonTitle}</h3>`;

	if (JSONData[vJSONi].jsonTypeFileShow == "vid") {
		vMakeProjectHTML += `<video controls class="classShowFile classPlayVideo">`;
		vMakeProjectHTML += `<source src="${letProjectsFolder}${JSONData[vJSONi].jsonFileShow}" type="video/mp4" loading="lazy" alt="Video Proyecto">`;
		vMakeProjectHTML += `</video>`;
	}
	if (JSONData[vJSONi].jsonTypeFileShow == "img") {
		vMakeProjectHTML += `<img class="classShowFile" src="${letProjectsFolder}${JSONData[vJSONi].jsonFileShow}" alt="Imagen Proyecto">`;
	}

	vMakeProjectHTML += 	`<p class="classShowProjectLang">${JSONData[vJSONi].jsonLangs} &nbsp;&nbsp;&nbsp;`;
		if (JSONData[vJSONi].jsonGitHub != "") {
			vMakeProjectHTML += `<a href="${letGitHubFolder}${JSONData[vJSONi].jsonGitHub}" target="_blank" title="GitHub">
			<svg>
				<use href="./assets/icons.svg#GitHubCircle">
			</svg>
			&nbsp;&nbsp;GitHub</a>`;
		}
	vMakeProjectHTML += 	`</p>`;

	vMakeProjectHTML += 	`<p class="classShowProjectDescript">${JSONData[vJSONi].jsonDescript}></p>`;
	vMakeProjectHTML += `</div>`;

	vShowProjectContainer.innerHTML = vMakeProjectHTML;

	}

}

function clickCard(vNumCard) {
	// vShowProjects.style.display = "flex"
	funcShowProject()
	vBody.classList.add("classHideOverflowY");
	vShowProjects.classList.add("classProjectsContainerShow");
}

function funcShowProject() {
	var vShowProject = document.querySelectorAll(".classShowProject");
	for (var i = 0; i < vShowProject.length; i++) {
		vShowProject[i].style.display = "none";
	}
	vShowProject[vNumCard].style.display = "flex"
}

vBtnHideProject.addEventListener("click", function() {
	funcPauseVideo()
	// vShowProjects.style.display = "none"
	vBody.classList.remove("classHideOverflowY");
	vShowProjects.classList.remove("classProjectsContainerShow");
});

//Function pause video
function funcPauseVideo() {
	var vClassPlayVideo = document.querySelectorAll(".classPlayVideo");
	for (var vNumMov = 0; vNumMov < vClassPlayVideo.length; vNumMov++) {
		vClassPlayVideo[vNumMov].pause();
	}
}