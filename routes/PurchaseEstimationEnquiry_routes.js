const express = require("express")
const {CreatePurchaseEstimationEnquiryDetails,viewPurchaseEstimationEnquiryDetails,deletePurchaseEstimationEnquiryDetails,updatePurchaseEstimationEnquiryDetails,getSinglePurchaseEstimationEnquiryDetails,getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId,AllocatePurchaseEstimationEnquiryDetails,DeallocatePurchaseEstimationEnquiryDetails} = require("../controller/PurchaseEstimationEnquiry_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     PurchaseEstimationEnquiry:
 *       type: object
 *       required:
 *         - PurchaseEstimationEnquiryId
 *         - SalesEnquiryId
 *         - EnquiryDate
 *         - EnquiryDescription
 *         - Remark
 *         - AddtionalComments
 *         - TargetDate
 *         - CostEstimationStatusId
 *         - AllocatedEmployeeId
 *         - AllocatedRemark
 *       properties:
 *         PurchaseEstimationEnquiryId:
 *           type: integer
 *           description: PurchaseEstimationEnquiryId
 *         SalesEnquiryId:
 *           type: string
 *           description: SalesEnquiryId
 *         EnquiryDescription:
 *           type: string
 *           description: EquipmentId
 *         Remark:
 *           type: string
 *           description: Remark
 *         AddtionalComments:
 *           type: string
 *           description: AddtionalComments
 *         TargetDate:
 *           type: string
 *           description: AddtionalComments
 *         CostEstimationStatusId:
 *           type: string
 *           description: CostEstimationStatusId
 *         AllocatedEmployeeId:
 *           type: string
 *           description: CostEstimationStatusId
 *         AllocatedRemark:
 *           type: string
 *           description: CostEstimationStatusId
 *       example:
 *         PurchaseEstimationEnquiryId: autoGenerated
 *         SalesEnquiryId: EA00-1000
 *         EnquiryDate: 11-10-2023
 *         EnquiryDescription: hvjjdfdfgj
 *         Remark: Active
 *         AddtionalComments: jggdffgd
 *         TargetDate: 11-12-2023
 *         CostEstimationStatusId: 1
 *         AllocatedEmployeeId: ED101
 *         AllocatedRemark: NA
 *                
 *
 */

/**
 * @swagger
 * /api/v1/viewPurchaseEstimationEnquiryDetails:
 *   get:
 *     summary: get all PurchaseEstimationEnquiry
 *     tags: [PurchaseEstimationEnquiry]
 *     responses:
 *       200:
 *         description: get All PurchaseEstimationEnquiry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 */
router.route("/viewPurchaseEstimationEnquiryDetails").get(viewPurchaseEstimationEnquiryDetails)


/**
 * @swagger
 * /api/v1/CreatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: add a new PurchaseEstimationEnquiry
 *     tags: [PurchaseEstimationEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *     responses:
 *       200:
 *         description: create PurchaseEstimationEnquiry successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEstimationEnquiry'
 *       500:
 *         description: Some server error
 */
 router.route("/CreatePurchaseEstimationEnquiryDetails").post(CreatePurchaseEstimationEnquiryDetails)

 /**
* @swagger
* /api/v1/deletePurchaseEstimationEnquiryDetails/{PurchaseEstimationEnquiryId}:
*   delete:
*     summary: Delete a PurchaseEstimationEnquiry
*     tags: [PurchaseEstimationEnquiry]
*     parameters:
*         - in: path
*           name: PurchaseEstimationEnquiryId
*           required: true
*           description: PurchaseEstimationEnquiryId is required
*           schema:
*              type: string
*     responses:
*       200:
*         description: PurchaseEstimationEnquiry deleted successfully
*       404:
*         description: PurchaseEstimationEnquiry not found
*/

router.route("/deletePurchaseEstimationEnquiryDetails/:PurchaseEstimationEnquiryId").delete(deletePurchaseEstimationEnquiryDetails)

/**
* @swagger
* /api/v1/updatePurchaseEstimationEnquiryDetails:
*   post:
*     summary: upCustomerId PurchaseEstimationEnquiry Details
*     tags: [PurchaseEstimationEnquiry]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/PurchaseEstimationEnquiry'
*     responses:
*       200:
*         description: update PurchaseEstimationEnquiry Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/PurchaseEstimationEnquiry'
*       500:
*         description: Some server error
*/
router.route("/updatePurchaseEstimationEnquiryDetails").post(updatePurchaseEstimationEnquiryDetails)

// swagger.js
/**
 * @swagger
 * components:
 *   schemas:
 *     PurchaseEnquiry:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *     PurchaseEnquiryResponse:
 *       type: object
 *       properties:
 *         result:
 *           type: string
 *         details:
 *           type: string
 */

/**
 * @swagger
 * /api/v1/getSinglePurchaseEstimationEnquiryDetails/{PurchaseEstimationEnquiryId}:
 *   get:
 *     summary: Get purchase enquiry estimation by ID
 *     tags: [PurchaseEstimationEnquiry]
 *     description: Retrieve purchase enquiry estimation based on the PurchaseEstimationEnquiryId passed in the request parameters.
 *     parameters:
 *       - in: path
 *         name: PurchaseEstimationEnquiryId
 *         required: true
 *         description: ID of the purchase enquiry estimation
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Purchase enquiry estimation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEnquiryResponse'
 *       404:
 *         description: Purchase enquiry not found
 */
router.route("/getSinglePurchaseEstimationEnquiryDetails/:PurchaseEstimationEnquiryId").get(getSinglePurchaseEstimationEnquiryDetails)


/**
 * @swagger
 * path:
 *   /getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId/{AllocatedEmployeeId}:
 *     get:
 *       summary: Get Purchase Estimation Enquiry Details by Allocated Employee Id
 *       tags: [PurchaseEstimationEnquiry]
 *       parameters:
 *         - in: path
 *           name: AllocatedEmployeeId
 *           required: true
 *           schema:
 *             type: string
 *           description: Allocated Employee Id
 *       responses:
 *         '200':
 *           description: Successful response
 *         '400':
 *           description: Bad request
 */
router.route("/getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId/:AllocatedEmployeeId").get(getPurchaseEstimationEnquiryDetailsbyAllocatedEmployeeId)
/**
 * @swagger
 * /api/v1/AllocatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Allocate Purchase Estimation Enquiry Details
 *     tags: [Purchase Estimation Enquiry]
 *     requestBody:
 *       description: Purchase Estimation Enquiry details for allocation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PurchaseEstimationEnquiryId:
 *                 type: integer
 *                 description: Unique identifier for the Purchase Estimation Enquiry.
 *               AllocatedEmployeeId:
 *                 type: string
 *                 description: ID of the employee to allocate.
 *               AllocatedRemark:
 *                 type: string
 *                 description: Remark for the allocation.
 *             required:
 *               - PurchaseEstimationEnquiryId
 *               - AllocatedEmployeeId
 *               - AllocatedRemark
 *     responses:
 *       200:
 *         description: Allocation successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Allocation successful
 *               data:
 *                 PurchaseEstimationEnquiryId: 123
 *                 AllocatedEmployeeId: "employee123"
 *                 AllocatedRemark: "Allocation successful"
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Something went wrong
 *               data: null
 */
router.route("/AllocatePurchaseEstimationEnquiryDetails").post(AllocatePurchaseEstimationEnquiryDetails)
/**
 * @swagger
 * /api/v1/DeallocatePurchaseEstimationEnquiryDetails:
 *   post:
 *     summary: Deallocate Purchase Estimation Enquiry Details
 *     tags: [Purchase Estimation Enquiry]
 *     requestBody:
 *       description: Purchase Estimation Enquiry details for deallocation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PurchaseEstimationEnquiryId:
 *                 type: integer
 *                 description: Unique identifier for the Purchase Estimation Enquiry.
 *             required:
 *               - PurchaseEstimationEnquiryId
 *     responses:
 *       200:
 *         description: Deallocation successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Deallocation successful
 *               data:
 *                 PurchaseEstimationEnquiryId: 123
 *       500:
 *         description: Something went wrong
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Something went wrong
 *               data: null
 */
router.route("/DeallocatePurchaseEstimationEnquiryDetails").post(DeallocatePurchaseEstimationEnquiryDetails);

module.exports = router

