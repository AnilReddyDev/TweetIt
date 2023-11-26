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
        },
        userimg:{
            type:String,
            default:"https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
        }
    }
)

module.exports = mongoose.model("User", userSchema);