module.exports = (sequelize, DataType) => {
    const Project = sequelize.define("project", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return Project;
};