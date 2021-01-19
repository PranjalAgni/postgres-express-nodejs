const notes = (sequelize, DataTypes) => {
  const Notes = sequelize.define("notes", {
    pkNotesId: {
      type: DataTypes.INTEGER,
      field: "pk_notes_id",
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Notes.associate = (models) => {
    Notes.belongsTo(models.User, {
      foreignKey: {
        name: "fkUserId",
        allowNull: false
      }
    });
  };

  return Notes;
};

module.exports = notes;
