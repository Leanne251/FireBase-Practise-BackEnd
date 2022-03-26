import express from 'express';
// import { getHolidays, getAHoliday } from '../models/holidayModels.js';

import { getAllHolidays, createData } from '../models/holidayModels.js';

const router = express.Router();

router.get('/', async function(req, res) {
	const allHolidays = await getAllHolidays();

	console.log(req.headers.authorization, 'header');

	res.json({
		success: true,
		payload: allHolidays
	});
});

router.post('/', async function(req, res) {
	const body = req.body;
	const create = await createData(body);

	res.json({
		success: true,
		message: `Post has been successful`,
		payload: create
	});
});

// router.get('/destinations', (req, res) => {
// 	const destination = req.query.destination;
// 	const holidayFound = getAHoliday(destination);
// 	res.json({
// 		success: true,
// 		payload: holidayFound
// 	});
// });

// // get holiday by the query selector, destination.

// router.get('/', (req, res) => {
// 	console.log('req.query', req.query);
// });

// // get holiday by ID
// router.get('/:id', (req, res) => {
// 	//get holiday by id, id is entered as a string.
// });

// // router.post('/', (req, res) => {
// 	const body = req.body;
// 	const create = postHoliday(body);

// 	res.json({
// 		success: true,
// 		message: `Post has been successfully, ${body.reflection}`,
// 		payload: create
// 	});
// });

// post a holiday
// provide three boxes for destination / style / price
// get the information from these boxes using query selector on change.
// create a post request where this information is sent in an object
// information will be added to the data base via insert into.

export default router;
