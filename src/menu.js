import Placeholder from './generic-image-placeholder.png';

function item(name, type) {
	const item = document.createElement('div');
	const title = document.createElement('h2');
	const itemDescription = document.createElement('div');
	const itemCost = document.createElement('div');
	const image = new Image();

	item.classList.add('item-container');
	itemDescription.classList.add('item-description');
	itemCost.classList.add('item-cost');
	image.classList.add('item-preview');

	title.innerHTML = name;
	itemDescription.innerHTML = 'Lorem Ipsum';

	if (type === 'beverage') {
		itemCost.innerHTML = '$2';
	} else if (type === 'main') {
		itemCost.innerHTML = '$10';
	} else if (type === 'side') {
		itemCost.innerHTML = '$5';
	} else {
		itemCost.innerHTML = '$-';
	}

	image.src = Placeholder;

	item.appendChild(title);
	item.appendChild(itemDescription);
	item.appendChild(itemCost);
	item.appendChild(image);

	return item;
}

function menu() {
	const menu = document.createElement('div');
	menu.classList.add('container');

	// menu page title
	const menuHeader = document.createElement('h1');
	menuHeader.innerHTML = 'Menu';
	menu.appendChild(menuHeader);

	// beverages
	const beverages = document.createElement('div');
	beverages.classList.add('menu-items-container');
	const bevHeader = document.createElement('h2');
	bevHeader.classList.add('header');
	bevHeader.innerHTML = 'Beverages';
	beverages.appendChild(bevHeader);
	beverages.appendChild(item('Assorted Soft Drinks', 'beverage'));
	beverages.appendChild(item('Milk', 'beverage'));
	beverages.appendChild(item('Coffee', 'beverage'));
	beverages.appendChild(item('Juice', 'beverage'));

	// mains
	const mains = document.createElement('div');
	mains.classList.add('menu-items-container');
	const mainHeader = document.createElement('h2');
	mainHeader.classList.add('header');
	mainHeader.innerHTML = 'Mains';
	mains.appendChild(mainHeader);
	mains.appendChild(item('Fish and Chips', 'main'));
	mains.appendChild(item('Pie', 'main'));

	// sides
	const sides = document.createElement('div');
	sides.classList.add('menu-items-container');
	const sideHeader = document.createElement('h2');
	sideHeader.classList.add('header');
	sideHeader.innerHTML = 'Sides';
	sides.appendChild(sideHeader);
	sides.appendChild(item('Salad', 'side'));
	sides.appendChild(item('Kimchi', 'side'));

	menu.appendChild(beverages);
	menu.appendChild(mains);
	menu.appendChild(sides);

	return menu;
}

export default menu;
