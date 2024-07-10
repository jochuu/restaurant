function header() {
	const container = document.createElement('div');
	container.classList.add('header');

	const header = document.createElement('h1');
	header.innerHTML = 'Project: restaurant';

	container.appendChild(header);
	return container;
}

function description() {
	const description = document.createElement('div');
	description.classList.add('desc');
	description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo. Nisl nunc mi ipsum faucibus. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Montes nascetur ridiculus mus mauris vitae. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Ullamcorper velit sed ullamcorper morbi tincidunt. Eget felis eget nunc lobortis. Purus semper eget duis at tellus at urna condimentum mattis. Quis viverra nibh cras pulvinar mattis nunc sed. Quisque non tellus orci ac. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Nulla at volutpat diam ut venenatis tellus in metus.`;
	return description;
}

function hours() {
	const hours = document.createElement('div');
	hours.classList.add('hours-list');

	const daysOfWeek = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday',
	];

	daysOfWeek.forEach((day) => {
		let dayRow = document.createElement('div');
		dayRow.classList.add('day-row');
		let dayDiv = document.createElement('div');
		let timeDiv = document.createElement('div');
		dayDiv.classList.add('day');
		timeDiv.classList.add('time');
		dayRow.classList.add(day);
		if (day === 'saturday') {
			dayDiv.innerHTML = day;
			timeDiv.innerHTML = '10:00 - 22:00';
		} else if (day === 'sunday') {
			dayDiv.innerHTML = day;
			timeDiv.innerHTML = '12:00 - 17:00';
		} else {
			dayDiv.innerHTML = day;
			timeDiv.innerHTML = '14:00 - 21:00';
		}
		dayRow.appendChild(dayDiv);
		dayRow.appendChild(timeDiv);
		hours.appendChild(dayRow);
	});
	return hours;
}

function main() {
	const main = document.createElement('div');
	main.classList.add('container');
	main.appendChild(header());
	main.appendChild(description());
	main.appendChild(hours());

	return main;
}

export default main;
