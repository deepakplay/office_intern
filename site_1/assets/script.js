'use strict';

let menu_open = false;

document.querySelector(".mobile_menu").addEventListener('click', (e)=>{
	if(menu_open === false){
		document.querySelector(".main_header ul").style.display='block';
		menu_open = true;
	}
});

document.querySelector(".main_header .close_nav").addEventListener('click', (e)=>{
	if(menu_open === true){
		document.querySelector(".main_header ul").style.display='none';
		menu_open = false;
	}
});

window.addEventListener('resize', (e)=>{
	if(e.target.outerWidth>=700){
		document.querySelector(".main_header ul").removeAttribute('style');
		menu_open = false;
	}
})