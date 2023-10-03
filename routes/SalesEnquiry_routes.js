const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const SalesEnquiry = require('../model/salesEnquiry_model');
const bcrypt = require('bcryptjs')
// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.REGION
// });
// const upload = multer({
//     storage: multerS3({
//       s3: s3,
//       bucket: "avinya01",
//       ACL: 'authenticated-read',
//       fileSize: 1000000, 
     
//       metadata: function (req, file, cb) {
//         cb(null, { fieldName: file.originalname },
//           );
        
//         console.log(file.originalname);
//       },
//       key: function (req, file, cb) {
//         cb(null, file.originalname);
//       }
//     })
//   });
//   const uploads = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//       fileSize: 2000000000000000000000000 , // 5 MB limit
//     },
//   });

  /**
 * @swagger
 * components:
 *   schemas:
 *     SalesEnquiry:
 *       type: object
 *       required:
 *         - SalesEnquiryId
 *         - EnquiryDate
 *         - CustomerId
 *         - RFQNo
 *         - EnquiryOwner
 *         - OfferingType
 *         - Equipment
 *         - TypeofEquipment
 *         - EnquiryType
 *         - ItemDetails
 *         - Description
 *         - Unit
 *         - Quantity
 *         - WeightedSalesinMn
 *         - RequiredDate
 *         - EnquiryStatus
 *         - Remarks
 *         - AdditionalComments
 *         - TargetDate
 *         - Email
 *         - Password
 *       properties:
 *         SalesEnquiryId:
 *           type: integer
 *           description: SalesEnquiryId
 *         EnquiryDate:
 *           type: string
 *           description: EnquiryDate
 *         CustomerId:
 *           type: string
 *           description: CustomerId
 *         RFQNo:
 *           type: string
 *           description: RFQNo
 *         EnquiryOwner:
 *           type: string
 *           description: EnquiryOwner
 *         OfferingType:
 *           type: string
 *           description: OfferingType
 *         Equipment:
 *           type: string
 *           description: Equipment
 *         TypeofEquipment:
 *           type: string
 *           description: TypeofEquipment
 *         EnquiryType:
 *           type: string
 *           description: EnquiryType
 *         ItemDetails:
 *           type: string
 *           description: ItemDetails
 *         Description:
 *           type: string
 *           description: Description
 *         Unit:
 *           type: string
 *           description: Unit
 *         Quantity:
 *           type: string
 *           description: Quantity
 *         WeightedSalesinMn:
 *           type: string
 *           description: WeightedSalesinMn
 *         RequiredDate:
 *           type: string
 *           description: RequiredDate
 *         EnquiryStatus:
 *           type: string
 *           description: EnquiryStatus
 *         Remarks:
 *           type: string
 *           description: Remarks
 *         AdditionalComments:
 *           type: string
 *           description: AdditionalComments
 *         TargetDate:
 *           type: string
 *           description: TargetDate
 *         Email:
 *           type: string
 *           description: Email
 *         Password:
 *           type: string
 *           description: Password
 *       example:
 *         SalesEnquiryId: EA001
 *         EnquiryDate: 12-05-2023
 *         Email: salesEnquiry@example.com
 *         Password: pass@123
 *         CustomerId: CI0001       
 *         RFQNo: ref012035       
 *         EnquiryOwner:  Registered Employee       
 *         OfferingType: Project ECP       
 *         Equipment: Heater       
 *         TypeofEquipment:  CFBC,       
 *         EnquiryType:  Budgetary,    
 *         ItemDetails: item1 ,
 *         Description: njfbfbu ,
 *         Unit: 20 ,
 *         Quantity : 10 ,
 *         WeightedSalesinMn :  THB,
 *         RequiredDate: 15-03-2023,
 *         EnquiryStatus: Active,
 *         Remarks: asdfg,
 *         AdditionalComments: jbbfrfr,
 *         TargetDate: 20-03-2023,
 *
 */


  /**
 * @swagger
 * /api/v1/CreateSalesEnquiry:
 *   post:
 *     summary: Create a new Sales Enquiryr
 *     tags: [SalesEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesEnquiry'
 *     responses:
 *       200:
 *         description: create SalesEnquiry successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesEnquiry'
 *       500:
 *         description: Some server error
 */
  router.post('/CreateSalesEnquiry', async  (req, res) => {
    // const { originalname, buffer } = req.file;
  
    // const params = {
    //   Bucket: process.env.AWS_S3_BUCKET,
    //   Key: originalname,
    //   Body: buffer,
    //   ContentType: 'image/png', // adjust accordingly
    //   ACL: 'public-read',
    // };
  
    // s3.upload(params, async(err, data) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).send('Error uploading image');
    //   }
      let count = (await SalesEnquiry.countDocuments()+1000);
      const result = await SalesEnquiry.create({
        SalesEnquiryId: "EA00-" + count ,
        EnquiryDate: req.body.EnquiryDate,
        Email: req.body.Email,
        Password:bcrypt.hashSync(req.body.Password,10),
        CustomerId: req.body.CustomerId,
        RFQNo: req.body.RFQNo,
        EnquiryOwner: req.body.EnquiryOwner,
        OfferingType: req.body.OfferingType,
        Equipment: req.body.Equipment,
        TypeofEquipment: req.body.TypeofEquipment,
        EnquiryType: req.body.EnquiryType,
        ItemDetails: req.body.ItemDetails,
        Description: req.body.Description,
        Unit: req.body.Unit,
        Quantity: req.body.Quantity,
        WeightedSalesinMn: req.body.WeightedSalesinMn,
        RequiredDate: req.body.RequiredDate,
        EnquiryStatus: req.body.EnquiryStatus,
        Remarks: req.body.Remarks,
        AdditionalComments: req.body.AdditionalComments,
        TargetDate: req.body.TargetDate,
        // file: `https://avinya01.s3.ap-south-1.amazonaws.com/${req.file.originalname}`
      })
    
      res.json({ data: result });
    });
  


