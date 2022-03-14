const savingAccountSchema = new mongoose.Schema({

    account_number  : { type: String, require: true },
    balance  : { type: String },
    interestRate  : { type: String, require: true },
    startDate  : { type: Number, require: true },
    maturityDate : { type: String, require: true },
},{
    versionKey:false,
    timestamps:true,
});

const savingAccount = mongoose.model("fix_account",savingAccountSchema)
module.export = savingAccount;