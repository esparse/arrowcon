const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const SalesOrderTransfer = require('../model/salesOrderTransfer_model');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
});
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "avinya01",
      ACL: 'authenticated-read',
      AttachmentsSize: 1000000, 
     
      metadata: function (req, Attachments, cb) {
        cb(null, { fieldName: Attachments.originalname },
          );
        
        console.log(Attachments.originalname);
      },
      key: function (req, Attachments, cb) {
        cb(null, Attachments.originalname);
      }
    })
  });
  const uploadAttachments = multer({
    storage: multer.memoryStorage(),
    limits: {
      AttachmentsSize: 2000000000000000000000000 , // 5 MB limit
    },
  });
  router.post('/SalesOrderTransfer', uploadAttachments.single('Attachments'), async  (req, res) => {
    const { originalname, buffer } = req.Attachments;
  
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
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
      let count = (await SalesOrderTransfer.countDocuments()+1)+1000;
      const result = await SalesOrderTransfer.create({
        SalesOrderTransferId: "SO-" +count,
        SalesOrderTransferDate: req.body.SalesOrderTransferDate,
        SalesEnquiryId: req.body.SalesEnquiryId,
        CustomerId: req.body.CustomerId,
        OrderNo: req.body.OrderNo,
        OrderDate: req.body.OrderDate,
        ScopeOfSupply: req.body.ScopeOfSupply,
        TotalOrderValue: req.body.TotalOrderValue,
        TearmsOfPayment: req.body.TearmsOfPayment,
        Delivery: req.body.Delivery,
        PFCharge: req.body.PFCharge,
        PackingRequirementIfAny: req.body.PackingRequirementIfAny,
        TaxiesAndDuties: req.body.TaxiesAndDuties,
        FreightInsurance: req.body.FreightInsurance,
        Basisofsale: req.body.Basisofsale,
        Inspection: req.body.Inspection,
        LiquidatedDamages: req.body.LiquidatedDamages,
        SupplierReferenceQuote: req.body.SupplierReferenceQuote,
        DeviationModificationUpgradationrequiement: req.body.DeviationModificationUpgradationrequiement,
        TestRequirmentsCertificates: req.body.TestRequirmentsCertificates,
        BoilerMakerNo: req.body.BoilerMakerNo,
        Remarks: req.body.Remarks,
        Attachments: `https://avinya01.s3.ap-south-1.amazonaws.com/${req.Attachments.originalname}`,
        ContactPersonName: req.body.ContactPersonName,
        Designation: req.body.Designation,
        ContactNumber: req.body.ContactNumber,
        ContactPersonEmailId: req.body.ContactPersonEmailId,
        Comments: req.body.Comments,
      })
    
      res.json({ data: result });
    });
  });
  module.exports = router;