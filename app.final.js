// Team Directory: FINAL version (backup if live coding breaks)
// The plan, in 4 steps:  REQUEST -> CHECK -> UNPACK -> DISPLAY

const API_URL = "https://jsonplaceholder.typicode.com/users";

const loadButton = document.querySelector("#load-btn");
const statusMessage = document.querySelector("#status");
const userList = document.querySelector("#user-list");

loadButton.addEventListener("click", loadUsers);

async function loadUsers() {
  statusMessage.textContent = "Loading...";
  userList.replaceChildren(); // remove old cards before showing new ones

  try {
    // 1. REQUEST: ask the server for the data
    const response = await fetch(API_URL);

    // 2. CHECK: did the server say yes?
    // fetch() does NOT fail on 404 or 500, so we have to check ourselves.
    if (!response.ok) {
      throw new Error(`Server answered with status ${response.status}`);
    }

    // 3. UNPACK: turn the JSON text into JavaScript data
    const users = await response.json();

    // 4. DISPLAY: put the data on the page
    users.forEach((user) => {
      userList.append(createUserCard(user));
    });
    statusMessage.textContent = `${users.length} team members loaded.`;
  } catch (error) {
    // Details for us (developers) in the console...
    console.error(error);
    // ...a calm, clear message for the user on the page.
    statusMessage.textContent = "Sorry, we couldn't load the team. Please try again.";
  }
}

// Builds ONE card for ONE user.
// textContent (not innerHTML) because the data comes from outside:
// we show it as plain text and never run it as HTML.
function createUserCard(user) {
  const card = document.createElement("article");
  card.className = "card";

  const name = document.createElement("h2");
  name.textContent = user.name;

  const email = document.createElement("p");
  email.textContent = user.email;

  const company = document.createElement("p");
  company.className = "company";
  company.textContent = user.company.name;

  card.append(name, email, company);
  return card;
}
