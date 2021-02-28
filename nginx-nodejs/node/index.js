const { createPeople, getPeople } = require("./database");
const faker = require('faker')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	await createPeople(faker.name.findName())
	const peoples = await getPeople();
	const peopleList = await peoples.reduce((accumulator, element) => {
		return accumulator + `<li>${element}</li>`;
	}, '');
	res.send(`<h1>Full Cycle Rocks!</h1><ul>${peopleList}</ul>`);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
});
