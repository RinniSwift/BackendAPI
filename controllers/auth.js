module.exports = app => {

    // GET route to signup page
    app.get('/sign-up', (req, res) => {
        res.render('./sign-up');
    })

};
