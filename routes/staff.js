const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('listing', {personlist: data} )
});

router.get('/addnew', (req, res) =>
    res.render('personform')
)

router.get('/personadded', (req, res) =>
    res.render('personadded')
)

router.post('/addnew', (req, res) => {
    console.log("Data sent via post");
    console.table(req.body);
    res.redirect(303, 'personadded',)
})

router.get('/:name', (req,res) =>{
    var name = req.params.name;
    if (!(name in data))
    {
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
    }
    res.render('person', {person: data[name]})
});

module.exports = router;