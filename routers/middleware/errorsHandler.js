export default function errorsHandler(err, req, res, next){
    res.status(505);
        res.json({
        err : "not found",
    })
}