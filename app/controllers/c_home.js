class Home {
    index(req, res) {
        res.render('home', {layout: 'main.hbs'}); // trả về view/dangnhap với layout là login_layout
    }
}

module.exports = new Home;