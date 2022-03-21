console.log('loading');

const holidayData = document.querySelector('.holiday-data');
const allHolidays = document.querySelector('.all-holidays');
allHolidays.addEventListener('click', getAllHolidays);

async function getAllHolidays() {
	const response = await fetch(`http://localhost:8000/holidays`); // fetch holidays
	console.log('response', response);
	const data = await response.json();
	console.log('payload', data.payload);
	let holidayResults = data.payload;
	holidayData.innerHTML = '';
	holidayResults.forEach(getHolidayDetails); // holiday is the "element" in the forEach loop.
}

function getHolidayDetails(holiday) {
	const article = createHolidayList(holiday);
	console.log('holiday', holiday);
	holidayData.appendChild(article);
}

function createHolidayList({ destination, style, price }) {
	// here the 'holiday e;ement' is deconstructed
	const article = document.createElement('article');
	const travelDestination = document.createElement('h2');
	const travelStyle = document.createElement('p');
	const travelPrice = document.createElement('p');
	travelDestination.innerText = `Destination: ${destination}`;
	travelStyle.innerText = `Travel Style: ${style}`;
	travelPrice.innerText = `Holiday Price £${price}`;
	article.appendChild(travelDestination);
	article.appendChild(travelStyle);
	article.appendChild(travelPrice);
	return article; // the results of this function is being fed to the function above, which in turn is being fed to the forEach loop above.
}

let holidayChoice = document.querySelector('.your-holiday-choice');
let submitButton = document.querySelector('#submit');
let inputField = document.querySelector('input');

submitButton.addEventListener('click', searchAPI); // get request but specifying the country.

async function searchAPI() {
	const response = await fetch(`http://localhost:8000/holidays`);
	const data = await response.json();

	console.log('api data', data);
	console.log('d', data.payload[0].destination.toLowerCase());

	const deal = data.payload.find((element) => {
		if (element.destination.toLowerCase === inputField.value) {
			return element;
		} else {
			console.log('no deal found', element);
		}
	});

	console.log('deal', deal);

	console.log('api', data);
}

// loop through the data.destination and when it matches the text in the box pull back the infomation. so we can use find?

// ADD A POST REQUEST

let addButton = document.querySelector('#add-holiday');
let destination = document.querySelector('#destination');
let style = document.querySelector('#style');
let price = document.querySelector('#price');

addButton.addEventListener('click', postHoliday);

async function postHoliday() {
	const response = await fetch('http://localhost:3000/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify({ destination: destination.value, style: style.value, price: price.value })
	});

	const data = await response.json();
}
