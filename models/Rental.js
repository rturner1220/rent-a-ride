
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Rental extends Model { }

Rental.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: { isDecimal: true }
        },
        renter_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Renter',
                key: 'id'
            }
        },
        vehicle_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Vehicle',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Rental;