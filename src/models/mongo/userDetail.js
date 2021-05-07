const { Schema } = require('mongoose');

const UserDetailSchema = new Schema({
    name: String
});
// module.exports = mongoose.model('UserDetail', UserDetailSchema)
module.exports = UserDetailSchema;