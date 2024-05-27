const mongoose = require('mongoose');

const monhocSchema = new mongoose.Schema(
    {
        maHP: {
            type: String,
            required: true,
            trim: true,
        },
        tenMonHoc: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        TC: {
            type: String,
            required: true,
        },
        namHoc: {
            type: String,
            default: '',
        },
        // bắt buộc
        obligatory: {
            type: Boolean,
            default: false,
        },
        Prerequisites:{
            type: String,
            default: null,
        }
      
    },
    { timestamps: true },
);

const MonHoc = mongoose.model('MonHoc', monhocSchema);

module.exports = MonHoc;
