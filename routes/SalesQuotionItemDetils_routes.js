const express = require("express")
const {CreateSalesQuotionItemDetilsDetails,viewSalesQuotionItemDetilsDetails,deleteSalesQuotionItemDetilsDetails,updateSalesQuotionItemDetilsDetails} = require("../controller/SalesQuotionItemDetils_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     SalesQuotionItemDetils:
 *       type: object
 *       required:
 *         - SalesQuotionItemDetilsId
 *         - SalesQuotionId
 *         - ProductService
 *         - Description
 *         - Quantity
 *         - UnitPriceTHB
 *         - SubTotalTHB
 
 *       properties:
 *         SalesQuotionItemDetilsId :
 *           type: integer
 *           description: SalesQuotionItemDetilsId
 *         SalesQuotionId:
 *           type: string
 *           description: SalesQuotionId
 *         ProductService:
 *           type: string
 *           description:  ProductService
 *         Description:
 *           type: string
 *           description:  Description
 *         Quantity:
 *           type: string
 *           description:  Quantity
 *         UnitPriceTHB:
 *           type: string
 *           description: UnitPriceTHB
 *        
 *         SubTotalTHB:
 *           type: string
 *           description: SubTotalTHB
 *       example:
 *         SalesQuotionItemDetilsId : autoGenerated
 *         SalesQuotionId : 98746
 *         ProductService : Iron
 *         Description : Mr.Chiewchan
 *         Quantity : 0817441009
 *         UnitPriceTHB : 0817441009
 *         OfferValidity : 0817441009
 *         SubTotalTHB : 0817441009
 */

/**
 * @swagger
 * /api/v1/viewSalesQuotionItemDetilsDetails:
 *   get:
 *     summary: get all SalesQuotionItemDetils
 *     tags: [SalesQuotionItemDetils]
 *     responses:
 *       200:
 *         description: get All SalesQuotionItemDetils
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SalesQuotionItemDetils'
 */
router.route("/viewSalesQuotionItemDetilsDetails").get(viewSalesQuotionItemDetilsDetails)


/**
 * @swagger
 * /api/v1/CreateSalesQuotionItemDetilsDetails:
 *   post:
 *     summary: add a new SalesQuotionItemDetils
 *     tags: [SalesQuotionItemDetils]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesQuotionItemDetils'
 *     responses:
 *       200:
 *         description: create SalesQuotionItemDetils successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesQuotionItemDetils'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateSalesQuotionItemDetilsDetails").post(CreateSalesQuotionItemDetilsDetails)

/**
 * @swagger
 * /api/v1/deleteSalesQuotionItemDetilsDetails/{SalesQuotionItemDetilsId}:
 *   delete:
 *     summary: Delete a SalesQuotionItemDetils
 *     tags: [SalesQuotionItemDetils]
 *     parameters:
 *       - in: path
 *         name: SalesQuotionItemDetilsId
 *         required: true
 *         description: SalesQuotionItemDetilsId is required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: SalesQuotionItemDetils deleted successfully
 */

router.route("/deleteSalesQuotionItemDetilsDetails/:SalesQuotionItemDetilsId").delete(deleteSalesQuotionItemDetilsDetails)

/**
* @swagger
* /api/v1/updateSalesQuotionItemDetilsDetails:
*   post:
*     summary: upAddress SalesQuotionItemDetils Details
*     tags: [SalesQuotionItemDetils]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/SalesQuotionItemDetils'
*     responses:
*       200:
*         description: upAddress SalesQuotionItemDetils Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/SalesQuotionItemDetils'
*       500:
*         description: Some server error
*/
router.route("/updateSalesQuotionItemDetilsDetails").post(updateSalesQuotionItemDetilsDetails)
module.exports = router
