let letScrollYPosition = 250;
var varCounter = 0;
var varBody = document.querySelector("body");

//VARIABLES TOPBAR
var varHeader = document.querySelector(".classHeader");
var varBtnMenu = document.querySelector("#idBtnMenu");
var varBtnsMenuOptions = document.querySelector(".classBtnsMenuOptions");
var varBtnMenuOpt = document.querySelectorAll(".classBtnMenuOpt");

//VARIABLES SLIDER
var varSlideshowContainer = document.querySelector(".classSlideshowContainer");
var varBtnPrev = document.querySelector(".classBtnPrev");
var varBtnNext = document.querySelector(".classBtnNext");
var varMakeShowHTML = ``;
var varSlideIndex = 1;

//VARIABLES MAIL
var varFormMail = document.querySelector(".classFormMail");
var varFormTxtName = document.querySelector("#idFormTxtName");
var varFormTxtMail = document.querySelector("#idFormTxtMail");
var varValidMailAdd = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var varFormTxtMsg = document.querySelector("#idFormTxtMsg");
var varCheckMail = document.querySelector(".classCheckMail");

window.onload = (function() {

	//SHOW-HIDE TOPBAR
	window.onscroll = function () {
		letScrollYPosition = 200;
		if (window.pageYOffset > letScrollYPosition) {
			varHeader.classList.add("classShowHeader");
		} else {
			varHeader.classList.remove("classShowHeader");
		}
	};

	//SHOW-HIDE VERTICAL MENU
	varBtnMenu.addEventListener ("click", (e) => {
		if (varCounter == 0) {
			funcJsShowMenuNav();
		} else {
			funcJsHideMenuNav();
		}
	});

	for (let i = 0; i < varBtnMenuOpt.length; i++) {
		varBtnMenuOpt[i].addEventListener("click", function() {
			funcJsHideMenuNav();
		});
	};

	function funcJsShowMenuNav() {
		varBtnsMenuOptions.classList.add("classBtnsMenuOptionsShow");
		varBody.classList.add("classHideOverflowY");
		varCounter = 1;
	};
	function funcJsHideMenuNav() {
		varBtnsMenuOptions.classList.remove("classBtnsMenuOptionsShow");
		varBody.classList.remove("classHideOverflowY");
		varCounter = 0;
	};


	//SLIDE PROJECTS
	fetch('./js/JSONTableProjects.json')
	.then(response => response.json())
	.then(JSONData => {
		ReadTable(JSONData);
	});

	function ReadTable(JSONData) {

		for (var JSONi = 0; JSONi < JSONData.length; JSONi++) {
			//CREATE SLIDE
			varMakeShowHTML += `<div class="classMySlides">`;
			varMakeShowHTML += `<h3 class="classTituloH3 classMySlidesTitle">${JSONData[JSONi].jsonTitle}</h3>`;
			if (JSONData[JSONi].jsonTypeFileShow == "vid") {
				varMakeShowHTML += `<video controls class="classFileShow classPlayVideo"> <source src="assets/videos/projects/${JSONData[JSONi].jsonFileShow}" type="video/mp4"> </video>`;
			}
			if (JSONData[JSONi].jsonTypeFileShow == "img") {
				varMakeShowHTML += `<img src="./assets/images/projects/${JSONData[JSONi].jsonFileShow}" class="classFileShow">`;
			}
			varMakeShowHTML += `<p class="classMySlidesLangs">${JSONData[JSONi].jsonLangs}&nbsp;&nbsp;&nbsp;`;
			if (JSONData[JSONi].jsonGitHub != "") {
				varMakeShowHTML += `<a href="https://github.com/landaetadev/${JSONData[JSONi].jsonGitHub}" target="_blank" class="btnGitHub" title="GitHub"><i class="fab fa-github-square"></i></a>`;
			}
			varMakeShowHTML += `</p>`;
			varMakeShowHTML += `<p class="classMySlidesDescrip">${JSONData[JSONi].jsonDescript}</p>`;
			varMakeShowHTML += `</div>`;
			varSlideshowContainer.innerHTML = varMakeShowHTML;

			var varclassPlayVideo = document.querySelectorAll(".classPlayVideo");
			var varMySlides = document.querySelectorAll(".classMySlides");
			varMySlides[0].style.display = "flex"

		}

		//Funtion Btn PREV
		varBtnPrev.addEventListener("click", function() {
			funcShowSlides(varSlideIndex -= 1);
			funcPauseVideo();
		});

		//Funtion Btn NEXT
		varBtnNext.addEventListener("click", function() {
			funcShowSlides(varSlideIndex += 1);
			funcPauseVideo();
		});

		//Funtion pause video
		function funcPauseVideo(){
			for (var varNumMov = 0; varNumMov < varclassPlayVideo.length; varNumMov++) {
				varclassPlayVideo[varNumMov].pause();
			}
		}

		//Funtion Btns PREV NEXT
		function funcShowSlides(n) {

			if (n > varMySlides.length) {varSlideIndex = 1}

			if (n < 1) {varSlideIndex = varMySlides.length}

			for (var i = 0; i < varMySlides.length; i++) {
				varMySlides[i].style.display = "none";
			}

		varMySlides[varSlideIndex-1].style.display = "flex";
		}

	}

	//CHECKMAIL
	varFormMail.addEventListener ("submit", (event) => {
		event.preventDefault();
		if (varFormTxtName.value == "") {
			alert("Falta el Nombre")
		} else if (varValidMailAdd.test(varFormTxtMail.value) ? false : true) {
			alert("E-mail no valido");
		} else if (varFormTxtMsg.value == "") {
			alert("Falta el mensaje")
		} else {
			funcSendMail()
		}
	})

	//SENDMAIL
	async function funcSendMail() {
		const varDataFormMail = new FormData(varFormMail);
		
		const response = await fetch(varFormMail.action, {
			method: varFormMail.method,
			body: varDataFormMail,
			headers: {
				'Accept' : 'application/json'
			}
		});

		if (response.ok) {
			varCheckMail.classList.remove("classCheckMailHide");
			varCheckMail.classList.add("classCheckMailShow");
			varFormMail.reset();
			setTimeout(function() {
				varCheckMail.classList.add("classCheckMailHide");
			},3000);
		}
	}

});