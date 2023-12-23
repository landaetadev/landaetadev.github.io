//SHOW SKILLS

const vShowSkillCards = document.querySelector(".classHabilidadesFlex");
var vMakeSkillCardHTML = ``;
fetch('./js/JSONTableSkills.json')
.then(response => response.json())
.then(JSONDataSkills => {
	ReadTableSkills(JSONDataSkills);
});

function ReadTableSkills(JSONDataSkills) {

	for (var vJSONi = 0; vJSONi < JSONDataSkills.length; vJSONi++) {
		//Make Project Card HTML
	vMakeSkillCardHTML += `<div class="classHabilidad">`;
    vMakeSkillCardHTML += 	`<div class="classHabiIcono">`;
    vMakeSkillCardHTML += 		`<svg>`;
    vMakeSkillCardHTML += 			`<use href="${letIconsFile}${JSONDataSkills[vJSONi].jsonIcono}">`;
    vMakeSkillCardHTML += 		`</svg>`;
    vMakeSkillCardHTML += 	`</div>`;
	vMakeSkillCardHTML += 	`<h3 class="classHabiNombre">${JSONDataSkills[vJSONi].jsonArea}</h3>`;
    vMakeSkillCardHTML += 	`<p class="classHabiDetalles">${JSONDataSkills[vJSONi].jsonSoftwares}</p>`;
	vMakeSkillCardHTML += `</div>`;
	}
	vShowSkillCards.innerHTML = vMakeSkillCardHTML;
}