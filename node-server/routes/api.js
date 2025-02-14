import express from "express";
import bodyParser from "body-parser";
import { dictionary as dict } from "../../assets/dictionary/index.js";
import Mongo from "../helper/index.js";

const mongo = new Mongo();
const router = express.Router();

router.use(bodyParser.json());

router.get("/data", (req, res) => {
  const data = req.body;
});

router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    for (let key of Object.keys(data)) {
      const input = data[key];
      if (input.trim().length === 0)
        throw new Error(
          `O campo ${dict.dictionary.inputs[key]} não pode ser vazio`
        );
    }

    await mongo.mongoInsertOne("products", data);
    
  } catch (error) {
    res.json(`Ocorreu um erro no cadastro:\n${error}`);
  }
});

export default router;
