const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {

    var last_research = "";
     
    if (req.signedCookies.last_research){
        var last_research = req.signedCookies.last_research;
    }

    res.render('home', {research: last_research,});
});


router.get('/about',  (req, res) => {
    res.render('about');
});

module.exports = router;