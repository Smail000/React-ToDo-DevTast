
import DataBase from "../server/dbparser.js";

const DB = new DataBase("./db/notes.json")
var result = await DB.load()

console.log(result)