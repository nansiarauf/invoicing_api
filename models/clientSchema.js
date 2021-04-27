const { string } = require("joi");
const mongoose = require("mongoose");

//DESTRUCTURING MODEL AND SCHEMA FROM MONGOOSE
const { model, schema } = mongoose;

const clientSchema = new schema(
  {
    businessName: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: string,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//CREATING A MODEL CLIENT
const Client = model("Client", clientSchema);
module.exports = Client;
