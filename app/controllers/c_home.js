class Home {
    index(req, res) {
        res.render('home', {layout: 'main.hbs'});
    }

}

module.exports = new Home;