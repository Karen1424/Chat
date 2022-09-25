const Joi = require('joi');

const registerSchema = Joi.object({
    
    firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    age: Joi.number()
    .min(3)
    .max(100)
    .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),    
});

const loginSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')), 
});

class Validation {

    async registerValidation(params) {

        try {
            const value = await registerSchema.validateAsync(params);
            return value;
        }
        catch (err) { 
            throw new Error(err.message);
        }
    };
    
    async loginValidation(params) {
    
        try {
            const value = await loginSchema.validateAsync(params);
            return value;
        }
        catch (err) { 
            throw new Error(err.message);
        }
    };
}

module.exports = new Validation();