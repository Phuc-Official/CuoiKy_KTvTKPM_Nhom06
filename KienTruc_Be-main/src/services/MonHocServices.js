const MonHoc = require('../models/MonHoc');
// createSubject
const createSubject = (newSubject) => {
    return new Promise(async (resolve, reject) => {
        const { maHP, tenMonHoc, TC,namHoc, obligatory, Prerequisites } = newSubject;

        try {
            const checkSubject = await MonHoc.findOne({
                maHP: maHP,
            });
            if (checkSubject !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'Subject already exists',
                });
            }
            const createSubject = await MonHoc.create({
                maHP,
                tenMonHoc,
                namHoc,
                TC,
                obligatory,
                Prerequisites,
            });
            if (createSubject) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createSubject,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// show list mon hoc
const getListSubject = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const listSubject = await MonHoc.find({});
            if (listSubject) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listSubject,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
   

module.exports = {
    createSubject,
    getListSubject
};
