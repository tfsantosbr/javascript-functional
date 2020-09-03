const fs = require("fs");
const path = require("path");

// exemplo de callback lendo um arquivo de forma assincrona

const filePath = path.join(__dirname, "..", "assets", "example-file.txt");

const getFileContent = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (_, content) => {
      resolve(content.toString());
    });
  });
};

getFileContent(filePath).then(console.log);
