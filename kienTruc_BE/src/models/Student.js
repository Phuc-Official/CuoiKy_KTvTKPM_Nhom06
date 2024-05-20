const mongoose = require('mongoose');

const sinhVienSchema = new mongoose.Schema(
    {
        maSV: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        tenSV: {
            type: String,
            required: true,
            trim: true,
        },
        gioiTinh: {
            type: String,
            required: true,
        },
        ngaySinh: {
            type: String,
            required: true,
        },
        noiSinh: {
            type: String,
            required: true,
        },
        lop: {
            type: String,
            required: true,
        },
        nganh:{
            type: String,
            required: true,
        },
        khoaHoc:{
            type: String,
            required: true,
        },
        bacDaoTao:{
            type: String,
            required: true,
        }, 
        loaiHinhDaoTao:{
            type: String,
            required: true,
        },    
        password: {
            type: String,
            required: true,
        },   
    },
    { timestamps: true },
)
const Student = mongoose.model('Student', sinhVienSchema);

module.exports = Student;