const express = require('express');
const routes = express.Router();
const diemController = require('../controllers/DiemController');
// tạo điểm
//[POST] http://localhost:3001/api/diem/createDiem
// {
//     "maSV": "20000002",
//     "maLopHocPhan":"LHP01",
//     "tenMonHoc": "Mạng máy tính",
//     "soTC": 3,
//     "diemLT": [8,8,8,8],
//     "diemTH":[8,8,8],
//     "diemGK": 8,
//     "diemCK": 8,  
//     "diemTongKet": 8,
//     "diem4": 3.5,
//     "diemChu": "B+",
//     "xepLoai":"Giỏi",
//     "dat": true
    
// }
routes.post('/createDiem', diemController.createDiem);

// xuất điểm bởi mã sinh viên
//[GET] http://localhost:3001/api/diem/getDiemByMaSV/20000002
routes.get('/getDiemByMaSV/:maSV', diemController.getDiemByMaSV);

module.exports = routes;