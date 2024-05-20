const MonHoc = require('./MonHocRouter');
const LopHocPhan = require('./LopHocPhanRouter')
const User = require('./StudentRouter');
const routes = (app) => {
    app.use('/api/monhoc', MonHoc);
    app.use('/api/lophocphan', LopHocPhan);
    app.use('/api/user', User);
};

module.exports = routes;
