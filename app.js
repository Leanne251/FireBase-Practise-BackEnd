import express from 'express';
import router from './routes/holidayRoutes.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import firebaseAuth from './middleware/firebaseAuth.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

// app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

const __dirname = dirname(fileURLToPath(import.meta.url));

//Firebase auth middleware checks which user is currently logged in updating req with user (req.user) which can be used in routes
// app.use(firebaseAuth);
app.use(cors());
app.use(express.json());
app.use('/holidays', router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html')); // path.join to the directory name youare currrently in and the file you want to serve e.g index.html
});

app.listen(PORT, function() {
	console.log({ message: 'I am listening on port 8000' });
});
