const express = require('express');
const controllers = require('../controllers/photos');
const errorHandler = require('../middlewares/baseErrorHandler');
const path = require('path');
const multer  = require('multer')

const appDir = path.dirname(require.main.filename);
const staticDir = path.join(appDir, './static');
const upload = multer({ dest: staticDir })

const router = express.Router();

router.post('/photos/upload', upload.single('file'), errorHandler(controllers.uploadPhoto));
router.get('/photos/:path(*)', errorHandler(controllers.getPhoto));

module.exports = router;
