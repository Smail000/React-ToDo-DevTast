
import DataBase from "../server/dbparser.js";

const DB = new DataBase("./db/notes.json")
await DB.load()

for (let note of DB.data.notes) {
    note.done = false
}

await DB.save()

await DB.load()

console.log(DB.data)