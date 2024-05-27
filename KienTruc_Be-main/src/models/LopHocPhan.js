const mongoose = require('mongoose');

const lophocphanSchema = new mongoose.Schema(
    {
        maLopHocPhan: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        tenLopHocPhan: {
            type: String,
            required: true,
            trim: true,
        },
        tenMonHoc: {
            type: String,
            default: '',
            trim: true,
        },
        maMonHoc: {
            type: String,
            required: true,
            trim: true,
        },
        soLuongSV: {
            type: Number,
            default: 0,
        },
        soTiet: {
            type: Number,
            default: 0,

        },
        soLuongDaDangKy: {
            type: Number,
            required: true,
        },
        soLuongConLai: {
            type: Number,
            required: true,
            default: 0,
        },
        tinhTrang: {
            type: String,
            default: 'Chưa bắt đầu',
            
        },
        hocKy: {
            type: String,
            required: true,
        },
        namHoc: {
            type: String,
            required: true,
        },
        ngayBatDau: {
            type: String,
            required: true,
        },
        ngayKetThuc: {
            type: String,
            required: true,
        },
        tietHoc: {
            type: String,
            required: true,
        },
        giangVien: {
            type: String,
            required: true,
        },
        phongHoc: {
            type: String,
            required: true,
        },
        soTC: {
            type: Number,
            required: true,
        },
        thu: {
            type: [],
            default: [],
        },
        danhSachSinhVien: {
            type: [],
            default: [],
        },
        dayOfWeek: {
            type: String,
            default: "",
        },
       
    },
    { timestamps: true },
);
const LopHocPhan = mongoose.model('LopHocPhan', lophocphanSchema);
module.exports = LopHocPhan;