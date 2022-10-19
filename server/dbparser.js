import fs from "fs"
import path from "path"

export default class DataBase {
    constructor (_path="", connect=true) {
        this.path = path.resolve(_path)
        if (connect) {
            this.load()
        }
    }

    async load () {
        var data = await fs.promises.readFile(this.path)  
        this.data = JSON.parse(data);
        return this.data
    }

    async save () {
        await fs.promises.writeFile(this.path, JSON.stringify(this.data, null, 4))
        return false
    }

}
