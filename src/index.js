import main from './main';
import './style.css';

const content = document.getElementById('content');
content.appendChild(main());

document.getElementById('home').onclick = () => {
	content.innerHTML = '';
	content.appendChild(main());
};

document.getElementById('menu').onclick = () => {
	content.innerHTML = '';
};

document.getElementById('contact').onclick = () => {
	content.innerHTML = '';
};
