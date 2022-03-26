// use SQL to create a table

import query from '../index.js';

let SQLString = `CREATE TABLE IF NOT EXISTS holidays
     (id SERIAL PRIMARY KEY, 
          userID TEXT,
     destination TEXT,
     style TEXT,
     price INT)`;

//parameters?
// how come we sometimes have to be defined and passed in and sometimes we can just declare the variable or object outside of the function and use it inside outside

async function createTable() {
	const res = await query(SQLString);
	// console.log('res', res);
}

createTable();
