const User = require('../models/User');
const { generateToken } = require('../config/utils');

module.exports = {
    //index, show, store, update, destroy

    async index(req, res) {
        const { page = 1 } = req.query;
        const users = await User.find({});

        return res.send({ users });
    },

    async show(req, res) {
        const user = await User.findById(req.params.id);
        user.password = undefined;

        return res.json({ user });
    },

    async store(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res.status(400).json({ error: 'User already exists.' });

        const user = await User.create(req.body);

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    },

    async update(req, res) {
        const { id, name, email, password } = req.body;

        if (!await User.findOne({ id })) {
            res.status(400).json({ error: 'User not exists' })
            return;
        }
        
        const user = await User.findOneAndUpdate(id, { name, email, password, updateAt: Date.now() },{ new: true});
        user.password = undefined;
        res.send({
            user,
            token: generateToken({ id: user.id })
        });
    },

    async destroy(req, res) {
        await User.findOneAndDelete(req.params.id);
        return res.send({ user });
    }
};

