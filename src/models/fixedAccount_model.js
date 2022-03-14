const fixedAccountSchema = new mongoose.Schema({

    account_number  : { type: String, require: true },
    balance  : { type: String },
    interestRate  : { type: String, require: true },
    startDate  : { type: Number, require: true },
    maturityDate : { type: String, require: true },
},{
    versionKey:false,
    timestamps:true,
});

const fixedAccount = mongoose.model("fix_account",fixedAccountSchema)
module.export = fixedAccount;