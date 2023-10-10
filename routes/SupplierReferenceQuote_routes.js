const express = require("express")
const {getSupplierReferenceQuote} = require("../controller/SupplierReferenceQuote_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     SupplierReferenceQuote:
 *       type: object
 *       required:
 *         - SupplierReferenceQuoteId
 *         - SupplierReferenceQuote
 *       properties:
 *         SupplierReferenceQuoteId:
 *           type: integer
 *           description: SupplierReferenceQuoteId
 *         SupplierReferenceQuote:
 *           type: string
 *           description: SupplierReferenceQuote
 *       example:
 *         SupplierReferenceQuoteId: 1
 *         SupplierReferenceQuote: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getSupplierReferenceQuote:
 *   get:
 *     summary: get all SupplierReferenceQuote
 *     tags: [SupplierReferenceQuote]
 *     responses:
 *       200:
 *         description: get All SupplierReferenceQuote
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SupplierReferenceQuote'
 */
router.route("/getSupplierReferenceQuote").get(getSupplierReferenceQuote)



module.exports = router

