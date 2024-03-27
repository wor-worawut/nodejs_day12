module.exports = (sequelize, DataType) => {
    const Company = sequelize.define("company", {
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
    return Company;
};