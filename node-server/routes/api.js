import express from "express";
import bodyParser from "body-parser";
import dict from "../../assets/dictionary/index.js";
import Mongo from "../helper/index.js";

const router = express.Router();

router.use(bodyParser.json());

router.get("/data", async (req, res) => {
  try {
    const data = req.query;
    if (!data) throw new Error("No data given.");

    const mongo = new Mongo();

    res.json(await mongo.mongoFind(data.collection, data.query));
  } catch (error) {
    console.error(error);
    res.json({});
  }
});

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const mongo = new Mongo();

    for (let key of Object.keys(data)) {
      const input = data[key];
      if (input.trim().length === 0)
        throw new Error(
          `O campo ${dict.dictionary.inputs[key]} não pode ser vazio`
        );
    }

    await mongo.mongoInsertOne("products", data);
    res.json("Cadastro feito com sucesso!");
  } catch (error) {
    res.json(`Ocorreu um erro no cadastro:\n${error}`);
  }
});

export default router;
