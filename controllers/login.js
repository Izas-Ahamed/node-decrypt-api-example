const User = require("../models/user");

const decryptor = require("../utils/password-util");

const bcrypt = require("bcryptjs");
const user = require("../models/user");

exports.doLogin = (req, res, next) => {
    const email = req.body.email;

    const password = decryptor.decrypt(req.body.password);

    let loadedUser;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ message: "Email not found" });
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then((isEqual) => {
            if (!isEqual) {
                return res.status(401).json({ message: "Invalid Password" });
            }
            return res.status(200).json({
                message: "Login Success",
                name: loadedUser.name,
            });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Server Error" });
        });
};
