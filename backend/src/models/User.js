const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        timestamp: true,
    },
    updateAt: {
        type: Date,
        default: Date.now,
        timestamp: true,
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

UserSchema.plugin(mongoosePaginate);
module.exports = model('User', UserSchema);
