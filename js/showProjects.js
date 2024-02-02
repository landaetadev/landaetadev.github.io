//VARIABLES SLIDER
let letProjectsFiles = "./assets/projectsFiles/"
var vShowProjects = document.querySelector(".classProjectsContainer");
var vBtnHideProject = document.querySelector(".classBtnHideProject");
var vShowProjectContainer = document.querySelector(".classShowProjectContainer");
var vMakeProjectHTML = ``;
var vShowCards = document.querySelector(".classShowCardsContainer");
var vMakeCardHTML = ``;

//SHOW PROJECTS
fetch('./js/JSONTableProjects.json')
.then(response => response.json())
.then(JSONDataProjects => {
	ReadTableProjects(JSONDataProjects);
});

function ReadTableProjects(JSONDataProjects) {

	for (var vJSONi = 0; vJSONi < JSONDataProjects.length; vJSONi++) {

	//Make Project Card HTML
	//./assets/images/projectsScreens/Maya3DChess.webp
	vMakeCardHTML += `<div class="classProjectCard">`;
	vMakeCardHTML +=	`<a href="javascript:clickCard(vNumCard = ${vJSONi})">`;

	vMakeCardHTML +=    `<h3 class="classCardTitle">${JSONDataProjects[vJSONi].jsonTitle}</h3>`;

	vMakeCardHTML +=    `<div class="classCardImage">`;
	vMakeCardHTML +=        `<img src="${letProjectsFiles}${JSONDataProjects[vJSONi].jsonImgScreen}" alt="Imagen App Video ${JSONDataProjects[vJSONi].jsonTitle}" class="classFileCard">`;
	vMakeCardHTML +=    `</div>`;

	vMakeCardHTML +=    `<p class="classCardLang">${JSONDataProjects[vJSONi].jsonLangs}</p>`;

	vMakeCardHTML +=	`</a>`;
	vMakeCardHTML += `</div>`;

	//Make Project HTML
	vMakeProjectHTML += `<div class="classShowProject">`;
	vMakeProjectHTML += 	`<h3 class="classShowProjectTitle">${JSONDataProjects[vJSONi].jsonTitle}</h3>`;

	if (JSONDataProjects[vJSONi].jsonTypeFileShow == "vid") {
		vMakeProjectHTML += `<video controls class="classShowFile classPlayVideo">`;
		vMakeProjectHTML += `<source src="${letProjectsFiles}${JSONDataProjects[vJSONi].jsonFileShow}" type="video/webm" loading="lazy" alt="Video Proyecto">`;
		vMakeProjectHTML += `</video>`;
	}
	if (JSONDataProjects[vJSONi].jsonTypeFileShow == "img") {
		vMakeProjectHTML += `<img class="classShowFile" src="${letProjectsFiles}${JSONDataProjects[vJSONi].jsonFileShow}" alt="Imagen Proyecto">`;
	}

	vMakeProjectHTML += 	`<p class="classShowProjectLang">${JSONDataProjects[vJSONi].jsonLangs}`;
		if (JSONDataProjects[vJSONi].jsonGitHub != "") {
			vMakeProjectHTML += `<a href="${JSONDataProjects[vJSONi].jsonGitHub}" target="_blank" title="GitHub">`
			vMakeProjectHTML += 	`<svg>`
			vMakeProjectHTML += 		`<use href="./assets/icons.svg#icoLinkGitHub">`
			vMakeProjectHTML += 	`</svg>`
			vMakeProjectHTML += `GitHub</a>`;
		}
		if (JSONDataProjects[vJSONi].jsonWeb != "") {
			vMakeProjectHTML += `<a href="${JSONDataProjects[vJSONi].jsonWeb}" target="_blank" title="WebAddress">`
			vMakeProjectHTML += 	`<svg>`
			vMakeProjectHTML += 		`<use href="./assets/icons.svg#icoLinkWeb">`
			vMakeProjectHTML += 	`</svg>`
			vMakeProjectHTML += `Web</a>`;
		}
	vMakeProjectHTML += 	`</p>`;
	vMakeProjectHTML += 	`<p class="classShowProjectDescript">${JSONDataProjects[vJSONi].jsonDescript}</p>`;
	vMakeProjectHTML += `</div>`;

	}
	vShowCards.innerHTML = vMakeCardHTML;
	vShowProjectContainer.innerHTML = vMakeProjectHTML;

}

function clickCard(vNumCard) {
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