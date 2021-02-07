import * as mongoose from 'mongoose';
import {isEmail} from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    //@ts-ignore
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};
//
// userSchema.post('save', function (doc, next) {
//     console.log(doc, 'user was saved');
//     next();
// })

const User =  mongoose.model('user', userSchema);

export default User;