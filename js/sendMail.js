//VARIABLES MAIL
var varFormMail = document.querySelector(".classFormMail");
var varFormTxtName = document.querySelector("#idFormTxtName");
var varFormTxtMail = document.querySelector("#idFormTxtMail");
var varValidMailAdd = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var varFormTxtMsg = document.querySelector("#idFormTxtMsg");
var varCheckMail = document.querySelector(".classCheckMail");

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