import query from '../index.js';

async function insertHoliday(destination, style, price) {
	SQLInsertHoliday = `INSERT INTO holidays (destination, style, price) VALUES ('${destination}','${style}', '${price}) RETURNING *`;

	const response = await query(SQLInsertHoliday);

	console.log('insert holiday', response);
}

insertHoliday('Paris', 'city', 750);

// export default insertHoliday;
