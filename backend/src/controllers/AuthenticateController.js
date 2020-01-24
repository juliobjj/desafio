const User = require('../models/User');
const bcrypt = require('bcryptjs');

const { generateToken } = require('../config/utils');

module.exports = {

    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id }) });
    }
}