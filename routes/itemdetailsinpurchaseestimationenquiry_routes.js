const express = require("express")
const {CreateitemdetailsinpurchaseestimationenquiryDetails,viewitemdetailsinpurchaseestimationenquiryDetails,deleteitemdetailsinpurchaseestimationenquiryDetails,updateitemdetailsinpurchaseestimationenquiryDetails,getSingleitemdetailsinpurchaseestimationenquiryDetails} = require("../controller/itemdetailsinpurchaseestimationenquiry_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     itemdetailsinpurchaseestimationenquiry:
 *       type: object
 *       required:
 *         - itemdetailsinpurchaseestimationenquiryId
 *         - ItemDetails
 *         - SuplierId
 *         - QuotationNo
 *         - QuotationDate
 *         - BasePrice
 *         - Discount
 *         - BasePriceAfterDiscount
 *         - PF
 *         - VAT
 *         - OtherTaxes
 *         - StatutoryRegulationCharges
 *         - FinalPrice
 *         - TransportationCost
 *         - DeliveryPeriodInWeeks
 *         - PaymentTerms
 *         - WarrantyYr
 *         - Remarks
 *       properties:
 *         itemdetailsinpurchaseestimationenquiryId:
 *           type: integer
 *           description: itemdetailsinpurchaseestimationenquiryId
 *         ItemDetails:
 *           type: string
 *           description: ItemDetails
 *         QuotationDate:
 *           type: string
 *           description: QuotationDate
 *         SuplierId:
 *           type: string
 *           description: itemdetailsinpurchaseestimationenquiryId
 *         QuotationNo:
 *           type: string
 *           description: QuotationNo
 *         BasePrice:
 *           type: string
 *           description: itemdetailsinpurchaseestimationenquiryId
 *         Discount:
 *           type: string
 *           description: itemdetailsinpurchaseestimationenquiryId
 *         BasePriceAfterDiscount:
 *           type: string
 *           description: BasePriceAfterDiscount
 *         PF:
 *           type: string
 *           description: PF
 *         VAT:
 *           type: string
 *           description: PF
 *         OtherTaxes:
 *           type: string
 *           description: PF
 *         StatutoryRegulationCharges:
 *           type: string
 *           description: StatutoryRegulationCharges
 *         FinalPrice:
 *           type: string
 *           description: FinalPrice
 *         TransportationCost:
 *           type: string
 *           description: FinalPrice
 *         DeliveryPeriodInWeeks:
 *           type: string
 *           description: FinalPrice
 *         PaymentTerms:
 *           type: string
 *           description: FinalPrice
 *         WarrantyYr:
 *           type: string
 *           description: FinalPrice
 *         Remarks:
 *           type: string
 *           description: FinalPrice
 *       example:
 *         itemdetailsinpurchaseestimationenquiryId: autoGenerated
 *         ItemDetails: ITEM01
 *         SuplierId: VD101001
 *         QuotationNo: 98745
 *         QuotationDate: 05-12-23
 *         BasePrice: 43500
 *         Discount: 0
 *         BasePriceAfterDiscount: 43500
 *         PF: 1000
 *         VAT: 7
 *         OtherTaxes: 1100
 *         StatutoryRegulationCharges : 0
 *         FinalPrice : 48850
 *         TransportationCost : extra
 *         DeliveryPeriodInWeeks : 5
 *         PaymentTerms : 1. 50% Advance
 *         WarrantyYr : 1
 *         Remarks : N/A
 *         
 *        
 *
 */

/**
 * @swagger
 * /api/v1/viewitemdetailsinpurchaseestimationenquiryDetails:
 *   get:
 *     summary: get all itemdetailsinpurchaseestimationenquiry
 *     tags: [itemdetailsinpurchaseestimationenquiry]
 *     responses:
 *       200:
 *         description: get All itemdetailsinpurchaseestimationenquiry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/itemdetailsinpurchaseestimationenquiry'
 */
router.route("/viewitemdetailsinpurchaseestimationenquiryDetails").get(viewitemdetailsinpurchaseestimationenquiryDetails)


/**
 * @swagger
 * /api/v1/CreateitemdetailsinpurchaseestimationenquiryDetails:
 *   post:
 *     summary: add a new itemdetailsinpurchaseestimationenquiry
 *     tags: [itemdetailsinpurchaseestimationenquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/itemdetailsinpurchaseestimationenquiry'
 *     responses:
 *       200:
 *         description: create itemdetailsinpurchaseestimationenquiry successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/itemdetailsinpurchaseestimationenquiry'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateitemdetailsinpurchaseestimationenquiryDetails").post(CreateitemdetailsinpurchaseestimationenquiryDetails)

  /**
 * @swagger
 * /api/v1/deleteitemdetailsinpurchaseestimationenquiryDetails/{itemdetailsinpurchaseestimationenquiryId}:
 *   delete:
 *     summary: Delete an itemdetailsinpurchaseestimationenquiry
 *     tags: [itemdetailsinpurchaseestimationenquiry]
 *     parameters:
 *         - in: path
 *           ItemDetails: itemdetailsinpurchaseestimationenquiryId
 *           required: true
 *           description: itemdetailsinpurchaseestimationenquiryId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: itemdetailsinpurchaseestimationenquiry delete successfully
 *   
 */
router.route("/deleteitemdetailsinpurchaseestimationenquiryDetails/:itemdetailsinpurchaseestimationenquiryId").delete(deleteitemdetailsinpurchaseestimationenquiryDetails)

/**
* @swagger
* /api/v1/updateitemdetailsinpurchaseestimationenquiryDetails:
*   post:
*     summary: upQuotationDate itemdetailsinpurchaseestimationenquiry Details
*     tags: [itemdetailsinpurchaseestimationenquiry]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/itemdetailsinpurchaseestimationenquiry'
*     responses:
*       200:
*         description: update itemdetailsinpurchaseestimationenquiry Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/itemdetailsinpurchaseestimationenquiry'
*       500:
*         description: Some server error
*/
router.route("/updateitemdetailsinpurchaseestimationenquiryDetails").post(updateitemdetailsinpurchaseestimationenquiryDetails)
/**
 * @swagger
 * /api/v1/getSingleitemdetailsinpurchaseestimationenquiryDetails/{itemdetailsinpurchaseestimationenquiryId}:
 *   get:
 *     summary: Get a itemdetailsinpurchaseestimationenquiry by ID
 *     tags: [itemdetailsinpurchaseestimationenquiry]
 *     description: Retrieve a itemdetailsinpurchaseestimationenquiry by their unique ID.
 *     parameters:
 *       - in: path
 *         ItemDetails: itemdetailsinpurchaseestimationenquiryId
 *         required: true
 *         description: ID of the itemdetailsinpurchaseestimationenquiry to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the itemdetailsinpurchaseestimationenquiry
 *       404:
 *         description: itemdetailsinpurchaseestimationenquiry not found
 */
router.route("/getSingleitemdetailsinpurchaseestimationenquiryDetails/:itemdetailsinpurchaseestimationenquiryId").get(getSingleitemdetailsinpurchaseestimationenquiryDetails)
module.exports = router
