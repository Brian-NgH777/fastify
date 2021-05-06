const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String, 
    password: String,
    email: String,
    userType: {
        type: String,
        enum : ['user','tutor'],
        default: 'user'
    },
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs:  Number
    // }
});
// module.exports = mongoose.model('User', UserSchema)
mongoose.model('User', UserSchema)