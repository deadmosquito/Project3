module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    },
    sid:{
      type: DataTypes.STRING
    },
    likes:{
      type: DataTypes.INTEGER
    }

  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: true
      }
    });

    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Post;
};
