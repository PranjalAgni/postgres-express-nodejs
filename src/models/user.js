const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    pkUserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "pk_user_id",
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER
    }
  });

  User.associate = () => {};

  return User;
};

module.exports = user;
