import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be up to 6 characters'],
    },
}, {
    timestamps: true, // Isse, 'createdAt' aur 'updateAt' automatic ban jayega
})

const User = mongoose.model("User", userSchema);
export default User;