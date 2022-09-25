//Local requires
const userModel = require('../database/model/userModel');
const typeorm = require('../database/typeorm');
const Hashing = require('../database/util/hashingPassword');

class userService {

    async createUser(params)  {

        params.password = Hashing.hashingPassword(params.password);
        const result = await typeorm.connection
        .createQueryBuilder()
        .insert()
        .into(userModel)
        .values(params)
        .execute();
    
        if (! result) {
            throw new Error('Error: The operation was not performed');
        }
        return params.password;
    };

    async deleteUser(id) {

        const result = await typeorm.connection
        .createQueryBuilder()
        .delete()
        .from(userModel)
        .where('id = :id', { id: id })
        .execute();

        if (! result) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: 'User is deleted' };
    }

    async selectUser(email, password) {
        
        const result = await typeorm.connection
        .createQueryBuilder()
        .select()
        .from(userModel)
        .where('email = :email', { email })
        .execute();
        const accsessToken = Hashing.hashingPassword(password);
        
        if (result[0].password !== accsessToken) {
            throw new Error('Error: The operation was not performed');
        } else {
            return  {
                accsessToken: accsessToken, 
                id: result[0].id
            };
        }
    }
};

module.exports = new userService();