module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        picture: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
        pictureDescription: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  
    return Post;
};