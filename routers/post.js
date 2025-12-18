import express, { Router } from "express";  
import character from "../data.js";

const router = express.Router(); 


//index
router.get("/", (req,res)=>{
    const info = {
        numChar : character.length,
        result : character,
    }
    res.json("info")
})

//show
router.get("/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const resp = character.find(character => character.id === id)
    res.json(resp)
})
//store
router.post("/", (req, res)=>{
    res.send("creazione character")
})
//update
router.put("/:id", (req, res)=>{
    const id = req.params.id;
    res.send("Aggiorna character" + id)
})
//modify
router.patch("/:id", (req, res)=>{
    const id = req.params.id;
    res.send("modifica character n'" + id)
})

//destroy
router.delete("/:id", (req, res)=>{
    const id = req.params.id;
    res.send("cancella character n'" + id)
})


export default router;