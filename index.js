require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Customer = require('./models/loans');

const app = express();
mongoose.set('debug', true);
app.use(cors());

// Connect to MongoDB
mongoose
	.connect(
		'mongodb+srv://sassiwalee:ZlZQl7ZENijOK0Jq@cluster0.8jebve2.mongodb.net/pfeDB'
	)
	.then(() => {
		console.log('MongoDB connected successfully');
	})
	.catch((err) => {
		console.error('MongoDB connection error:', err);
	});
app.get('/', async (req, res) => {
	res.status(200).send('hello world !');
});
app.get('/customers/search', async (req, res) => {
	const { name, age, customerID, ssn } = req.query;

	try {
		let query = {};

		if (name && age) {
			query = { Name: name, Age: age };
		} else if (customerID) {
			query = { Customer_ID: customerID };
		}
		if (ssn) {
			query = { SSN: ssn };
		} else {
			return res.status(400).send('Invalid search parameters');
		}

		const customers = await Customer.find(query);
		if (customers.length === 0) {
			return res.status(404).send('No customers found');
		}

		res.send(customers);
	} catch (error) {
		console.error('Error searching customers:', error);
		res.status(500).send('Server error');
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
