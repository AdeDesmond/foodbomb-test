import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is a required field"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "name is a required field"],
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: [true, "name is a required field"],
    minlength: 5,
  },
  image: {
    type: String,
  },
});

const Account =
  mongoose.models?.Account || mongoose.model("Account", accountSchema);

export { Account };
