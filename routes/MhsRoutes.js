const express = require('express');
const router = express.Router();
const dbConnection = require('../config/database');

// Rute untuk mengambil data dari tabel mahasiswa
router.get('/mahasiswa', (req, res) => {
    dbConnection.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            console.error('Kesalahan saat mengambil data mahasiswa:', err);
            return res.status(500).send({ message: 'Kesalahan saat mengambil data' });
        }
        res.status(200).send(results);
    });
});

// Rute untuk menambah data ke tabel mahasiswa
router.post('/mahasiswa', (req, res) => {
    const { npm, nama, no } = req.body;
    dbConnection.query('INSERT INTO mahasiswa (npm, nama, no) VALUES (?, ?, ?)', [npm, nama, no], (err, results) => {
        if (err) {
            console.error('Kesalahan saat menambah data mahasiswa:', err);
            return res.status(500).send({ message: 'Kesalahan saat menambah data' });
        }
        res.status(201).send({ message: 'Data berhasil ditambahkan' });
    });
});
module.exports = router;


