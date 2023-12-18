const express = require("express")

const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Purchase Estimation Enquiry
 *   description: Operations related to Purchase Estimation Enquiry Details
 * 
 * components:
 *   schemas:
 *     PurchaseEstimationEnquiry:
 *       type: object
 *       required:
 *         - SalesEnquiryId
 *         - EnquiryDate
 *         - EnquiryDescription
 *         - Remark
 *         - AdditionalComments
 *         - TargetDate
 *         - CostEstimationStatusId
 *         - AllocatedEmployeeId
 *         - AllocatedRemark
 *         - TotalEstimationCost
 *       properties:
 *         SalesEnquiryId:
 *           type: string
 *           description: Sales Enquiry Id
 *         EnquiryDate:
 *           type: string
 *           description: Enquiry Date
 *         EnquiryDescription:
 *           type: string
 *           description: Enquiry Description
 *         Remark:
 *           type: string
 *           description: Remark
 *         AdditionalComments:
 *           type: string
 *           description: Additional Comments
 *         TargetDate:
 *           type: string
 *           description: Target Date
 *         CostEstimationStatusId:
 *           type: string
 *           description: Cost Estimation Status Id
 *         AllocatedEmployeeId:
 *           type: string
 *           description: Allocated Employee Id
 *         AllocatedRemark:
 *           type: string
 *           description: Allocated Remark
 *         TotalEstimationCost:
 *           type: string
 *           description: Allocated Remark
 *       example:
 *         SalesEnquiryId: EA00-1000
 *         EnquiryDate: "11-10-2023"
 *         EnquiryDescription: "hvjjdfdfgj"
 *         Remark: "Active"
 *         AdditionalComments: "jggdffgd"
 *         TargetDate: "11-12-2023"
 *         CostEstimationStatusId: "1"
 *         AllocatedEmployeeId: "ED101"
 *         AllocatedRemark: "NA"
 *         TotalEstimationCost: 18500
 * 
 *   parameters:
 *     PurchaseEstimationEnquiryId:
 *       in: path
 *       name: PurchaseEstimationEnquiryId
 *       required: true
 *       description: ID of the Purchase Estimation Enquiry
 *       schema:
 *         type: integer
 * 
 *   PurchaseEstimationEnquiryResponse:
 *     type: object
 *     properties:
 *       success:
 *         type: boolean
 *       message:
 *         type: string
 *       data:
 *         $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 * 
 * /api/v1/viewPurchaseEstimationEnquiryDetails:
 *   get:
 *     summary: Get all Purchase Estimation Enquiries
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     responses:
 *       200:
 *         description: Retrieve all Purchase Estimation Enquiries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 * 
 * /api/v1/CreatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Create a new Purchase Estimation Enquiry
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *     responses:
 *       200:
 *         description: Purchase Estimation Enquiry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       500:
 *         description: Some server error
 * 
 * /api/v1/deletePurchaseEstimationEnquiryDetails/{PurchaseEstimationEnquiryId}:
 *   delete:
 *     summary: Delete a Purchase Estimation Enquiry by ID
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     parameters:
 *       - $ref: '#/components/parameters/PurchaseEstimationEnquiryId'
 *     responses:
 *       200:
 *         description: Purchase Estimation Enquiry deleted successfully
 *       404:
 *         description: Purchase Estimation Enquiry not found
 * 
 * /api/v1/updatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Update Purchase Estimation Enquiry Details
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *     responses:
 *       200:
 *         description: Purchase Estimation Enquiry details successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       500:
 *         description: Server error
 * 
 * /api/v1/getSinglePurchaseEstimationEnquiryDetails/{PurchaseEstimationEnquiryId}:
 *   get:
 *     summary: Get a single Purchase Estimation Enquiry by ID
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     parameters:
 *       - $ref: '#/components/parameters/PurchaseEstimationEnquiryId'
 *     responses:
 *       200:
 *         description: Successfully retrieved the Purchase Estimation Enquiry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       404:
 *         description: Purchase Estimation Enquiry not found
 * 
 * /api/v1/getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId/{AllocatedEmployeeId}:
 *   get:
 *     summary: Get Purchase Estimation Enquiry Details by Allocated Employee Id
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     parameters:
 *       - in: path
 *         name: AllocatedEmployeeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Allocated Employee Id
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       400:
 *         description: Bad request
 * 
 * /api/v1/AllocatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Allocate Purchase Estimation Enquiry Details
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     requestBody:
 *       description: Purchase Estimation Enquiry details for allocation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *     responses:
 *       200:
 *         description: Allocation successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 * 
 * /api/v1/DeallocatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Deallocate Purchase Estimation Enquiry Details
 *     tags: [PurchaseEstimationEnquiryDetails]
 *     requestBody:
 *       description: Purchase Estimation Enquiry details for deallocation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *     responses:
 *       200:
 *         description: Deallocation successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiryResponse'
 */

const {
  CreatePurchaseEstimationEnquiryDetails,
  viewPurchaseEstimationEnquiryDetails,
  deletePurchaseEstimationEnquiryDetails,
  updatePurchaseEstimationEnquiryDetails,
  getSinglePurchaseEstimationEnquiryDetails,
  getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId,
  AllocatePurchaseEstimationEnquiryDetails,
  DeallocatePurchaseEstimationEnquiryDetails
} = require("../controller/PurchaseEstimationEnquiry_controller");



// Define your routes here



router.route("/DeallocatePurchaseEstimationEnquiryDetails").post(DeallocatePurchaseEstimationEnquiryDetails);
router.route("/viewPurchaseEstimationEnquiryDetails").get(viewPurchaseEstimationEnquiryDetails)
router.route("/CreatePurchaseEstimationEnquiryDetails").post(CreatePurchaseEstimationEnquiryDetails)

router.route("/deletePurchaseEstimationEnquiryDetails/:PurchaseEstimationEnquiryId").delete(deletePurchaseEstimationEnquiryDetails)

router.route("/updatePurchaseEstimationEnquiryDetails").post(updatePurchaseEstimationEnquiryDetails)
router.route("/getSinglePurchaseEstimationEnquiryDetails/:PurchaseEstimationEnquiryId").get(getSinglePurchaseEstimationEnquiryDetails)

router.route("/getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId/:AllocatedEmployeeId").get(getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId)
router.route("/AllocatePurchaseEstimationEnquiryDetails").post(AllocatePurchaseEstimationEnquiryDetails)


module.exports = router

