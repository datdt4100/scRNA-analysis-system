class Clustering {
    index(req, res) {
        res.render('clustering', {layout: 'main.hbs'}); // trả về view/dangnhap với layout là login_layout
    }
}

module.exports = new Clustering;