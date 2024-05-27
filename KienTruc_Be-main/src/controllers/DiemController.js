const diemService = require('../services/DiemServices');

const createDiem = async(req, res) => {
    try {
        const { maSV, maLopHocPhan, tenMonHoc, soTC,diemLT, diemTH, diemGK, diemCK, diemTongKet, diem4, diemChu, xepLoai, dat } = req.body;
        if (!maSV || !maLopHocPhan || !soTC || !tenMonHoc || !diemLT || !diemTH || !diemGK || !diemCK || !diemTongKet || !diem4 || !diemChu || !xepLoai ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await diemService.createDiem(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

const getDiemByMaSV = async(req, res) => {
    try {
        const { maSV } = req.params;
        if (!maSV) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await diemService.getDiemByMaSV(maSV);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

module.exports = {
    createDiem,
    getDiemByMaSV,
}