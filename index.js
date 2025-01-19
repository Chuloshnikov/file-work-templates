const fs = require('fs'); //work with file system
const http = require('http'); //http servers and http requests
//const url = require('url'); // work width url
//const os = require('os'); //work width operation system, system work time, processor, RAM and else
//const path = require('path'); //working with paths to catalogues and files

const {readFile, appendFile, writeFile, rename, unlink } = require('fs/promises');

const fileName = 'newFile.txt';
const contentToAdd = 'Some content';

// прапоры для читания записи
{/*
    r - открыть файл для чтения
    r+ - открыть файл для чтения и записи в него
    rs - открыть файл для записи в синхронном режиме
    rs+ - открыть файл для записи в синхронном режиме 
    w - окрыть файл для записи (если файл не существует то будет создан) 
    wx - как w только не срабатывает если файл в пути существует 
    w+ - окрыть файл для записи и чтения (если файл не существует то будет создан) 
    wx+ - как w+ не срабатывает если файл в пути существует 
    a - открыть файл для добавления, файл создается если он не существует
    ax - как а только не страбатывает если файл в пути существует
    a+ - отрыть файл для чтения и записи. Файл создается если не существует
    ax+ - как а+ только не срабатывает если путь существует
*/}


//создание файла в каталоге и запись в него. 
async function appendToFile(fileName, data) {
    try {
        await appendFile(fileName, data, {flag: 'w'});
        console.log(`Appended to file ${fileName} successfully`);
    } catch (err) {
        console.log('Got an error while appending the file', err.message);
    }
}

// запись в файл или перезапись
async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log(`File ${fileName} updated successfully`);
    } catch (err) {
        console.log('Got an error while appending the file', err.message);
    }
}


async function appendToFile(fileName, data) {
    try {
        await appendFile(fileName, data, {flag: 'w'});
        console.log(`Appended to file ${fileName} successfully`);
    } catch (err) {
        console.log('Got an error while appending the file', err.message);
    }
}


//чтение файла
async function readInfoFile() {
    try {
        const data =await readFile('info.txt');
        console.log(data.toString());
    } catch (err) {
        console.log('Got an error while reading the file', err.message);
    }
}


//переименование файла
async function renameFile(from, to) {
    try {
        await rename(from, to);
        console.log(`File ${from} renamed to ${to} successfully`);
    } catch (err) {
        console.log('Got an error while renaming the file', err.message);
    }
}



async function deleteFile(fileName) {
    try {
        await unlink(fileName);
        console.log(`File ${fileName} removed successfully`);
    } catch (err) {
        console.log('Got an error while  deleting the file', err.message);
    }
}

deleteFile('upworked.txt');
//renameFile('newFile.txt', 'upworked.txt');
//writeToFile('newFile.txt', 'bound');
//readInfoFile();
//appendToFile('newFile.txt', 'this is a new file');


{/* 
//структура для дополнения текстового файла 
fs.open(fileName, 'a', (err, file) => {
    if (err) throw err;

    fs.write(file, contentToAdd, (err, data) => {
        if (err) throw err;
        console.log('Content added to the file.');

        fs.close(file, (err) => {
            if (err) throw err;
            console.log('File closed.')
        })
    });
});
*/}

//если надо читать файл синхронно то вместо readFile ставим readFileSync
http.createServer(function(req, res) {
    fs.readFile('info.txt', (err, data) => {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

