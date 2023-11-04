const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const Document = require('../model/document_model');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
});
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "arrowenergy",
      ACL: 'authenticated-read',
      fileSize: 1000000, 
     
      metadata: function (req, file, cb) {
        cb(null, { fieldfile: file.originalname },
          );
        
        console.log(file.originalname);
      },
      key: function (req, file, cb) {
        cb(null, file.originalname);
      }
    })
  });
  const uploadfile = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 2000000000000000000000000 , // 5 MB limit
    },
  });
  /**
 * @swagger
 * components:
 *   schemas:
 *     Document:
 *       type: object
 *       required:
 *         - autoDocumentId
 *         - DocumentId
 *         - file
 *       properties:
 *         autoDocumentId:
 *           type: integer
 *           description: autoDocumentId
 *         file:
 *           type: string
 *           description: file
 *         DocumentId:
 *           type: string
 *           description: file
 *       example:
 *         autoDocumentId: autogeneted
 *         file: file
 *         DocumentId: file
 *         
 */
/**
 * @swagger
 * /api/v1/createDocumentProfile:
 *   post:
 *     summary: create Document Profile
 *     tags: [Document]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Document'
 *     responses:
 *       200:
 *         description: Document login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       500:
 *         description: Some server error
 */
// const fUpload = upload.fields([{ name: 'DocumentId', maxCount: 1 }
// , { name: 'file', maxCount: 1 }
// ,{ name: 'GrossAnnualSalesForTheLast3year', maxCount: 1 },
// ,{ name: 'IncomeTaxReturnPast3Years', maxCount: 1 },
// ,{ name: 'GSTINNo', maxCount: 1 },
// ,{ name: 'PermanentAccountNoPAN', maxCount: 1 },
// ,{ name: 'ProductsandServicesListForSuppliedGoodOrServices', maxCount: 1 },
// ,{ name: 'CertificateOfIncorporation', maxCount: 1 },

// ])
  router.post('/createDocument',uploadfile.single("file"), async  (req, res) => {
  
    const { originalname, buffer } = req.file;
    const params = {
      Bucket: "arrowenergy",
      Key: originalname,    
      Body: buffer,
      ContentType: 'image/png', // adjust accordingly
      ACL: 'public-read',
    };
  
    s3.upload(params, async(err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error uploading image');
      }
      const result = await Document.create({
        autoDocumentId:Math.floor((Math.random()*100000)+1),
        DocumentId: req.body.DocumentId,
        file: `https://arrowenergy.s3.ap-south-1.amazonaws.com/${req.file.originalname}`,
    
      })
      console.log(result);
    
      res.json({ data: result });
    });
  });

/**
 * @swagger
 * /api/v1/getAllDocuments:
 *   get:
 *     summary: get all Document
 *     tags: [Document]
 *     responses:
 *       200:
 *         description: get All Document
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Document'
 */
  router.get('/getAllDocuments',async(req,res)=>{
   try {
    const result = await Document.find()
    res.json({
      success:true,
      message:"get All Document Details",
      data : result
    })
   } catch (error) {
    res.json({
      success:false,
      message:"Something went worng"+error.message,
      data : result
    })
   }
  })
  /**  /**
 * @swagger
 * /api/v1/DeleteDocument/{autoDocumentId}:
 *   delete:
 *     summary: Delete an Document
 *     tags: [Document]
 *     parameters:
 *         - in: path
 *           DocumentIdCreated: autoDocumentId
 *           required: true
 *           description: autoDocumentId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Document delete successfully
 *   
 */
  router.delete('/DeleteDocument/:autoDocumentId',async(req,res)=>{
    try {
      const result = await Document.findOneAndDelete({autoDocumentId:req.params.autoDocumentId})
      res.json({
        success:true,
        message:"delete a Document Successfully",
        data:null
      })
    } catch (error) {
      res.json({
        success:false,
        message:"Something went worng" + error.message,
        data:null
      })
    }
  })
   /**  /**
 * @swagger
 * /api/v1/getDocumentbyDocumentID/{DocumentId}:
 *   get:
 *     summary: getDocumentbyDocumentID
 *     tags: [Document]
 *     parameters:
 *         - in: path
 *           DocumentIdCreated: DocumentId
 *           required: true
 *           description: DocumentId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Document delete successfully
 *   
 */
  router.get('/getDocumentbyDocumentID/:DocumentId',async(req,res)=>{
    try {
      const result = await Document.find({DocumentId:req.params.DocumentId})
      res.json({
        success:true,
        message:"get Document by DocumentID Successfully",
        data:result
      })
    } catch (error) {
      res.json({
        success:false,
        message:"Something went worng" + error.message,
        data:null
      })
    }
  })

  module.exports = router;
