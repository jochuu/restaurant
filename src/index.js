import main from './main';
import menu from './menu';
import contact from './contact';
import './style.css';

const content = document.getElementById('content');
content.appendChild(main());

document.getElementById('home').onclick = () => {
	content.innerHTML = '';
	content.appendChild(main());
};

document.getElementById('menu').onclick = () => {
	content.innerHTML = '';
	content.appendChild(menu());
};

document.getElementById('contact').onclick = () => {
	content.innerHTML = '';
	content.appendChild(contact());
};
