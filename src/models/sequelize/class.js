module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("Class", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    },{
      tableName: 'Class'
    });
    return Class;
  };