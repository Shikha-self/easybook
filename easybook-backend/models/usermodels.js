module.exports = (sequelize ,DataTypes) => {
    const User = sequelize.define("users",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },

        }
    );
      // Add a hook to capitalize the first letter of the name before saving
      User.beforeSave((user, options) => {
        user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    });
    return User;

}