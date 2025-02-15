import { db } from "../index.js";

class Mongo {
  constructor() {
    this.db = db;
  }

  async mongoFind(collection) {
    return await this.db.collection(collection).find({}).toArray();
  }

  async mongoFindOne(collection, query) {
    return await this.db.collection(collection).findOne(query);
  }

  async mongoInsertOne(collection, data) {
    return await this.db.collection(collection).insertOne(data);
  }

  async mongoUpdateOne(collection, filter, update) {
    return await this.db.collection(collection).updateOne(filter, update);
  }
}

export default Mongo;
