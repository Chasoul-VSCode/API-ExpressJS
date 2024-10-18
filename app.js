const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for the API
let mahasiswa = [];

// API endpoints
app.get('/api/mahasiswa', (req, res) => {
    res.json(mahasiswa);
});

app.post('/api/mahasiswa', (req, res) => {
    const { npm, nama, no } = req.body;
    mahasiswa.push({ npm, nama, no });
    res.json({ message: 'Mahasiswa berhasil ditambahkan' });
});

app.delete('/api/mahasiswa/:npm', (req, res) => {
    const { npm } = req.params;
    mahasiswa = mahasiswa.filter(m => m.npm !== npm);
    res.json({ message: 'Mahasiswa berhasil dihapus' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
