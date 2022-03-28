const fetch = require("node-fetch");

async function getData(word) {

	const response = await fetch(`https://jisho.org/api/v1/search/words?keyword=`+word);
	var data = await response.json();
	data = data['data'];
	return data;

}

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    var word = req.query.word;
	if (!(word))
	{
		res.redirect(303, '/')
	}
	else
	{
		var urllink =  "/search/"+ word;
		res.redirect(urllink);
	}
});

router.get('/:name', async(req,res) =>{
    var word = req.params.name;
	var data = await getData(word);
	res.cookie ('last_research', word, {signed : true});

    res.render('search', {data: data, wordkey:word})
});

module.exports = router;