import mongoose from "mongoose";

const adviceSchema = new mongoose.Schema({
    advice: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

adviceSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export const Advice = mongoose.model('Advice', adviceSchema);
