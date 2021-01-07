"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/:userName/favorite-songs', function (req, res, next) {
    res.json(['song1', 'song2', 'song3']);
});
router.post('/:userName/create-song', function (req, res, next) {
    res.send('Creating song');
});
router.put('/:userName/send-song', function (req, res, next) {
    res.send('Song sended');
});
router.delete('/:userName/delete-song', function (req, res, next) {
    res.send('Delete song');
});
exports.default = router;
//# sourceMappingURL=user.js.map