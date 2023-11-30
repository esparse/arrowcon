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
 *         - EnquiryOwnerId
 *         - OfferingTypeId
 *         - EquipmentId
 *         - TypeOfEquipmentId
 *         - EnquiryTypeId
 *         - WeightedsalesId
 *         - RequiredDate
 *         - EnquiryStatusId
 *         - Remarks
 *         - AdditionalComments
 *         - TargetDate
 *         - Email
 *         - Password
 *         - GroupId
 *         - InstallationTypeId
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
 *         EnquiryOwnerId:
 *           type: string
 *           description: EnquiryOwnerId
 *         OfferingTypeId:
 *           type: string
 *           description: OfferingTypeId
 *         EquipmentId:
 *           type: string
 *           description: EquipmentId
 *         TypeOfEquipmentId:
 *           type: string
 *           description: TypeOfEquipmentId
 *         EnquiryTypeId:
 *           type: string
 *           description: EnquiryTypeId
 *         WeightedsalesId:
 *           type: string
 *           description: WeightedsalesId
 *         RequiredDate:
 *           type: string
 *           description: RequiredDate
 *         EnquiryStatusId:
 *           type: string
 *           description: EnquiryStatusId
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
 *         GroupId:
 *           type: string
 *           description: GroupId
 *         InstallationTypeId:
 *           type: string
 *           description: InstallationTypeId
 *       example:
 *         SalesEnquiryId: EA001
 *         EnquiryDate: 12-05-2023
 *         Email: salesEnquiry@example.com
 *         Password: pass@123
 *         CustomerId: CD1010001       
 *         RFQNo: ref012035       
 *         EnquiryOwnerId:  Registered Employee       
 *         OfferingTypeId: 1      
 *         EquipmentId: 1       
 *         TypeOfEquipmentId: 1,       
 *         EnquiryTypeId:  2,    
 *         WeightedsalesId : 1,
 *         RequiredDate: 15-03-2023,
 *         EnquiryStatusId: 3,
 *         Remarks: asdfg,
 *         AdditionalComments: jbbfrfr,
 *         TargetDate: 20-03-2023,
 *         GroupId: GID101,
 *         InstallationTypeId: 1,
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
        Password:req.body.Password,
        CustomerId: req.body.CustomerId,
        RFQNo: req.body.RFQNo,
        EnquiryOwnerId: req.body.EnquiryOwnerId,
        OfferingTypeId: req.body.OfferingTypeId,
        EquipmentId: req.body.EquipmentId,
        TypeOfEquipmentId: req.body.TypeOfEquipmentId,
        EnquiryTypeId: req.body.EnquiryTypeId,
        WeightedsalesId: req.body.WeightedsalesId,
        RequiredDate: req.body.RequiredDate,
        EnquiryStatusId: req.body.EnquiryStatusId,
        Remarks: req.body.Remarks,
        AdditionalComments: req.body.AdditionalComments,
        TargetDate: req.body.TargetDate,
        InstallationTypeId: req.body.InstallationTypeId,
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
      const result = await SalesEnquiry.aggregate([
       
        {
          $lookup:{
              from:'offeringtypes',
              localField:'OfferingTypeId',
              foreignField:'OfferingTypeId',
              as:"OfferingType"
          },
      },
      {
        $lookup:{
            from:"equipment",
            localField:"EquipmentId",
            foreignField:"EquipmentId",
            as:"Equipment"
        },
     
    },
    {
        $lookup:{
            from:"typeofequipments",
            localField:"TypeOfEquipmentId",
            foreignField:"TypeOfEquipmentId",
            as:"TypeOfEquipment"
        },
     
    },
    {
      $lookup:{
          from:"weightedsales",
          localField:"WeightedsalesId",
          foreignField:"WeightedsalesId",
          as:"Weightedsales"
      },
   
  },
  {
    $lookup:{
        from:"enquirytypes",
        localField:"EnquiryTypeId",
        foreignField:"EnquiryTypeId",
        as:"EnquiryType"
    },
 
},
{
  $lookup:{
      from:"enquirystatuses",
      localField:"EnquiryStatusId",
      foreignField:"EnquiryStatusId",
      as:"EnquiryStatus"
  },

},
{
  $lookup:{
      from:"salesenquiryitemdetails",
      localField:"SalesEnquiryId",
      foreignField:"SalesEnquiryId",
      as:"SalesEnquiryItemDetails"
  },

},
{
  $lookup:{
      from:"employees",
      localField:"EnquiryOwnerId",
      foreignField:"EmployeeId",
      as:"EnquiryOwner"
  },

},
{
  $lookup:{
      from:"contactpeople",
      localField:"CustomerId",
      foreignField:"sourceId",
      as:"ContactPeople"
  },

},
{
  $lookup:{
      from:'installationtypes',
      localField:'InstallationTypeId',
      foreignField:'InstallationTypeId',
      as:"InstallationType"
  },
},
{
  $lookup:{
      from:'customers',
      localField:'CustomerId',
      foreignField:'CustomerId',
      as:"Customer"
  },
},

{
  $lookup:{
    from:'customercategories',
    localField:'Customer.CustomerCategoryId',
    foreignField:'CustomerCategoryId',
    as:"CustomerCategory"
}
},
{
  $lookup:{
    from:'customerregions',
    localField:'Customer.CustomerRegionId',
    foreignField:'CustomerRegionId',
    as:"CustomerRegion"
}
},
{
  $lookup:{
    from:'locations',
    localField:'Customer.locationId',
    foreignField:'locationId',
    as:"Location"
}
},
    ])
      res.json({
        count:result.length,
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
 *     summary: Delete a SalesEnquiry
 *     tags: [SalesEnquiry]
 *     parameters:
 *         - in: path
 *           name: SalesEnquiryId
 *           required: true
 *           description: ID of the SalesEnquiry to delete
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: SalesEnquiry deleted successfully
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
    const result = await SalesEnquiry.findOneAndUpdate({SalesEnquiryId:req.body.SalesEnquiryId} , req.body , {
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

/**
 * @swagger
 * /api/v1/getSingleSalesEnquiryDetails/{SalesEnquiryId}:
 *   get:
 *     summary: Get a SalesEnquiry by ID
 *     tags: [SalesEnquiry]
 *     description: Retrieve a SalesEnquiry by their unique ID.
 *     parameters:
 *       - in: path
 *         name: SalesEnquiryId
 *         required: true
 *         description: ID of the SalesEnquiry to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the SalesEnquiry
 *       404:
 *         description: SalesEnquiry not found
 */
router.get("/getSingleSalesEnquiryDetails/:SalesEnquiryId",async(req,res)=>{
  try {
    const result = await SalesEnquiry.findOne({SalesEnquiryId:req.params.SalesEnquiryId})
    res.json({
        success:true,
        message:"get a Single SalesEnquiry Details",
        data:result
    })
  } catch (error) {
    res.json({
        success:false,
        message:"Something  went wrong",
        data:null
    })  
  }
  
})

  module.exports = router;