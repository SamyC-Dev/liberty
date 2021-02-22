const mongoose = require('mongoose');
const User = mongoose.model("User")

// une libraire pour tester le format des email
const emailValidator = require('email-validator');

// bcrypt, pour HASHER les mots de passer
const bcrypt = require('bcrypt');

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
                bcrypt.hash(password, 10)
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
                                res.json({ message: "saved successfully" })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    },




    // loginAction: async (req, res) => {

    // },



    // signupAction: async (req, res) => {

    // },

    // logout: (req, res) => {

    // }

};


module.exports = authController;

// const authController = {

//     // afficher le formulaire de connexion
//     loginPage: (req, res) => {

//     },

//     // traiter le formulaire de connexion
//     loginAction: async (req, res) => {
//         try {
//             // récupérer les infos du formulaire
//             const { email, password } = req.body;
//             // const email = req.body.email;
//             // const password = req.body.password;


//             // tenter de récupérer un utilisateur via l'email fourni
//             const user = await User.findOne({
//                 where: {
//                     email: email
//                     // ici, {email} aurait été sufiisant, et équivalent
//                 }
//             });

//             // si il n'existe pas => error
//             if (!user) {
//                 return res.render('login', {
//                     error: "Cet email n'existe pas"
//                 });
//             }

//             // si il existe, on vérifie le mot de passe
//             if (!bcrypt.compareSync(password, user.password)) {
//                 // si le mdp n'est pas bon => error
//                 return res.render('login', {
//                     error: "Mauvais mot de passe"
//                 });
//             }

//             // sinon, on est tout bon => on ajoute l'utilisateur dans la session
//             req.session.user = user; // et c'est tout !
//             // et on redirige vers "/"
//             res.redirect('/');

//         } catch (error) {
//             console.trace(err);
//             res.status(500).render('500', { err });
//         }

//     },

//     // afficher le formulaire d'inscription
//     signupPage: (req, res) => {
//         res.render('signup');
//     },

//     // traiter le formulaire d'inscription => enregistrer un nouveau User
//     signupAction: async (req, res) => {
//         try {
//             // récupérer les données du formulaire
//             const data = req.body;

//             // NTUI => vérifier ques les infos sont "logiques"

//             // - vérifier que l'utilisateur n'existe pas déjà (via son email)
//             const user = await User.findOne({
//                 where: {
//                     email: data.email
//                 }
//             });

//             // on se prépare une liste vide, destinée à recevoir les erreur
//             let errorsList = [];

//             if (user) {
//                 errorsList.push('Cet email existe déjà');
//             }

//             // - nom et prénom non vide
//             if (!data.firstname) {
//                 errorsList.push("Le prénom ne peut pas être vide");
//             }
//             if (!data.lastname) {
//                 errorsList.push("Le nom ne peut pas être vide");
//             }
//             // - adresse email au bon format
//             if (!emailValidator.validate(data.email)) {
//                 errorsList.push("L'email n'est pas un email correct");
//             }

//             // - longueur minimum du mot de passe (8 caractère minimum !)
//             if (data.password.length < 8) {
//                 errorsList.push("Le mot de passe doit contenir un minimum de 8 caractères");
//             }

//             // - mot de passe = confirmation
//             if (data.password !== data['password-confirm']) {
//                 errorsList.push("Le mot de passe et la confirmation ne correspondent pas");
//             }

//             // Si on a au moins une erreur, on réaffiche le formulaire en affichant les erreurs

//             // SI TOUT VA BIEN : insérer les données dans la BDD (puis rediriger l'utilisateur )
//             // si tout va bien, errorsList est vide
//             if (errorsList.length === 0) {
//                 // on peut créer le User !
//                 const newUser = new User();
//                 newUser.firstname = data.firstname;
//                 newUser.lastname = data.lastname;
//                 newUser.email = data.email;
//                 // on HASH le mot de passe
//                 newUser.password = bcrypt.hashSync(data.password, 10);

//                 const savedUser = await newUser.save();
//                 // on récupère un utilisateur => on le met directement en session => le nouveau est déjà loggé !
//                 req.session.user = savedUser;
//                 res.redirect('/');

//             } else {
//                 res.render('signup', {
//                     errorsList
//                 });
//             }


//         } catch (error) {
//             console.trace(err);
//             res.status(500).render('500', { err });
//         }

//     },

//     //   logout: (req, res) => {
//     //     delete req.session.user;
//     //     res.redirect('/');
//     //   }

// };

