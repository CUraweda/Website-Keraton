var express = require('express');
var router = express.Router();
const { throwError } = require("../../utils/helper");
const { success, error } = require("../../utils/response");
const contentModel = require('../models/contents.models');
const multer = require("multer");
const crypto = require('crypto');
const path = require('path');

function convertFilesToURL(filePath) {
    const baseURL = "http://localhost:3000";
    return baseURL + filePath.replace('public', '').split(path.sep).join('/');
}

// Start Multer
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'public/assets/content');
    },
    filename: (_req, file, cb) => {
        crypto.pseudoRandomBytes(16, (_err, raw) => {
            cb(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            req.fileValidationError = 'Only image files are allowed';
            cb(null, false);
            return;
        }
        cb(null, true);
    }
});
// End Multer

router.get('/:id?', async (req, res) => {
    const { id } = req.params;
    try {
        const data = id ? await contentModel.getOne(+id) : await contentModel.getAll();
        return success(res, 'Get Success', data);
    } catch (err) {
        return error(res, err.message);
    }
});

router.post('/:ident/:id?', upload.array('imageList'), async (req, res) => {
    let sendedData;
    try {
        // Initialize the context object
        let context = {
            textList: [],
            imageList: [],
            linkList: []
        };

        // Process text inputs
        Object.keys(req.body).forEach(key => {
            if (key.startsWith('textList')) {
                const match = key.match(/textList\[(\d+)\]\.(data|textSize)/);
                if (match) {
                    const index = parseInt(match[1], 10);
                    const field = match[2];
                    if (!context.textList[index]) {
                        context.textList[index] = {};
                    }
                    context.textList[index][field] = req.body[key];
                }
            }
        });

        // Process image inputs (binary files)
        if (req.files && req.files.length > 0) {
            req.files.forEach(file => {
                context.imageList.push({ data: convertFilesToURL(file.path) });
            });
            // Log the path of each uploaded file
            req.files.forEach(file => {
                console.log(`File uploaded: ${file.path}`);
            });
        }

        // Process image inputs (URLs)
        if (req.body.imageList) {
            req.body.imageList.forEach((url, index) => {
                if (!context.imageList[index]) {
                    context.imageList[index] = {};
                }
                context.imageList[index].data = url;
            });
        }

        // Process link inputs
        Object.keys(req.body).forEach(key => {
            if (key.startsWith('linkList')) {
                const match = key.match(/linkList\[(\d+)\]\.(data)/);
                if (match) {
                    const index = parseInt(match[1], 10);
                    if (!context.linkList[index]) {
                        context.linkList[index] = {};
                    }
                    context.linkList[index].data = req.body[key];
                }
            }
        });

        // Other form data
        if (req.body.pageId) req.body.pageId = +req.body.pageId;
        if (req.body.sectionOrder) req.body.sectionOrder = +req.body.sectionOrder;

        const payload = {
            pageId: req.body.pageId,
            sectionName: req.body.sectionName,
            sectionOrder: req.body.sectionOrder,
            textList: context.textList,
            imageList: context.imageList,
            linkList: context.linkList
        };

        if (req.params.ident !== "create") {
            sendedData = await contentModel.createUpdate('update', +req.params.id, payload);
        } else {
            sendedData = await contentModel.createUpdate('create', null, payload);
        }
        return success(res, 'Action success', sendedData);
    } catch (err) {
        return error(res, err.message);
    }
});

module.exports = router;
