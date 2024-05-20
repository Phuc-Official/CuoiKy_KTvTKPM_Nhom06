const LopHocPhan = require('../models/LopHocPhan');

// createLopHocPhan
const createLopHocPhan = (newLopHocPhan) => {
    return new Promise(async (resolve, reject) => {
        const { maLopHocPhan, tenLopHocPhan,tenMonHoc, maMonHoc, soTC, soTiet, soTuan, soLuongSV, soLuongDaDangKy, soLuongConLai, tinhTrang, hocKy, namHoc, ngayBatDau, ngayKetThuc, tietHoc, giangVien, phongHoc, danhSachSinhVien,dayOfWeek } = newLopHocPhan;

        try {
            const checkLopHocPhan = await LopHocPhan.findOne({
                maLopHocPhan: maLopHocPhan,
            });
            if (checkLopHocPhan !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'LopHocPhan already exists',
                });
            }
            const createLopHocPhan = await LopHocPhan.create({
                maLopHocPhan,
                tenLopHocPhan,
                tenMonHoc,
                maMonHoc,
                soTC,
                soTiet,
                soLuongSV,
                soLuongDaDangKy,
                tinhTrang,
                hocKy,
                namHoc,
                ngayBatDau,
                ngayKetThuc,
                tietHoc,
                giangVien,
                phongHoc,
                danhSachSinhVien,
                dayOfWeek,
            });
            if (createLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// show list LopHocPhan
const getListLopHocPhan = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const listLopHocPhan = await LopHocPhan.find();
            if (listLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// show list LopHocPhan by maMonHoc
const getListLopHocPhanByMaMonHoc = (maMonHoc) => {
    return new Promise(async (resolve, reject) => {
        try {
            const listLopHocPhan = await LopHocPhan.find({
                maMonHoc: maMonHoc,
            });
            if (listLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// thêm maSv vao danh sách sinh viên đã đăng ký
const addSinhVien = (newSinhVien) => {  
    return new Promise(async (resolve, reject) => {
        const { maLopHocPhan, maSV } = newSinhVien;

        try {
            const checkLopHocPhan = await LopHocPhan.findOne({
                maLopHocPhan: maLopHocPhan,
            });
            if (checkLopHocPhan === null) {
                resolve({
                    status: 'ERR',
                    massage: 'LopHocPhan not exists',
                });
            }
            const addSinhVien = await LopHocPhan.updateOne({
                maLopHocPhan: maLopHocPhan,
            }, {
                $push: {
                    danhSachSinhVien: maSV,
                },
            });
            if (addSinhVien) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: addSinhVien,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}//
 // list lhp theo mã sv
 const getListLopHocPhanByMaSV = (maSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            const listLopHocPhan = await LopHocPhan.find({
                danhSachSinhVien: maSV,
            });
          
            if (listLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listLopHocPhan,
                });
            }
            console.log("ạdflksdjfl",listLopHocPhan);
        } catch (e) {
            reject(e);
        }
    });
}
// xóa mã sv vào danh sách sinh viên đã đăng ký
const deleteSinhVien = (newSinhVien) => {
    return new Promise(async (resolve, reject) => {
        const { maLopHocPhan, maSV } = newSinhVien;

        try {
            const checkLopHocPhan = await LopHocPhan.findOne({
                maLopHocPhan: maLopHocPhan,
            });
            if (checkLopHocPhan === null) {
                resolve({
                    status: 'ERR',
                    massage: 'LopHocPhan not exists',
                });
            }
            const deleteSinhVien = await LopHocPhan.updateOne({
                maLopHocPhan: maLopHocPhan,
            }, {
                $pull: {
                    danhSachSinhVien: maSV,
                },
            });
            if (deleteSinhVien) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: deleteSinhVien,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    createLopHocPhan,
    getListLopHocPhan,
    getListLopHocPhanByMaMonHoc,
    addSinhVien,
    getListLopHocPhanByMaSV,
    deleteSinhVien,
};