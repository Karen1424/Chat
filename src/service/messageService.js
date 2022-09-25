//Local requires
const messageModel = require('../database/model/messageModel');
const typeorm = require('../database/typeorm');

class messageService {

    async insert(params)  {

        const result = await typeorm.connection
        .createQueryBuilder()
        .insert()
        .into(messageModel)
        .values(params)
        .execute();
    
        if (! result) {
            throw new Error('Error: The operation was not performed');
        }
        return params.password;
    };
};

module.exports = new messageService();