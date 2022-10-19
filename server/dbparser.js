import * as fs from "fs"

export class DataBase {
    constructor (path="", connect=true) {
        this.path = path
        if (connect) {
            this.connect()
        }
    }

    load () {
        var statusCode
        var result

        fs.readFile(this.path, (err, data) => {
            if (err) {
                statusCode = 1
                result = err
                return
            }

            result = JSON.parse(data);
            statusCode = 0
        })

        this.data = result
        return {statusCode, result}
    }

    get getData() {
        return this.data
    }

    save () {
        var result

        fs.writeFile(this.path, this.data, (err) => {
            if (err) {
                result = err
                return
            }
            result = false
        });

        return result
    }

}
