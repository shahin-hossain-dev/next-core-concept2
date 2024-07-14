//*src/lib/connectDB

const { ServerApiVersion, MongoClient } = require("mongodb");

// Mongo DB database connection
let db;
const connectDB = async () => {
  if (db) return db;
  try {
    const uri = "mongodb://0.0.0.0:27017";
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("next-core");
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
