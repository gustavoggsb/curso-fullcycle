const db = require('mysql2/promise')

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const createPeople = async (data) => {
	const connection = await db.createConnection(config);
	await connection.query(`INSERT INTO people (name) VALUES ('${data}')`);
	await connection.end();
}

const getPeople = async () => {
	const connection = await db.createConnection(config);
	const [data] = await connection.query('SELECT name FROM people');
	await connection.end();
	const people = data.map(res => {
		return res.name;
	})
	return people;
}

module.exports = {createPeople, getPeople}
