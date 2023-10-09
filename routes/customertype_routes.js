const express = require("express")
const {getCustomertype} = require("../controller/getCustomerType_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Customertype:
 *       type: object
 *       required:
 *         - CustomerTypeId
 *         - CustomerType
 *       properties:
 *         CustomerTypeId:
 *           type: integer
 *           description: CustomerTypeId
 *         CustomerType:
 *           type: string
 *           description: CustomerType
 *       example:
 *         CustomerTypeId: 1
 *         CustomerType: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getCustomertype:
 *   get:
 *     summary: get all Customertype
 *     tags: [Customertype]
 *     responses:
 *       200:
 *         description: get All Customertype
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Customertype'
 */
router.route("/getCustomertype").get(getCustomertype)



module.exports = router

