//VARIABLES SLIDER
let letProjectsFolder = "./assets/projectsFiles/"
let letGitHubFolder = "https://github.com/landaetadev/"
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

		vMakeCardHTML += `<div class="classProjectCard">`;
		

		vMakeCardHTML +=    `<h3 class="classCardTitle">${JSONDataProjects[vJSONi].jsonTitle}</h3>`;

		vMakeCardHTML +=    `<div class="classCardImage">`;
		vMakeCardHTML +=			`<picture class="classCardImage">`
		vMakeCardHTML +=				`<source srcset="${letProjectsFolder}${JSONDataProjects[vJSONi].jsonImgScreen}.avif">`
		vMakeCardHTML +=				`</source><img src="${letProjectsFolder}${JSONDataProjects[vJSONi].jsonImgScreen}.webp" alt="ImagenAppVideo ${JSONDataProjects[vJSONi].jsonTitle}" class="classFileCard">`
		vMakeCardHTML +=			`</picture>`
		vMakeCardHTML +=    `</div>`;

		vMakeCardHTML +=    `<p class="classCardLang">${JSONDataProjects[vJSONi].jsonLangs}</p>`;

		vMakeCardHTML +=		`<div class=classCardLinks>`;
			vMakeCardHTML += 		`<a href="javascript:clickCard(vNumCard = ${vJSONi})" title="Demo Video">`
			vMakeCardHTML += 			`<svg>`
			vMakeCardHTML += 				`<use href="./assets/icons.svg#icoLinkVideo">`
			vMakeCardHTML += 			`</svg>`
			vMakeCardHTML += 		`</a>`;

		if (JSONDataProjects[vJSONi].jsonGitHub != "") {
			vMakeCardHTML += 		`<a href="${letGitHubFolder}${JSONDataProjects[vJSONi].jsonGitHub}" target="_blank" title="GitHub">`
			vMakeCardHTML += 			`<svg>`
			vMakeCardHTML += 				`<use href="./assets/icons.svg#icoGitHub">`
			vMakeCardHTML += 			`</svg>`
			vMakeCardHTML += 		`</a>`;
		}
		if (JSONDataProjects[vJSONi].jsonWeb != "") {
			vMakeCardHTML += `<a href="${JSONDataProjects[vJSONi].jsonWeb}" target="_blank" title="WebAddress">`
			vMakeCardHTML += 	`<svg>`
			vMakeCardHTML += 		`<use href="./assets/icons.svg#icoLinkWeb2">`
			vMakeCardHTML += 	`</svg>`
			vMakeCardHTML += `</a>`;
		}
		vMakeCardHTML +=		`</div>`;

		
		vMakeCardHTML += `</div>`;

		//Make Project HTML
		vMakeProjectHTML += `<div class="classShowProject">`;
		vMakeProjectHTML += 	`<h3 class="classShowProjectTitle">${JSONDataProjects[vJSONi].jsonTitle}</h3>`;

		if (JSONDataProjects[vJSONi].jsonTypeFileShow == "vid") {
			vMakeProjectHTML += `<video controls preload="none" class="classShowFile classPlayVideo">`;
			//vMakeProjectHTML += 	`<source src="${letProjectsFolder}${JSONDataProjects[vJSONi].jsonFileShow}.webm" type="video/webm" alt="Video Proyecto">`;
			vMakeProjectHTML += 	`<source src="${letProjectsFolder}${JSONDataProjects[vJSONi].jsonFileShow}.mp4" type="video/mp4" alt="Video Proyecto">`;
			vMakeProjectHTML += `</video>`;
		}
		if (JSONDataProjects[vJSONi].jsonTypeFileShow == "img") {
			vMakeProjectHTML += `<img class="classShowFile" src="${letProjectsFolder}${JSONDataProjects[vJSONi].jsonFileShow}" alt="Imagen Proyecto">`;
		}

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