/**
 * @swagger
 * /api/v1/getSalesEnquiry:
 *   get:
 *     summary: get Sales Enquiry
 *     tags: [SalesEnquiry]
 *     responses:
 *       200:
 *         description: get All SalesEnquiry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SalesEnquiry'
 */
  router.get('/getSalesEnquiry',async(req,res)=>{
    try {
      const result = await SalesEnquiry.find()
      res.json({
        succes: true ,
        Message: "Get All Sales Enquiry Details" ,
        data : result
      })
    } catch (error) {
      res.json({
        succes: false ,
        Message: "Something went Worng" ,
        data : null
      })
    }
  })
   /**
 * @swagger
 * /api/v1/deleteSalesEnquiryDetails/{SalesEnquiryId}:
 *   delete:
 *     summary: Delete an SalesEnquiry
 *     tags: [SalesEnquiry]
 *     parameters:
 *         - in: path
 *           SalesEnquiryName: SalesEnquiryId
 *           required: true
 *           description: SalesEnquiryId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: SalesEnquiry delete successfully
 *   
 */
router.delete("/deleteSalesEnquiryDetails/:SalesEnquiryId",async(req,res)=>{
  try {
    const result = await SalesEnquiry.findOneAndDelete({SalesEnquiryId:req.params.SalesEnquiryId})
    res.json({
        success:true,
        message:"Delete SalesEnquiry Details",
        data:null
    })
} catch (error) {
    res.json({
        success:false,
        message:"Something  went wrong",
        data:null
    })  
}
})

/**
* @swagger
* /api/v1/updateSalesEnquiryDetails:
*   post:
*     summary: Update SalesEnquiry Details
*     tags: [SalesEnquiry]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/SalesEnquiry'
*     responses:
*       200:
*         description: update SalesEnquiry Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/SalesEnquiry'
*       500:
*         description: Some server error
*/
router.post("/updateSalesEnquiryDetails",async(req,res)=>{
  try {
    const result = await SalesEnquiry.findOneAndUpPassword({SalesEnquiryId:req.body.SalesEnquiryId} , req.body , {
        new: true,
        runValidators: true,})
    res.json({
        success:true,
        message:"update SalesEnquiry Details",
        data:result
    })
} catch (error) {
    res.json({
        success:false,
        message:"Something  went wrong"+Error,
        data:null
    })  
}
})
  module.exports = router;