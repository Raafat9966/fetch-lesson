// Team Directory: STARTER for the live demo
// The plan, in 4 steps:  REQUEST -> CHECK -> UNPACK -> DISPLAY

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const loadButton = document.querySelector('#load-btn');
const statusMessage = document.querySelector('#status');
const userList = document.querySelector('#user-list');

loadButton.addEventListener('click', loadUsers);

async function loadUsers() {
	// 1. REQUEST: ask the server for the data
	// 2. CHECK: did the server say yes?
	// 3. UNPACK: turn the JSON text into JavaScript data
	// 4. DISPLAY: put the data on the page
}

// Prepared helper: builds ONE card for ONE user.
// textContent (not innerHTML) because the data comes from outside:
// we show it as plain text and never run it as HTML.
function createUserCard(user) {
	const card = document.createElement('article');
	card.className = 'card';

	const name = document.createElement('h2');
	name.textContent = user.name;

	const email = document.createElement('p');
	email.textContent = user.email;

	const company = document.createElement('p');
	company.className = 'company';
	company.textContent = user.company.name;

	card.append(name, email, company);
	return card;
}
