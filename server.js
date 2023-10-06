const express = require('express');
const pdfcrowd = require('pdfcrowd');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Create a Pdfcrowd client instance
const client = new pdfcrowd.HtmlToPdfClient('kaytech', '56cd281d72b2a6c1e2d5b4bca7e647ac');

app.get('/view', (req, res) => {
    // Serve the "Activity_Sheet.pdf" file inline to be viewed in the browser
    const filePath = path.join(__dirname, 'Activity_Sheet.pdf');
    res.sendFile(filePath, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename=Activity_Sheet.pdf'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
