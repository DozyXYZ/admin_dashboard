import mongoose, { mongo } from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoose.Schema.Types.ObjectId],
            of: Number
        }
    },
    { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;