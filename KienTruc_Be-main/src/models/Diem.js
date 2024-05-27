const mongoose = require('mongoose');

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
        tenMonHoc: {
            type: String,
            required: true,
            trim: true,
        },
        soTC: {
            type: Number,
            required: true,
        },
        diemLT: {
            type: [],
            required: true,
        },
        diemTH: {
            type: [],
            required: true,
        },
        diemGK: {
            type: Number,
            required: true,
        },
        diemCK: {
            type: Number,
            required: true,
        },  
        diemTongKet: {
            type: Number,
            required: true,
        },
        diem4: {
            type: Number,
            required: true,
        },
        diemChu: {
            type: String,
            required: true,
        },
        xepLoai: {
            type: String,
            required: true,
        },
        dat: {
            type: Boolean,
            required: true,
        },
        
    },
    { timestamps: true }
    );

const Diem = mongoose.model('Diem', diemSchema);

module.exports = Diem;