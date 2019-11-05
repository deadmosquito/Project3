module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
