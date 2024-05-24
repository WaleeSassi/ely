const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
	Customer_ID: { type: String, required: true },
	Age: { type: Number, required: true },
	Annual_Income: { type: Number, required: true },
	Monthly_Inhand_Salary: { type: Number, required: true },
	Num_Bank_Accounts: { type: Number, required: true },
	Num_Credit_Card: { type: Number, required: true },
	Interest_Rate: { type: Number, required: true },
	Num_of_Loan: { type: Number, required: true },
	Delay_from_due_date: { type: Number, required: true },
	Num_of_Delayed_Payment: { type: Number, required: true },
	Changed_Credit_Limit: { type: Number, required: true },
	Num_Credit_Inquiries: { type: Number, required: true },
	Outstanding_Debt: { type: Number, required: true },
	Credit_Utilization_Ratio: { type: Number, required: true },
	Credit_History_Age: { type: mongoose.Schema.Types.Mixed, default: null },
	Total_EMI_per_month: { type: Number, required: true },
	Amount_invested_monthly: { type: Number, required: true },
	Monthly_Balance: { type: Number, required: true },
	Month: { type: String, required: true },
	Name: { type: String, required: true },
	SSN: { type: String, required: true },
	Occupation: { type: String, required: true },
	Type_of_Loan: { type: mongoose.Schema.Types.Mixed, default: null },
	Credit_Mix: { type: String, required: true },
	Payment_of_Min_Amount: { type: String, required: true },
	Payment_Behaviour: { type: String, required: true },
});

// Use 'loans' as the collection name
const Customer = mongoose.model('Loan', customerSchema);

module.exports = Customer;
