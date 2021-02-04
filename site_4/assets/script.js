'use strict';
let month = document.querySelector('.month_container');
let day = document.querySelector('.date_container');
month.style.display="none";
let date_class = new Date();

init();

function init(mon){
	printMonth(date_class);
}

function printMonth(date){
	let month = date.getMonth();
	let year = date.getFullYear();
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	document.querySelector('.year_button').innerText = months[month]+', '+year;
	let table = day.querySelector("table");
	table.innerHTML =`
		<tr>
			<th>Sun</th>
			<th>Mon</th>
			<th>Tue</th>
			<th>Wed</th>
			<th>The</th>
			<th>Fri</th>
			<th>Sat</th>
		</tr>
	`;

	let start_date = new Date(date.getFullYear(), date.getMonth(),1).getDay();
	let end_date = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
	let num_of_fields = end_date + start_date-1;
	num_of_fields += (Math.floor(num_of_fields/7)+1)*7-num_of_fields-1;

	let date_html = "";
	for(let i=0;i<=num_of_fields;i++){
		if(i%7==0){
			if(i==0){
				date_html+=`<tr>`;
			}else{
				date_html+=`</tr><tr>`;
			}
		}
		if(i<start_date || i>=(end_date+start_date)){
			date_html+=`<td></td>`;
		}else{
			date_html+=`<td>${i-start_date+1}</td>`;
		}
	}
	date_html+=`</tr>`;
	table.innerHTML += date_html;
}

document.querySelector(".top_controller").addEventListener('click', (event)=>{
	const target = event.target;
	if(target.classList.contains("left_button")|| target.parentNode.classList.contains("left_button")){
		date_class = new Date(date_class.getFullYear(), date_class.getMonth()-1);
		printMonth(date_class);
	}else if(target.classList.contains("year_button")){
		if(month.style.display=='none'){
			month.style.display='block';
			day.style.display='none';
		}else{
			month.style.display='none';
			day.style.display='block';
		}
	}else if(target.classList.contains("right_button") || target.parentNode.classList.contains("right_button")){
		date_class = new Date(date_class.getFullYear(), date_class.getMonth()+1);
		printMonth(date_class);
	}
});


document.querySelector(".month_container").addEventListener('click',(event)=>{
	const target = event.target;
	if(target.tagName == 'TD'){
		let selected_month = parseInt(target.classList.value.split('-')[1]);
		date_class = new Date(date_class.getFullYear(), selected_month);
		printMonth(date_class);
		month.style.display='none';
		day.style.display='block';		
	}
});
