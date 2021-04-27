const { required, string } = require("joi");
const mongoose = require("mongoose");

//DESTRUCTURING MODEL AND SCHEMA FROM MONGOOSE
const { model, schema } = mongoose;

const invoiceSchema = new schema(
  {
    businessName: {
      type: String,
    },
    name: {
      type: string,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    amount_due: {
      type: String,
      required: true,
    },
    reminder_date: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
