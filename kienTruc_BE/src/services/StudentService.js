const Student = require('../models/Student');
const bcrypt = require('bcrypt');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { maSV, tenSV, gioiTinh, ngaySinh, noiSinh, lop, nganh, khoaHoc, bacDaoTao, loaiHinhDaoTao, password } = newUser;

        try {
            const hash = bcrypt.hashSync(password, 10);
            const checkUser = await Student.findOne({
                maSV: maSV,
            });
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'User already exists',
                });
            }
            const createUser = await Student.create({
                maSV,
                tenSV,
                gioiTinh,
                ngaySinh,
                noiSinh,
                lop,
                nganh,
                khoaHoc,
                bacDaoTao,
                loaiHinhDaoTao,
                password: hash,
            });
            if (createUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

const loginUser = (user) => {
    return new Promise(async (resolve, reject) => {
        const { maSV, password } = user;
        try {
            const checkUser = await Student.findOne({
                maSV: maSV,
            });
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'User not found',
                });
            }
            const checkPassword = bcrypt.compareSync(password, checkUser.password);
            if (checkPassword) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: checkUser,
                });
            } else {
                resolve({
                    status: 'ERR',
                    message: 'Password is incorrect',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

const getSVbyMaSV = (maSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await Student.findOne({
                maSV: maSV,
            });
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'User not found',
                });
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user,
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser,
    loginUser,
    getSVbyMaSV,
};