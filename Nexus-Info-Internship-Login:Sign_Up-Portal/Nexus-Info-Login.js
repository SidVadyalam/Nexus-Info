
UsernameDiv = document.querySelector("#Username")
UsernameLabel = document.querySelector("#Username").getElementsByTagName('label')[0]
UsernameInput = document.querySelector("#Username").getElementsByTagName('input')[0]
PasswordDiv = document.querySelector("#Password")
PasswordLabel = document.querySelector("#Password").getElementsByTagName('label')[0]
PasswordInput = document.querySelector("#Password").getElementsByTagName('input')[0]
PasswordBTN = document.querySelector(".btn-show-hide-pwd")

UsernameInput.addEventListener("blur", function(a){ 
	//console.log(UsernameInput.value.length)
	if (check_validity(UsernameInput.value)){
		UsernameLabel.classList.remove("Wrong-Answer");
		UsernameDiv.classList.remove("Wrong-Answer-Username-Div");
	} else{
		UsernameLabel.classList.add("Wrong-Answer");
		UsernameDiv.classList.add("Wrong-Answer-Username-Div");
	}
})

PasswordInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (PasswordInput.value.length < 8){
		PasswordLabel.classList.add("Wrong-Answer");
		PasswordDiv.classList.add("Wrong-Answer-Password-Div");
	} else{
		PasswordLabel.classList.remove("Wrong-Answer");
		PasswordDiv.classList.remove("Wrong-Answer-Password-Div");
	}
})

const a = ["mousedown", "touchstart", "touchmove"]
a.forEach(function(eventName){
	PasswordBTN.addEventListener(eventName, () => { 
	PasswordInput.setAttribute("type", "text");
});
})



const b = ["mouseup", "mouseleave", "touchend"]
b.forEach((eventName) => {
	PasswordBTN.addEventListener(eventName, (e) => {
		e.preventDefault();
		PasswordInput.setAttribute("type", "password");
	});
});


function check_validity(word){
	for (let i of word){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.".includes(i)))
			return false
	}
	return true
}