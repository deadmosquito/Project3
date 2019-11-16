module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    email: {
      type: DataTypes.STRING
    },
    githubId: {
      type: DataTypes.STRING
    },
    githubURL: {
      type: DataTypes.STRING
    },
    hash: {
      type: DataTypes.STRING
    },
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    profileURL: {
      type: DataTypes.STRING
    }
  });
  Author.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Author;
};