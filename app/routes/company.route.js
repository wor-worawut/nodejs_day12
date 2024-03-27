module.exports = (app) => {
    const company = require('../controllers/company.controller');

    const router = require('express').Router();

    router.get("/", company.findAll);

    app.use("/companies", router);
};