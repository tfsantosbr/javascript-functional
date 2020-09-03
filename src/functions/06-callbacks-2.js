const fs = require("fs");
const path = require("path");

// exemplo de callback lendo um arquivo de forma assincrona

const filePath = path.join(__dirname, "..", "assets", "example-file.txt");

const showFileContent = (_, content) => {
  console.log(content.toString());
};

fs.readFile(filePath, showFileContent);
