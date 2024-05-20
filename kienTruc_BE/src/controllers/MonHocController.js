const MonHocService = require('../services/MonHocServices');
const JwtService = require('../services/JwtService');


// createSubject
const createSubject = async(req, res) => {
    try {
        const { maHP, tenMonHoc, TC, obligatory, Prerequisites } = req.body;
        if (!maHP || !tenMonHoc || !TC) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await MonHocService.createSubject(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}
// show list mon hoc
const getListSubject = async(req, res) => {
    try {
       
        const response = await MonHocService.getListSubject();
        
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

module.exports = {
    createSubject,
    getListSubject
};
