document.querySelector('.math_operation').addEventListener('click', (event)=>{
	const button_clicked = event.target;
	const result = document.querySelector("#calc_text");
	document.querySelector('.text_area').classList.remove('text_area_error')
	let error_msg = document.querySelector('.error_msg');
	if(error_msg){
		error_msg.parentNode.removeChild(error_msg);
	}

	//Event Delegation
	if(button_clicked.classList.contains('num')){
		if(!isNaN(button_clicked.innerText) ||
			 button_clicked.innerText=='.'){
			result.value+= button_clicked.innerText;
		}else if(button_clicked.innerText=='='){
			try{
				let equation = result.value.replace(/x/g, '*');

				if(!(/[A-Za-z]/.test(equation))){
					result.value = eval(equation);
				}else{
					throw new Error("Invalid Equation");
				}
				
			}catch{
				document.querySelector('.text_area').classList.add('text_area_error');
				result.insertAdjacentHTML("afterend", `<span class="error_msg">Invalid Equation</span>`);
			}
		}
	}else if(button_clicked.classList.contains('math') || button_clicked.parentNode.classList.contains('math')){
		if(button_clicked.classList.contains('num_back')|| button_clicked.parentNode.classList.contains('num_back')){
			result.value = result.value.substr(0,result.value.length-1);
		}else if(button_clicked.innerText=='x' ||
			 		button_clicked.innerText=='/' ||
			 		button_clicked.innerText=='-' ||
			 		button_clicked.innerText=='+'){
			result.value+= button_clicked.innerText;
		}
	}
});

