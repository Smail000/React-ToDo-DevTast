import fs from "fs"
import path from "path"

export default class DataBase {
    constructor (_path="", connect=true) {
        this.path = path.resolve(_path)
        if (connect) {
            this.load()
        }
    }

    load () {
        var data = fs.readFileSync(this.path)  
        this.data = JSON.parse(data);
        return this.data
    }

    save () {
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4))
        return false
    }

}
