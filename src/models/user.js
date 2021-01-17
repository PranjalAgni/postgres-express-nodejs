const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Notes);
    // User.belongsTo(models.Notes, { as: 'PinnedNote', constraints: false });
  };

  return User;
};

module.exports = user;
