let ele;

function validate(){
	let user_id = document.forms["register"]["user"];
	let password = document.forms["register"]["pass"];
	let name = document.forms["register"]["name"];
	let country = document.forms["register"]["country"];
	let zip_code = document.forms["register"]["zip_code"];
	let email = document.forms["register"]["email"];
	let gender = document.forms["register"]["gender"];
	let language = document.forms["register"]["language"];
	let about = document.forms["register"]["about"];

	ele = Array.from(document.querySelectorAll('.error'));
	ele.forEach((val)=>{
		val.classList.remove('error');
	});

	if(user_id.value.length<5 || user_id.value.length>12){
		user_id.classList.add("error");
		alert("User ID must be in length 5 to 12 characters");
		return false;
	}

	if(password.value.length<7 || password.value.length>12){
		password.classList.add("error");
		alert("Password must be in length 7 to 12 characters");
		return false;
	}

	if(!(/[a-zA-Z]+$/.test(name.value))){
		name.classList.add("error");
		alert("Name must contains alphabates only");
		return false;
	}

	if(country.value==='none' || country.value===null){
		country.classList.add("error");
		alert("Country Must be specified");
		return false;
	}

	if(!zip_code.value){
		zip_code.classList.add("error");
		alert("Enter the valid Zip Code");
		return false;
	}

	if(!(/\S+@\S+\.\S+/.test(email.value))){
		email.classList.add("error");
		alert("Enter the valid Email address");
		return false;
	}

	if(!(gender.value)){
		Array.from(gender).forEach((val)=>{
			val.classList.add("error");
		})
		alert("Enter your gender");
		return false;	
	}

	let language_selected =false;
	language.forEach((val)=>{
	    language_selected = language_selected?true:val.checked;
	});
	
	if(!language_selected){
		Array.from(language).forEach((val)=>{
			val.classList.add("error");
		});
		alert("Enter your Language");
		return false;
	}

	if(about.value.length>=150){
		about.classList.add("error");
		alert("About not more than 150 characters");
		return false;
	}

	alert("Submited Successfully");
	return true;
}