FNameLabel = document.querySelector("#FName").getElementsByTagName('label')[0]
FNameInput = document.querySelector("#FName").getElementsByTagName('input')[0]
FNameDIV = document.querySelector("#FName")
LNameLabel = document.querySelector("#LName").getElementsByTagName('label')[0]
LNameInput = document.querySelector("#LName").getElementsByTagName('input')[0]
LNameDIV = document.querySelector("#LName")
UsrEmailLabel = document.querySelector("#UsrEmail").getElementsByTagName('label')[0]
UsrEmailInput = document.querySelector("#UsrEmail").getElementsByTagName('input')[0]
UsrEmailDIV = document.querySelector("#UsrEmail")
PhoneNumLabel = document.querySelector("#PhoneNum").getElementsByTagName('label')[0]
PhoneNumInput = document.querySelector("#PhoneNum").getElementsByTagName('input')[0]
PhoneNumDIV = document.querySelector("#PhoneNum")
UsrNameLabel = document.querySelector("#UsrName").getElementsByTagName('label')[0]
UsrNameInput = document.querySelector("#UsrName").getElementsByTagName('input')[0]
UsrNameDIV = document.querySelector("#UsrName")
PswrdLabel = document.querySelector("#Pswrd").getElementsByTagName('label')[0]
PswrdInput = document.querySelector("#Pswrd").getElementsByTagName('input')[0]
PswrdDIV = document.querySelector("#Pswrd")
CPswrdLabel = document.querySelector("#CPswrd").getElementsByTagName('label')[0]
CPswrdInput = document.querySelector("#CPswrd").getElementsByTagName('input')[0]
CPswrdDIV = document.querySelector("#CPswrd")
PasswordContainer = document.querySelector("#eye_icon").getElementsByTagName('img')[0];


const b = ['mousedown', 'touchstart', 'touchmove'] /* Why is this */
b.forEach((eventName) => {
	PasswordContainer.addEventListener(eventName, (e) => {
		e.preventDefault();
		PswrdInput.setAttribute("type","text");
	});

});


const a = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'] /* Why is this */
a.forEach((eventName) => {
	PasswordContainer.addEventListener(eventName, (e) => {
		e.preventDefault();
		PswrdInput.setAttribute("type","password");
	});

});



FNameInput.addEventListener("blur", function(a){
	if (check_name_validity(FNameInput.value)){
		FNameLabel.classList.remove("Wrong-Answer");
		FNameDIV.classList.remove("Wrong-Answer-Name-Div");
	} else {
		FNameLabel.classList.add("Wrong-Answer");
		FNameDIV.classList.add("Wrong-Answer-Name-Div");
	}
})



LNameInput.addEventListener("blur", function(a){
	if (check_name_validity(LNameInput.value)){
		LNameLabel.classList.remove("Wrong-Answer");
		LNameDIV.classList.remove("Wrong-Answer-Name-Div");
	} else {
		LNameLabel.classList.add("Wrong-Answer");
		LNameDIV.classList.add("Wrong-Answer-Name-Div");
	}
})


UsrEmailInput.addEventListener("blur", function(a){
	if (UsrEmailInput.value.includes("@")){
		UsrEmailLabel.classList.remove("Wrong-Answer");
		UsrEmailDIV.classList.remove("Wrong-Answer-Email-Div");
	} else {
		UsrEmailLabel.classList.add("Wrong-Answer");
		UsrEmailDIV.classList.add("Wrong-Answer-Email-Div");
	}
})


PhoneNumInput.addEventListener("blur", function(a){
	if (check_phone_validity(PhoneNumInput.value)){
		PhoneNumLabel.classList.remove("Wrong-Answer");
		PhoneNumDIV.classList.remove("Wrong-Answer-Phone-Div");
	} else {
		PhoneNumLabel.classList.add("Wrong-Answer");
		PhoneNumDIV.classList.add("Wrong-Answer-Phone-Div");
	}
})


UsrNameInput.addEventListener("blur", function(a){ 
	//console.log(UsernameInput.value.length)
	if (check_username_validity(UsrNameInput.value)){
		UsrNameLabel.classList.remove("Wrong-Answer");
		UsrNameDIV.classList.remove("Wrong-Answer-Username-Div");
	} else{
		UsrNameLabel.classList.add("Wrong-Answer");
		UsrNameDIV.classList.add("Wrong-Answer-Username-Div");
	}
})


PswrdInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (PswrdInput.value.length < 8){
		PswrdLabel.classList.add("Wrong-Answer");
		PswrdDIV.classList.add("Wrong-Answer-Password-Div");
	} else{
		PswrdLabel.classList.remove("Wrong-Answer");
		PswrdDIV.classList.remove("Wrong-Answer-Password-Div");
	}
})


CPswrdInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (!(PswrdInput.value === CPswrdInput.value)){
		CPswrdLabel.classList.add("Wrong-Answer");
		CPswrdDIV.classList.add("Wrong-Answer-Confirm-Password-Div");
	} else{
		CPswrdLabel.classList.remove("Wrong-Answer");
		CPswrdDIV.classList.remove("Wrong-Answer-Confirm-Password-Div");
	}
})



function check_username_validity(word){
	for (let i of word){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.".includes(i)))
			return false
	}
	return true
}


function check_phone_validity(number){
	for (let j of number){
		if (!("1234567890(-)".includes(j))){
			return false
		}
		return true
	}
}


function check_name_validity(name){
	for (let k of name){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(k))){
			return false
		}
		return true
	}
}