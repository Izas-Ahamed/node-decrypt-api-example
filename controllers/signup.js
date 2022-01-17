const User = require("../models/user");

const decryptor = require("../utils/password-util");

const bcrypt = require("bcryptjs");

exports.doSignUp = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = decryptor.decrypt(req.body.password);
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                return res.status(403).json({ message: "Email Already Exist" });
            }
            return bcrypt.hash(password, 12);
        })
        .then((hashedPassword) => {
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
            });
            return user.save();
        })
        .then((result) => {
            return res.status(201).json({
                message: "User Created!",
                userId: result._id.toString(),
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
