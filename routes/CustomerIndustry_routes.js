const express = require("express")
const {getCustomerIndustry} = require("../controller/CustomerIndustry_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     CustomerIndustry:
 *       type: object
 *       required:
 *         - CustomerIndustryId
 *         - CustomerIndustry
 *       properties:
 *         CustomerIndustryId:
 *           type: integer
 *           description: CustomerIndustryId
 *         CustomerIndustry:
 *           type: string
 *           description: CustomerIndustry
 *       example:
 *         CustomerIndustryId: 1
 *         CustomerIndustry: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getCustomerIndustry:
 *   get:
 *     summary: get all CustomerIndustry
 *     tags: [CustomerIndustry]
 *     responses:
 *       200:
 *         description: get All CustomerIndustry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/CustomerIndustry'
 */
router.route("/getCustomerIndustry").get(getCustomerIndustry)



module.exports = router

