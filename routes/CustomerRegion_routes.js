const express = require("express")
const {getCustomerRegion} = require("../controller/CustomerRegion_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     CustomerRegion:
 *       type: object
 *       required:
 *         - CustomerRegionId
 *         - CustomerRegion
 *       properties:
 *         CustomerRegionId:
 *           type: integer
 *           description: CustomerRegionId
 *         CustomerRegion:
 *           type: string
 *           description: CustomerRegion
 *       example:
 *         CustomerRegionId: 1
 *         CustomerRegion: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getCustomerRegion:
 *   get:
 *     summary: get all CustomerRegion
 *     tags: [CustomerRegion]
 *     responses:
 *       200:
 *         description: get All CustomerRegion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/CustomerRegion'
 */
router.route("/getCustomerRegion").get(getCustomerRegion)



module.exports = router

