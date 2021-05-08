const bcrypt = require('bcrypt');
const generateToken = require('../utils');
const { User} = require('../models/userModel')

const register = async (req, res, next) => {
    try {
            if(!req.body.password) {
                return res.status(400).send({
                    error: true,
                    message: 'Passwords is requred.'
                });
            }
            if(req.body.password !== req.body.confirmation_password)  {
                return res.status(400).send({
                    error: true,
                    message: 'Bad request. Passwords do not match.'
                });
            }
    
            const user = await User.findOne({ email: req.body.email});
            if(user) {
                return res.status(400).send({
                    error: true,
                    message: 'Bad request. User exists with the provided email.'
                });
            }

            const salt = await bcrypt.genSalt(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);

            await User.create(req.body);

            res.status(201).send({
              error: false,
              message: 'You are now registered and can log in'
            });
            res.redirect('/users/login');
        } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
    await next;
};

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.status(201).send({
                    error: false,
                    message: 'JWT successfully generated',
                    token: generateToken(user)
                });
                return;
            }
        } else {
            res.status(401).send({
                error: true,
                message: 'Invalid email or password'
            })
        }
    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
    await next;
};


module.exports = {
    register,
    login
};


