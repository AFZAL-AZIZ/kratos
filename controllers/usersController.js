const User = require("./../models/userModel");

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users: users,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
}

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                NewUser: newUser,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Please enter valid data",
        });
    }
}

function getUser(req, res) {
    res.json({ status: "success" });
}

function updateUser(req, res) {
    res.json({ status: "success" });
}

function deleteUser(req, res) {
    res.json({ status: "success" });
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
