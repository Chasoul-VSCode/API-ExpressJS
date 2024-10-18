const express = require('express');
const router = express.Router();
const dbConnection = require('../config/database');

router.get('/connDB', (req, res) => {
    if (dbConnection) {
        res.status(200).send({ message: 'Berhasil terhubung ke database' });
        console.log('Berhasil terhubung ke database');
    } else {
        res.status(500).send({ message: 'Kesalahan koneksi ke database' });
        console.error('Kesalahan koneksi ke database');
    }
});

module.exports = router;
