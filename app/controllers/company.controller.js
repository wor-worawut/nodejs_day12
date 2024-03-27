const db = require("../models");
const Employee = db.employee;
const Company = db.company;

exports.findAll = (req, res) => {
  Company.findAll({
    include: [
        {
            model: Employee,
            attributes: ["name", "position"]
        }
    ]
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
