function createContact(name, number, email) {
	const contactInfo = document.createElement('div');
	contactInfo.classList.add('contact-info');

	const header = document.createElement('h2');
	header.classList.add = 'contact-header';

	const phoneNo = document.createElement('div');
	const emailAdd = document.createElement('div');

	header.innerHTML = name;
	phoneNo.innerHTML = number;
	emailAdd.innerHTML = email;

	contactInfo.appendChild(header);
	contactInfo.appendChild(phoneNo);
	contactInfo.appendChild(emailAdd);

	return contactInfo;
}

function contact() {
	const contactPage = document.createElement('div');
	contactPage.classList.add('container');

	const header = document.createElement('h1');
	header.innerHTML = 'Contacts';

	contactPage.appendChild(header);

	contactPage.appendChild(
		createContact('Bob', '01234567890', 'email@email.com.au'),
	);
	contactPage.appendChild(
		createContact('Alice', '01234567890', 'email@email.com.au'),
	);
	contactPage.appendChild(
		createContact('Sue', '01234567890', 'email@email.com.au'),
	);
	contactPage.appendChild(
		createContact('Greg', '01234567890', 'email@email.com.au'),
	);

	return contactPage;
}

export default contact;
