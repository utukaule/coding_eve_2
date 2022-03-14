const { default: mongoose } = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/User",{useNewUrlParser:true})

const userSchema = new mongoose.Schema({

    firstName: { type: String, require: true },
    middleName: { type: String },
    lastName: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    gender: { type: String, require: true, default:"female" },
    type: { type: String, require: true, default: "cumstomer"},


},{
    versionKey:false,
    timestamps:true,
});

const User = mongoose.model("user",userSchema)
module.export = User;