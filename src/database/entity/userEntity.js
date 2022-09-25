/// Standard requires
const userSchema = require('typeorm').EntitySchema;
/// Local requires 
const userModel = require('../model/userModel');

module.exports = new userSchema({
    tableName: 'Users',
    target: userModel,
    columns: {
        id: {
            primary: true,
            name: 'id',
            type: 'int',
            generated: true,
            unique: true,
        },

        firstName: {
            name: 'first_name',
            type: 'varchar'
        },

        lastName: {
            name: 'last_name',
            type: 'varchar'
        },

        age: {
            name: 'age',
            type: 'int'
        },

        email: {
            name: 'email',
            type: 'varchar',
            unique: true
        },

        password: {
            name: 'password',
            type: 'varchar',
            unique: true
        }
    }
});