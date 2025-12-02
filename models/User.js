const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const userSchema = new Schema({
    name :{type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true} 
}, {timestamps: true});

//Pre-save hook
userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        return next();
    }
    try {
        //A salt is generated here
        const salt = await bcrypt.genSalt(10);


        //password hashed
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

//login method: to compare with hased password.
userSchema.methods.matchPassword = async function(enteredPassword){
    //compare plain text with hashed password in db.
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);