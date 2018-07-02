var express = require('express');
var router = express.Router();
const listModel = require('../models/listModel');
var currentDate = new Date();

router.get('/api/list', (req, res) => {
    // let data = [
    //     { name: 'Devin', desc: 'We are located in Lagos' },
    //     { name: 'Jackson', desc: 'We are located in Lagos' },
    //     { name: 'James', desc: 'We are located in Lagos' },
    //     { name: 'Joel', desc: 'We are located in Lagos' },
    //     { name: 'John', desc: 'We are located in Lagos' },
    //     { name: 'Jillian', desc: 'We are located in Lagos' },
    //     { name: 'Jimmy', desc: 'We are located in Lagos' },
    //     { name: 'Julie', desc: 'We are located in Lagos' },
    // ];
    listModel.find({}, (err, data) => {
        res.json(data);
    });
});

router.post('/api/postData', (req, res) => {
    listModel.create(req.body, {
        Date: currentDate
    }, (err, data) => {
        if (data)
            res.json(data);
    })
});

module.exports = router;