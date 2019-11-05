module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        // Giving the Category model a name of type STRING
        name: DataTypes.STRING,
    });

    Category.associate = function (models) {
        // Associating Category with Posts
        // When a Category is deleted, also delete any associated Posts
        Category.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Category;
};