const { Model, Datatypes } = require('sequelize');
const { Vehicle } = require('.');
const sequelize = require('../config/connection');

class Vehicle extends Model {


}

Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        vehicleMake: {
            type: Datatypes.STRING,
            allowNull: false
        },
        vehicleModel: {
            type: Datatypes.STRING,
            allowNull: false
        },
        vehicleYear: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        renter_id: {
            type: Datatypes.INTEGER,
            refernces: {
                model: 'renter',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vehicle'
    }
);

module.exports = Vehicle;