import express from "express";
import character from "./data.js";
import postRouter from "./routers/post.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, resp)=>{
    resp.send("ciao")
})

app.get("/character", (req, resp) =>{
    const info ={
        totaleMembri :character.length,
        character: character,
    }
    resp.json(info)
})

app.use("/character", postRouter)

app.listen(port, () => {

    console.log(`server in funzione sulla porta ${port}`)
})