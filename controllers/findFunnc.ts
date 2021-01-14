export default function findSongByParam(model, res, param?) {
    console.log(param)
    model.find(param, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            res.json(result);
        }
    })
}