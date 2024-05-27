const Diem = require('../models/Diem.js');
// createDiem
const createDiem = (newDiem) => {
    return new Promise(async (resolve, reject) => {
        const { maSV, maLopHocPhan, tenMonHoc,soTC ,diemLT, diemTH, diemGK, diemCK, diemTongKet, diem4, diemChu, xepLoai, dat } = newDiem;

        try {
            const checkDiem = await Diem.findOne({
                maSV: maSV,
                maLopHocPhan: maLopHocPhan,
            });
            if (checkDiem !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'Diem already exists',
                });
            }
            const createDiem = await Diem.create({
                maSV,
                maLopHocPhan,
                tenMonHoc,
                soTC,
                diemLT,
                diemTH,
                diemGK,
                diemCK,
                diemTongKet,
                diem4,
                diemChu,
                xepLoai,
                dat,
            });
            if (createDiem) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createDiem,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

// xuất điểm bởi mã sinh viên
const getDiemByMaSV = (maSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            const diem = await Diem.find({ maSV: maSV });
            if (diem) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: diem,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createDiem,
    getDiemByMaSV,
}