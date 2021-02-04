function insertErrorMsg(element, msg){
	element.insertAdjacentHTML("afterend", `<span class="error_msg">${msg}</span>`);
}

document.forms["register"].addEventListener("submit", function(e){
	console.log(this);
	let user_id = document.forms["register"]["user"];
	let password = document.forms["register"]["pass"];
	let name = document.forms["register"]["name"];
	let country = document.forms["register"]["country"];
	let zip_code = document.forms["register"]["zip_code"];
	let email = document.forms["register"]["email"];
	let gender = document.forms["register"]["gender"];
	let language = document.forms["register"]["language"];
	let about = document.forms["register"]["about"];
	let validForm = true;

	Array.from(document.querySelectorAll('.error')).forEach((val)=>{
		val.classList.remove('error');
	});

	Array.from(document.querySelectorAll('.error_msg')).forEach((ele)=>{
		ele.parentNode.removeChild(ele);
	})

	if(user_id.value == "" || user_id.value == null){
		user_id.classList.add("error");
		insertErrorMsg(user_id, "User ID must be entered");
		validForm = false;
	}else if(user_id.value.length<5 || user_id.value.length>12){
		user_id.classList.add("error");
		insertErrorMsg(user_id, "User ID must be in length 5 to 12 characters");
		validForm = false;
	}

	if(password.value == "" || password.value == null){
		password.classList.add("error");
		insertErrorMsg(password, "Password must be entered");
		validForm = false;
	}else if(password.value.length<7 || password.value.length>12){
		password.classList.add("error");
		insertErrorMsg(password, "Password must be in length 7 to 12 characters");
		validForm = false;
	}

	e.preventDefault();
	/*

	if(password.value.length<7 || password.value.length>12){
		password.classList.add("error");
		insertErrorMsg(password, "Password must be in length 7 to 12 characters");
		validForm = false;
	}

	if(!(/[a-zA-Z]+$/.test(name.value))){
		name.classList.add("error");
		insertErrorMsg(name, "Name must contains alphabates only");
		validForm = false;
	}

	if(country.value==='none' || country.value===null){
		country.classList.add("error");
		insertErrorMsg(country, "Country Must be specified");
		validForm = false;
	}

	if(!zip_code.value){
		zip_code.classList.add("error");
		insertErrorMsg(zip_code, "Enter the valid Zip Code");
		validForm = false;
	}

	if(!(/\S+@\S+\.\S+/.test(email.value))){
		email.classList.add("error");
		insertErrorMsg(email, "Enter the valid Email address");
		validForm = false;
	}

	if(!(gender.value)){
		insertErrorMsg(gender, "Enter your gender");
		validForm = false;
	}

	let language_selected =false;
	language.forEach((val)=>{
	    language_selected = language_selected?true:val.checked;
	});
	
	if(!language_selected){
		insertErrorMsg(language, "Enter your Language");
		validForm = false;
	}

	if(about.value.length>=150){
		about.classList.add("error");
		insertErrorMsg(language, "About not more than 150 characters");
		validForm = false;
	}*/
	
});