'use strict';

let regexpValidationPassword = new RegExp('^[A-Za-zА-Яа-я0-9]{8,20}&');

const input = documnet.getElementById('input');
const form = document.getElementsById('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	event.stopPropagation();
});

input.addEventListener('input', (event) => {
	const { currentTarget: { value } } = event;

	if (!value.match(regexpValidationPassword)) {
		event.currentTarget.style.border = '5px solid red';
	} else {
		event.currentTarget.style.border = '';
	}
});
