
import axios from "axios";

export default function reloader(wait = 500) {
    var sessionKey
    var key
    const live = async (wait) => {
        try {
            key = await (await axios.get('/getSessionKey')).data
            if (!sessionKey) sessionKey = key
            if (key !== "none") {
                if (sessionKey === key) {
                    setTimeout(() => live(wait), wait)
                    return
                }
                document.location.reload()
            }
        } catch (e) {
            alert("Connection lost")
        }
    }
    live(wait)
}