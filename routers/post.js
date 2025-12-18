import express, { Router } from "express";  

import characterController from "../controller/characterController.js"

const router = express.Router(); 


//index
router.get("/", characterController.index)

//show
router.get("/:id", characterController.show)

//store
router.post("/", characterController.store)

//update
router.put("/:id", characterController.update)

//modify
router.patch("/:id", characterController.modify)

//destroy
router.delete("/:id", characterController.destroy)


export default router;