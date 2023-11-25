const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, 'Please enter the username']
        },
        email:{
            type:String,
            required:[true, 'Please enter the email']
        },
        password:{
            type:String,
            required:[true, 'Please enter the password']
        }
    }
)

module.exports = mongoose.model("User", userSchema);