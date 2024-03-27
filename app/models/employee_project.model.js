module.exports = (sequelize, DataType) => {
    const db = require("../models");
    const Employee = db.employee;
    const Project = db.project;

    const Employee_project = sequelize.define("Employee_project", {
        employeeId: {
            type: DataType.INTEGER,
            references: {
                model: Employee,
                key: 'id'
            }
        },
        projectId: {
            type: DataType.INTEGER,
            references: {
                model: Project,
                key: 'id'
            }
        }
    });
    return Employee_project;
};