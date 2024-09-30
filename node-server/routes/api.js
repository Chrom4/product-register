const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const productsFile = `../src/registers/products/products.json`;

router.use(bodyParser.json());

router.get("/data", (req, res) => {
  const data = ["Item 1", "Item 2", "Item 3"];
  res.json(data);
});

router.post("/add", (req, res) => {
  let error,
    fileContents,
    aux = 0;
  const data = req.body;
  console.log(data);
  for (let key of Object.keys(data)) {
    let d = data[key]
    aux = 0;
    d.split(" ").forEach((a) => (a === "" ? (aux += 1) : null));
    if (aux === d.length) error = { error: "Campo Informado vazio" };
  }

  if (!error) {
    fs.readFile(productsFile, (err, fileData) => {
      if (err) {
        console.error(err);
        error = { error: "Ao ler o registro de produtos" };
      } else {
        fileContents = fileData.length ? JSON.parse(fileData.toString()) : [];

        if (fileContents.find((f) => f.code === data.code))
          error = { error: "Ja existe cadastro com o código informado" };

        console.log("before >\n", fileContents);

        fileContents.push(data);
        fileContents = JSON.stringify(fileContents, null, 2);

        if (!error) {
          fs.writeFile(productsFile, fileContents, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("File Changed Successfully!");
              console.log("after >\n", fileContents);
              res.json("Cadastro feito com Sucesso!");
            }
          });
        }
      }
    });
  }
  if (error) {
    res.json(`Ocorreu um erro no cadastro:\n${error.error}`);
  }
});

module.exports = router;
