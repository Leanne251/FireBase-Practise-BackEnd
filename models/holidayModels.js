// import holidays from '../data/holiday-data.js';

// import insertHoliday from '../db/scripts/insertHoliday';

// find all the holidays

// export function getHolidays() {
// 	return holidays;
// }

import query from '../db/index.js';

export async function getAllHolidays() {
	const data = await query(`SELECT * FROM holidays`);
	console.log('data', data);
	return data.rows;
}

getAllHolidays();

// console.log(getHolidays());

export async function createData({ destination, style, price }) {
	const data = await query(
		`INSERT INTO holidays(destination, style, price) VALUES($1, $2, $3) 
    RETURNING destination;`,
		[ destination, style, price ]
	);

	return data.rows;
}

// 	if (findHoliday === undefined) {
// 		return 'Destination Not Found';
// 	} else {
// 		return findHoliday;
// 	}
// }

// // export async function postHoliday(body) {
// // 	const destination = body.destination;
// // 	const style = body.style;
// // 	const price = body.price;

// 	const data = await query(insertHoliday);
// 	return data.rows;
// }

// console.log(getAHoliday("Turkey"));

// update a holiday

// function updateAHoliday(holidayToUpdate, newHolidayInfo){

//      let holidayID = holiday.findIndex(element => {
//          if (element.id === holidayToUpdate){
//              return true;
//          }
//      })
//      let updatedHoliday = holiday.splice(1,1, newHolidayInfo)
//      return updatedHoliday

// }

//     const selectedHoliday = holiday.findIndex((element) => {
//         if (element.id === newHolidayInfo.id){
//            } return true;
//         }

// console.log(updateAHoliday(2, {id:2, destination: "turkey", style: "beach", price: "1000"}))
