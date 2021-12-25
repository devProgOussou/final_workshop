const User = require('../models/user.models');

module.exports.addUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const user = await User.create({
            firstname,
            lastname,
            email,
            password
        })
        res.status(201).json({
            message: 'User created',
            user
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'Users fetched',
            users
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}

module.exports.getUser = async (req, res) => {
    const { id } = req.params.id;

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            message: 'User fetched',
            user
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}

module.exports.updateUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const user = await User.findByIdAndUpdate({
        _id: req.params.id
    }, {
        firstname,
        lastname,
        email,
        password
    })
    res.status(200).json({
        message: 'User updated',
        user
    })
}

module.exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete({
        _id: req.params.id
    })
    res.status(200).json({
        message: 'User deleted'
    })
}