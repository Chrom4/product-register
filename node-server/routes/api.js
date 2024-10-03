const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const productsFile = `../src/registers/products/products.json`;
const dict = require("../../assets/dictionary");

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
    let d = data[key];
    aux = 0;
    d.split(" ").forEach((a) => (a === "" ? (aux += 1) : null));
    if (aux === d.length) error = { error: "Campo Informado vazio" };
  }

  if (data && Object.keys(data).length !== 0) {
    if (data.code) {
    } else {
      error = {
        error: "Campo código é obrigatório",
      };
    }
  } else {
    error = {
      error: "Nenhum campo foi preenchido",
    };
  }

  for (let key of Object.keys(data)) {
    const input = data[key];
    if (input.trim().length === 0)
      error = {
        error: `O campo ${dict.dictionary.inputs[key]} não pode ser vazio`,
      };
    if (error) break;
  }

  if (!error) {
    fs.readFile(productsFile, (err, fileData) => {
      if (err) {
        console.error(err);
        error = { error: "Ao ler o registro de produtos" };
      } else {
        fileContents = fileData.length ? JSON.parse(fileData.toString()) : [];

        if (fileContents.find((f) => f.code === data.code)) {
          error = { error: "Ja existe cadastro com o código informado" };
        }

        if (!error) {
          fileContents.push(data);
          fileContents = JSON.stringify(fileContents, null, 2);
          fs.writeFile(productsFile, fileContents, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("File Changed Successfully!");
              console.log("after >\n", fileContents);
              res.json("Cadastro feito com Sucesso!");
            }
          });
        } else {
          res.json(`Ocorreu um erro no cadastro:\n${error.error}`);
        }
      }
    });
  }
  if (error) {
    res.json(`Ocorreu um erro no cadastro:\n${error.error}`);
  }
});

module.exports = router;
