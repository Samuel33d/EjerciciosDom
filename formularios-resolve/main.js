const formUser = document.querySelector("#formUser");
const userHTML = document.querySelector(".users")



const users = [
	{
		username: "brayan",
		useremail: "brayan@gmail.com",
		age: 22,
	},
	{
		username: "stiven",
		useremail: "stiven@gmail.com",
		age: 23,
	},
	{
		username: "estefania",
		useremail: "estefania@gmail.com",
		age: 24,
	},
];

formUser.addEventListener("submit", function (e) {
	e.preventDefault();

	const username = e.target.username.value.trim();
	const useremail = e.target.useremail.value.trim();

	let user = {
		username,
		useremail,
	};

	users.push(user);

	drawUser(users);

	formUser.reset();
});

const usersHTML = document.querySelector(".users");


function drawUser(users) {
	let html = ``;

	for (let i = 0; i < users.length; i++) {
		const { username, useremail } = users[i];
		html += `<div class="user">
			<h3>Nombre: ${username}</h3>
			<p>Correo: ${useremail}</p>
			<button class="btn--del" id ="${i}">Eliminar</button>
		</div>`
	}

	usersHTML.innerHTML = html
}

userHTML.addEventListener("click", function (e) {

	if (e.target.classList.contains("btn--del")) {
		const i = parseInt(e.target.id)
		users.splice(i, 1)
		drawUser(users);
	}
})


drawUser(users);