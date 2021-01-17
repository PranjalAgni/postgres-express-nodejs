const notes = (sequelize, DataTypes) => {
  const Notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Notes.associate = (models) => {
    Notes.belongsTo(models.User);
  };

  return Notes;
};

module.exports = notes;
