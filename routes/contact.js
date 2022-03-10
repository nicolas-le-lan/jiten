const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
    res.render('contact');
});

router.post('/', (req, res) => {
    console.log("Data sent via post");
    res.redirect('/contact/send')
})

router.get('/send',  (req, res) => {
    res.render('formsent');
});

module.exports = router;