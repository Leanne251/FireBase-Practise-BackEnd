import pg from 'pg';
import { connectionString } from '../config.js';

const pool = new pg.Pool({
	connectionString,
	ssl: {
		rejectUnauthorized: false
	}
});

console.log('pool', pool);
export default function query(text, params) {
	return pool.query(text, params);
}
