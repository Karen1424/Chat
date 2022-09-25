/// Standard requires
const userSchema = require('typeorm').EntitySchema;
/// Local requires 
const messagesModel = require('../model/messageModel');

module.exports = new userSchema({
    tableName: 'Messages',
    target: messagesModel,
    columns: {
        id: {
            primary: true,
            name: 'id',
            type: 'int',
            generated: true,
            unique: true,
        },

        message: {
            name: 'message',
            type: 'text'
        }
    }
});