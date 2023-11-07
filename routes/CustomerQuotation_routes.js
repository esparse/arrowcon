const express = require("express")
const {CreateCustomerQuotationDetails,viewCustomerQuotationDetails,deleteCustomerQuotationDetails,updateCustomerQuotationDetails} = require("../controller/CustomerQuotation_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     CustomerQuotation:
 *       type: object
 *       required:
 *         - CustomerQuotationId
 *         - CustomerId
 *         - QuotationNo
 *         - Subject
 *         - Date
 *         - TotalAmount
 *         - ApprovedBy
 *         - IssuedBy
 *       properties:
 *         CustomerQuotationId:
 *           type: integer
 *           description: CustomerQuotationId
 *         CustomerId:
 *           type: string
 *           description: CustomerId
 *         QuotationNo:
 *           type: string
 *           description: QuotationNo
 *         ApprovedBy:
 *           type: string
 *           description: CustomerQuotationId
 *         Subject:
 *           type: string
 *           description: CustomerQuotationId
 *         Date:
 *           type: string
 *           description: CustomerQuotationId
 *         TotalAmount:
 *           type: string
 *           description: TotalAmount
 *         IssuedBy:
 *           type: string
 *           description: TotalAmount
 *       example:
 *         CustomerQuotationId: autoGenerated
 *         CustomerId: CustomerQuotation
 *         ApprovedBy: CustomerQuotation@example.com
 *         QuotationNo: 
 *         Subject: CS-IT
 *         Date: 02-03-2023
 *         TotalAmount: 2023
 *         IssuedBy: 2023
 *       
 *         
 *        
 *
 */

/**
 * @swagger
 * /api/v1/viewCustomerQuotationDetails:
 *   get:
 *     summary: get all CustomerQuotation
 *     tags: [CustomerQuotation]
 *     responses:
 *       200:
 *         description: get All CustomerQuotation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/CustomerQuotation'
 */
router.route("/viewCustomerQuotationDetails").get(viewCustomerQuotationDetails)


/**
 * @swagger
 * /api/v1/CreateCustomerQuotationDetails:
 *   post:
 *     summary: add a new CustomerQuotation
 *     tags: [CustomerQuotation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerQuotation'
 *     responses:
 *       200:
 *         description: create CustomerQuotation successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CustomerQuotation'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateCustomerQuotationDetails").post(CreateCustomerQuotationDetails)

  /**
 * @swagger
 * /api/v1/deleteCustomerQuotationDetails/{CustomerQuotationId}:
 *   delete:
 *     summary: Delete a CustomerQuotation
 *     tags: [CustomerQuotation]
 *     parameters:
 *         - in: path
 *           name: CustomerQuotationId
 *           required: true
 *           description: CustomerQuotationId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: CustomerQuotation deleted successfully
 */

router.route("/deleteCustomerQuotationDetails/:CustomerQuotationId").delete(deleteCustomerQuotationDetails)

/**
* @swagger
* /api/v1/updateCustomerQuotationDetails:
*   post:
*     summary: upQuotationNo CustomerQuotation Details
*     tags: [CustomerQuotation]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CustomerQuotation'
*     responses:
*       200:
*         description: update CustomerQuotation Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/CustomerQuotation'
*       500:
*         description: Some server error
*/
router.route("/updateCustomerQuotationDetails").post(updateCustomerQuotationDetails)
module.exports = router

