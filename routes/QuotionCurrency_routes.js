
const express = require("express")
const {getQuotionCurrency} = require("../controller/QuotionCurrency_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     QuotionCurrency:
 *       type: object
 *       required:
 *         - QuotionCurrencyId
 *         - QuotionCurrency
 *       properties:
 *         QuotionCurrencyId:
 *           type: integer
 *           description: QuotionCurrencyId
 *         QuotionCurrency:
 *           type: string
 *           description: QuotionCurrency
 *       example:
 *         QuotionCurrencyId: 1
 *         QuotionCurrency: INR
 *
 */

/**
 * @swagger
 * /api/v1/getQuotionCurrency:
 *   get:
 *     summary: get all QuotionCurrency
 *     tags: [QuotionCurrency]
 *     responses:
 *       200:
 *         description: get All QuotionCurrency
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/QuotionCurrency'
 */
router.route("/getQuotionCurrency").get(getQuotionCurrency)



module.exports = router

