const mongoose = require('mongoose');
const User = mongoose.model("User");

// une libraire pour tester le format des email
const emailValidator = require('email-validator');

// bcrypt, pour HASHER les mots de passer
const bcrypt = require('bcryptjs');

// jsonwebtoken, creer et verifier le token
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/keys');

const authController = {

    homePage: (req, res) => {
        res.send('hello');
    },

    signupAction: (req, res) => {
        const { pseudo, email, password, bio, pic } = req.body

        if (!email || !password || !pseudo) {
            return res.status(422).json({ error: "Les champs pseudo, email et password ne peuvent pas etre vide Merci" })
        }

        if (!emailValidator.validate(email)) {
            return res.status(422).json({ error: "L'email n'est pas un email correct" })
        }

        if (password.length < 6) {
            return res.status(422).json({ error: "Le mot de passe doit contenir un minimum de 6 caractères Merci" })
        }

        User.findOne({ email: email })
            .then((userFind) => {
                if (userFind) {
                    return res.status(422).json({ error: "Email déjà utilisée !" })
                }
                bcrypt.hash(password, 12)
                    .then(passwordHashed => {
                        const user = new User({
                            email,
                            password: passwordHashed,
                            pseudo,
                            bio,
                            pic
                        })

                        user.save()
                            .then(user => {
                                // transporter.sendMail({
                                //     to:user.email,
                                //     from:"no-reply@insta.com",
                                //     subject:"signup success",
                                //     html:"<h1>welcome to instagram</h1>"
                                // })
                                res.json({ message: "Inscription avec succés" })
                            })
                            .catch(err => {
                                return res.status(422).json({ error: "Ce pseudo est déjà utilisé !" })
                            })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    },

    signinAction: (req, res) => {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(422).json({ error: "Veuiller remplir email et password Merci" })
        }
        User.findOne({ email: email })
            .then(userFind => {
                if (!userFind) {
                    return res.status(422).json({ error: "email ou password incorrect" })
                }
                bcrypt.compare(password, userFind.password)
                    .then(passwordMatch => {
                        if (passwordMatch) {
                            const token = jwt.sign({ _id: userFind._id }, JWT_SECRET)
                            const { _id, pseudo, email, bio, followers, following, pic } = userFind
                            res.json({ token, user: { _id, pseudo, email, bio, followers, following, pic } })
                        }
                        else {
                            return res.status(422).json({ error: "Invalide email ou password !" })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    },

    // logout: (req, res) => {}
};


module.exports = authController;



