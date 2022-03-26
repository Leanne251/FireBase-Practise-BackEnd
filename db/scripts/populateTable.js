import query from '../index.js';
import holidays from '../../data/holiday-data.js';

async function populateTable() {
	for (let i = 0; i < holidays.length; i++) {
		const destination = holidays[i].destination;
		const style = holidays[i].style;
		const price = holidays[i].price;

		// check about returning.. can i put *?

		const response = await query(
			`INSERT INTO holidays (destination, style, price) VALUES ($1, $2, $3) RETURNING *`,
			[ destination, style, price ]
		);
		// console.log('populate response', response);
	}
}

populateTable();
