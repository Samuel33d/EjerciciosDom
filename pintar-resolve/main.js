const users = [
	{
		name: "brayan muñoz",
		age: 25,
		email: "brayan@gmail.com",
		hobbies: ["pintar", "correr", "aprender", "enseñar"],
	},
	{
		name: "Hayder",
		age: 20,
		email: "hayderarenas0206@gmail.com",
		hobbies: ["jugar futbol", "jugar free :v", "jugar play", "deportes"],
	},
	{
		name: "sergio",
		age: 30,
		email: "sergio@academlo.com",
		hobbies: ["jugar futbol", "Entre muchas mas"],
	},
	{
		name: "diana",
		age: 29,
		email: "dimaceri27@gmail.com",
		hobbies: ["música", "bailar", "naturaleza"],
	},
	{
		name: "Camilo Martinez",
		age: 37,
		email: "camiloestebam@gmail.com",
		hobbies: ["musica", "leer", "bike"],
	},
	{
		name: "John",
		age: 40,
		email: "johnrau@gmail.com",
		hobbies: ["correr", "jugar play", "ir al cine"],
	},
	{
		name: "Matias",
		age: 45,
		email: "matias@correo.com",
		hobbies: ["comer", "leer", "lolcito"],
	},
	{
		name: "Andrés Parra",
		age: 24,
		email: "anphillip7@gmail.com",
		hobbies: [
			"estudiar idiomas",
			"pasear",
			"cocinar",
			"programar",
			"leer",
			"jugar videojuegos",
			"escuchar musica",
		],
	},
	{
		name: "David",
		age: 32,
		email: "kdavidh2002@gmail.com",
		hobbies: ["ciclismo", "jugar warzone"],
	},
	{
		name: "Luis Mota",
		age: 35,
		email: "madbroxz@outlook.com",
		hobbies: ["Videojuegos", "Programar", "escuchar musica"],
	},
];

function printHobbies(hobbies) {
	let html = "";

	for (const hobbie of hobbies) {
		html += `<li>${hobbie}</li>`;
	}

	return html;
}

function printUsers(arr) {
	let html = "";

	for (const user of arr) {
		html += `
			<div class="user">
				<h3>${user.name} - ${user.age} años</h3>
				<p>${user.email}</p>
				<ul class="hobbies">
					${printHobbies(user.hobbies)}
				</ul>
			</div>
        `;
	}

	const userHTML = document.querySelector(".users");

	userHTML.innerHTML = html;
}

function main() {
	printUsers(users)

	const options = document.querySelector("#options")

	options.addEventListener("click", function (e) {

		if (e.target.classList.contains("btn--minAge")) {

			arrCopy = structuredClone

				(users);
			arrCopy.sort((a, b) => a.age - b.age);

			printUsers(arrCopy)
		}

		if (e.target.classList.contains("btn--maxAge")) {

			arrCopy = structuredClone

				(users)
			arrCopy.sort((a, b) => b.age - a.age)

			printUsers(arrCopy)
		}

		if (e.target.classList.contains("btn--orderAZ")) {

			arrCopy = structuredClone(users)

			arrCopy.sort((a, b) => a.name.localeCompare(b.name))

			printUsers(arrCopy)
		}

		if (e.target.classList.contains("btn--orderZA")) {

			arrCopy = structuredClone(users)

			arrCopy.sort((a, b) => b.name.localeCompare(a.name))

			printUsers(arrCopy)
		}

		if (e.target.classList.contains("btn--reset")) {
			printUsers(users)
		}

	})
}


window.addEventListener("load", main);
