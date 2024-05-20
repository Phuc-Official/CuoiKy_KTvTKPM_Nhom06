import mongoose from "mongoose";

const diemSchema = new mongoose.Schema(
    {
        maSV: {
        type: String,
        required: true,
        trim: true,
        },
        maLopHocPhan: {
        type: String,
        required: true,
        trim: true,
        },
        diemLT: {
        type: String,
        required: true,
        },
        diemTH: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
    );

const Diem = mongoose.model('Diem', diemSchema);
module.exports = Diem;