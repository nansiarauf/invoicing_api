const Client = required("../models/clientSchema");
const { clientValidation } = require("../utils/clientValidation");

//ADD NEW CLIENT CONTROLLER
const addClient = async (req, res) => {
  //VALIDATE CLIENT INFO
  const { error } = clientValidation.validate(req.body);
  if (error) return res.send(error.details[0].message);

  //CHECKING EMAIL AND BUSINESS NAME
  const emailFound = await Client.findOne({ email: req.body.email });
  if (emailFound) return res.send("Email already exist");

  const businessName = await Client.findOne({
    businessName: req.body.businessName,
  });
  if (businessName) return res.send("Business already exist");

  //CREATING NEW CLIENT
  const newClient = new Client({
    businessName: req.body.businessName,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  await newClient.save();
  res.status(201).json(newClient);
};

//VIEW ALL CLIENTS
const getAllClients = async (req, res) => {};

//GET A CLIENT BY NAME/ID
const getOneClient = async (req, res) => {};

//DELETING A CLIENT
const deleteClient = async (req, res) => {};
module.exports = { addClient };
