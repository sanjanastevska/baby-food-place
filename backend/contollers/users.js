const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');
const config = require('../config/index');
const { generateToken } = require('../utils');
const { User} = require('../models/userModel');

const mg = mailgun({
    domain: config.get('mailer').domain,
    apiKey: config.get('mailer').api_key
});

const register = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        confirmation_password
    } = req.body;

    try {
            if(!password) {
                return res.status(400).send({
                    error: true,
                    message: 'Passwords is requred.'
                });
            }
            if(password !== confirmation_password)  {
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

            const token = jwt.sign({email, password}, config.get('mailer').jwt_key_activate, { expiresIn: '30d' });

            const data = {
                from: config.get('mailer').from,
                to: email,
                subject: 'Account Activation Link',
                html: `<h1>Hello ${firstName} ${lastName}</h1>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href=${config.get('mailer').client_API}/confirm/${token}> Click here</a>`
            };

            mg.messages().send(data, ((err, body) => {
                if(err) {
                    return res.status(400).send({
                        error: true,
                        message: err.message
                    });
                }
                return res.status(200).send({
                    error: false,
                    message: 'Activate your account, please check your email.',
                    token: token
                })
            }));
        } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
    await next;
};

const activateAccount = async (req, res, next) => {
    const token = req.body.token;
    const user = await User.findOne({ email: req.body.email});

    if(token) {
        jwt.verify(token, config.get('mailer').jwt_key_activate, async (err) => {
            if(err) {
                return res.status(400).send({
                    error: true,
                    message: 'Inccorect or expired link'
                });
            }
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
        })
    } else{
        res.status(500).send({
            error: true,
            message: 'You need to activate your account in order to procceed with registration!'
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
                    message: 'You are logged in. JWT successfully generated',
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

const update = async(req, res, next) => {
    try {
        await User.findByIdAndUpdate({ _id: req.params.id}, req.body);
        res.status(200).send({
            error: false,
            message: 'User is updated!'
        });
    } catch(err) {
        res.status(404).send({
            error: true,
            message:err.message
        });
    }
    await next;
};

const del = async (req, res, next) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).send({
            error: false,
            message: `User Removed!!`
        });
    }
    catch(err) {
        res.status(404).send({
            error: true,
            message:err.message
          })
    }
    await next;
}


module.exports = {
    register,
    activateAccount ,
    login,
    // logout,
    update,
    del
};


