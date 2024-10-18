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

// Rute untuk mengubah data di tabel mahasiswa
router.put('/mahasiswa/:npm', (req, res) => {
    const { npm } = req.params;
    const { nama, no } = req.body;
    dbConnection.query('UPDATE mahasiswa SET nama = ?, no = ? WHERE npm = ?', [nama, no, npm], (err, results) => {
        if (err) {
            console.error('Kesalahan saat mengubah data mahasiswa:', err);
            return res.status(500).send({ message: 'Kesalahan saat mengubah data' });
        }
        res.status(200).send({ message: 'Data berhasil diubah' });
    });
});

// Rute untuk menghapus data di tabel mahasiswa
router.delete('/mahasiswa/:npm', (req, res) => {
    const { npm } = req.params;
    dbConnection.query('DELETE FROM mahasiswa WHERE npm = ?', [npm], (err, results) => {
        if (err) {
            console.error('Kesalahan saat menghapus data mahasiswa:', err);
            return res.status(500).send({ message: 'Kesalahan saat menghapus data' });
        }
        res.status(200).send({ message: 'Data berhasil dihapus' });
    });
});

module.exports = router;

