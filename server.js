const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ohcoofficial:asd09251388@ohcotest.gji4d.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  client.close();
});