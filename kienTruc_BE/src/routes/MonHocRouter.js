const express = require('express');
const routes = express.Router();
const monHocController = require('../controllers/MonHocController');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');

// tạo môn học
//[POST] http://localhost:3001/api/monhoc/createSubject
routes.post('/createSubject', monHocController.createSubject);

// lấy danh sách môn học
//[GET] http://localhost:3001/api/monhoc/getListSubject
routes.get('/getListSubject', monHocController.getListSubject);



module.exports = routes;
