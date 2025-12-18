import character from "../data.js";

//index
function index(req, res) {
    const info = {
        numChar: character.length,
        result: character,
    }
    res.json("info")
}
//show
function show(req, res) {
    const id = parseInt(req.params.id);
    const resp = character.find(character => character.id === id)
    res.json(resp)
}
//store
function store(req, res) {
    res.send("creazione character")
}
//update
function update(req, res) {
    const id = req.params.id;
    res.send("Aggiorna character" + id)
}
//modify
function modify(req, res) {
    const id = req.params.id;
    res.send("modifica character n'" + id)
}
//destroy
function destroy(req, res) {
    const id = req.params.id;
    res.send("cancella character n'" + id)
}



const controller =
{
    index,
    show,
    store,
    update,
    modify,
    destroy,
}
export default controller;