import express from "express";
import character from "./data.js";
import postRouter from "./routers/post.js";
import notFound from "./routers/middleware/notFound.js";
import errorsHandler from "./routers/middleware/errorsHandler.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("ciao")
})

app.get("/character", (req, resp) => {
    const info = {
        totaleMembri: character.length,
        character: character,
    }
    resp.json(info)
})

app.use("/character", postRouter)

app.use(errorsHandler)
app.use(notFound)


app.listen(port, () => {
    console.log(`server in funzione sulla porta ${port}`)
})