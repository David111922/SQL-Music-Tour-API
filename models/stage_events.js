'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_events.init({
    stage_events_id_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_events',
    timestamps: false
  })

  return Stage_events;
};