
import DataBase from "../server/dbparser.js";

const DB = new DataBase("./db/notes.json")
await DB.load()

DB.data.notes.push({
    name: "test2",
    data: "test 2 data"
})

await DB.save()

await DB.load()

console.log(DB.data)