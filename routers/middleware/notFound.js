export default function notFound(req, res, next){
    res.status(404)
    res.json({
        err : "not found",
        mess : "paagina non trovata",
    })
}