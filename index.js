import fs from 'fs';
import http from 'http';
import axios from 'axios';

const dataToWrite = 'Hello, world!';
const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, world!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

axios.get(`http://google.com/`)
    .then(response => {
        fs.writeFile('google_com.html', response.data, (err) => {
            if (err) throw err;
            console.log('The HTML file has been saved!');
        });
    })
    .catch(error => {
        console.log('Error fetching Localhost:', error);
    });


fs.writeFile('message.txt', dataToWrite, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});