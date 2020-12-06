module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false, 
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  
    return User;
};