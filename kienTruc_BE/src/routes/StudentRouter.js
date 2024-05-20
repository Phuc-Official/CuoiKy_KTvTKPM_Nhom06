const express = require('express');
const routes = express.Router();
const userController = require('../controllers/StudentController');
// tạo user
//[POST] http://localhost:3001/api/user/createUser
// {
//     "maSV":"2000001", "tenSV":"Nguyễn Thành An", 
//     "gioiTinh":"Nam", "ngaySinh":"02/02/2002", 
//     "noiSinh":"Bệnh viện Vĩnh Long", "lop":"DHKTPM16A", 
//     "nganh":"Kĩ thuật phần mềm", "khoaHoc":"2020-2021", 
//     "bacDaoTao":"Đại học", "loaiHinhDaoTao":"Chính quy",
//     "password":"20000001"
// }
routes.post('/createUser', userController.createUser);
//[POST] http://localhost:3001/api/user/loginUser
// {
//     "maSV":"20000001",
//     "password":"20000001"
//   }
routes.post('/loginUser', userController.loginUser);

//[GET] http://localhost:3001/api/user/getSVbyMaSV
routes.get('/getSVbyMaSV/:id', userController.getSVbyMaSV);

module.exports = routes;