const UserServices = require('../services/StudentService');

const createUser = async(req, res) => {
    try {
        console.log("r",req.body);
        const { maSV, tenSV, gioiTinh, ngaySinh, noiSinh, lop, nganh, khoaHoc, bacDaoTao, loaiHinhDaoTao,password } = req.body;
        if (!maSV || !tenSV || !gioiTinh || !ngaySinh || !noiSinh || !lop || !nganh || !khoaHoc || !bacDaoTao || !loaiHinhDaoTao|| !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await UserServices.createUser(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

const loginUser = async(req, res) => {
    try {
        const { maSV, password } = req.body;
        if (!maSV || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await UserServices.loginUser(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

const getSVbyMaSV = async (req, res) => {
    try {
    //   console.log("req.body: dsf fd", req.body);  // Log body của request
      const maSV = req.params.id;
      if (!maSV) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The input is required',
        });
      } else {
        const response = await UserServices.getSVbyMaSV(maSV);
        return res.status(200).json(response);
      }
    } catch (e) {
      return res.status(404).json({
        message: e.message,
      });
    }
  };
  

module.exports = {
    createUser,
    loginUser,
    getSVbyMaSV,
};