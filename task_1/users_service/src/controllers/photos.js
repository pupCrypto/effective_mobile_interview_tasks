const express = require('express');
const path = require('path');
const { RES_MSG, STATUS } = require('../consts');
const multer  = require('multer')
const appDir = path.dirname(require.main.filename);

const staticDir = path.join(appDir, './static');
const upload = multer({ dest: staticDir })

function isImgMimetype(mimetype) {
    return /^image/.test(image.mimetype)
}
async function getPhoto(req, res) {
    const pathToFile = path.join(staticDir, req.params.path);
    res.sendFile(pathToFile);
}

async function uploadPhoto(req, res) {
    const { image } = req.files;
    if (!image) {
        res.status(400);
        res.json({status: STATUS.ERROR, msg: RES_MSG.EMPTY_IMAGES});
    }
    if (!isImgMimetype(image.mimetype)) {
        res.status(400);
        res.json({status: STATUS.ERROR, msg: RES_MSG.ONLY_IMG});
    }
    image.mv(path.join(staticDir, image.name));
    res.json({status: STATUS.OK, msg: RES_MSG.UPLOADED});

}

module.exports = {
    getPhoto,
    uploadPhoto,
};
