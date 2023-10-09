const express = require("express")
const {getCustomerCategory} = require("../controller/CustomerCategory_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     CustomerCategory:
 *       type: object
 *       required:
 *         - CustomerCategoryId
 *         - CustomerCategory
 *       properties:
 *         CustomerCategoryId:
 *           type: integer
 *           description: CustomerCategoryId
 *         CustomerCategory:
 *           type: string
 *           description: CustomerCategory
 *       example:
 *         CustomerCategoryId: 1
 *         CustomerCategory: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getCustomerCategory:
 *   get:
 *     summary: get all CustomerCategory
 *     tags: [CustomerCategory]
 *     responses:
 *       200:
 *         description: get All CustomerCategory
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/CustomerCategory'
 */
router.route("/getCustomerCategory").get(getCustomerCategory)



module.exports = router

