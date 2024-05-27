const MonHoc = require('./MonHocRouter');
const LopHocPhan = require('./LopHocPhanRouter')
const User = require('./StudentRouter');
const Diem = require('./DiemRouter');

const routes = (app) => {
    app.use('/api/monhoc', MonHoc);
    app.use('/api/lophocphan', LopHocPhan);
    app.use('/api/user', User);
    app.use('/api/diem', Diem);
};

module.exports = routes;
