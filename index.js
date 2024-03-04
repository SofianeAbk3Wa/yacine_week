import fs from 'fs';
import http from 'http';
import axios from 'axios';

const dataToWrite = 'Hello, world!';
const PORT = 8000;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello, world!</h1>');
    } catch (error) {
        console.log('Error sending response:', error);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

async function fetchDataAndWriteToFile() {
    try {
        const response = await axios.get('http://google.com/');
        await fs.promises.writeFile('google.html', response.data);
        console.log('The HTML file has been saved!');
    } catch (error) {
        console.log('Error fetching data and writing to file:', error);
    }
}

async function writeDataToFile() {
    try {
        await fs.promises.writeFile('message.txt', dataToWrite);
        console.log('The file has been saved!');
    } catch (error) {
        console.log('Error writing to file:', error);
    }
}

async function readDataFromFile() {
    try {
        const data = await fs.promises.readFile('message.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log('Error reading from file:', error);
    }
}

fetchDataAndWriteToFile();
writeDataToFile();
readDataFromFile();
