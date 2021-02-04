'use strict';
function insertErrorMsg(element, msg){
	element.insertAdjacentHTML("afterend", `<span class="error_msg">${msg}</span>`);
}

document.forms["register"].addEventListener("submit", function(e){
	let user_id = this["user"];
	let password = this["pass"];
	let name = this["name"];
	let country = this["country"];
	let zip_code = this["zip_code"];
	let email = this["email"];
	let gender = this["gender"];
	let language = this["language"];
	let about = this["about"];
	let validForm = true;

	Array.from(document.querySelectorAll('.error')).forEach((val)=>{
		val.classList.remove('error');
	});

	Array.from(document.querySelectorAll('.error_msg')).forEach((ele)=>{
		ele.parentNode.removeChild(ele);
	})

	if(user_id.value == "" || user_id.value == null){
		user_id.classList.add('error');
		insertErrorMsg(user_id, 'User ID must be required');
		validForm = false;
	}else if(user_id.value.length<5 || user_id.value.length>12){
		user_id.classList.add('error');
		insertErrorMsg(user_id, 'User ID must be in length 5 to 12 characters');
		validForm = false;
	}

	if(password.value == "" || password.value == null){
		password.classList.add('error');
		insertErrorMsg(password, 'Password must be required');
		validForm = false;
	}else if(password.value.length<7 || password.value.length>12){
		password.classList.add('error');
		insertErrorMsg(password, 'Password must be in length 7 to 12 characters');
		validForm = false;
	}

	if(name.value == "" || name.value == null){
		name.classList.add('error');
		insertErrorMsg(name, 'Full name must be required');
		validForm = false;
	}else if(!(/[a-zA-Z]+$/.test(name.value))){
		name.classList.add('error');
		insertErrorMsg(name, 'Name must contains alphabates only');
		validForm = false;
	}

	if(country.value=='none' || country.value==null){
		country.classList.add('error');
		insertErrorMsg(country, 'Country must be specified');
		validForm = false;
	}

	if(zip_code.value=='' || zip_code.value==null){
		zip_code.classList.add('error');
		insertErrorMsg(zip_code, 'ZIP Code must be required');
		validForm = false;
	}

	if(isNaN(zip_code.value)){
		zip_code.classList.add('error');
		insertErrorMsg(zip_code, 'Invalid zip code');
		validForm = false;	
	}

	if(!(/\S+@\S+\.\S+/.test(email.value))){
		email.classList.add('error');
		insertErrorMsg(email, 'Enter the valid Email address');
		validForm = false;
	}

	if(!(gender.value)){
		insertErrorMsg(document.querySelector('.gender_error'), 'Enter your gender');
		validForm = false;
	}


	let language_selected =false;
	language.forEach((val)=>{
	    language_selected = language_selected?true:val.checked;
	});
	
	if(!language_selected){
		insertErrorMsg(document.querySelector('.language_error'), 'Enter your Language');
		validForm = false;
	}

	if(about.value.length >150){
		about.classList.add('error');
		insertErrorMsg(about, 'About not more than 150 characters');
		validForm = false;
	}

	if(!validForm) e.preventDefault();	
});