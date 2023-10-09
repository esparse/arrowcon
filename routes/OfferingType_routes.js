const express = require("express")
const {getOfferingType} = require("../controller/OfferingType_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     OfferingType:
 *       type: object
 *       required:
 *         - OfferingTypeId
 *         - OfferingType
 *       properties:
 *         OfferingTypeId:
 *           type: integer
 *           description: OfferingTypeId
 *         OfferingType:
 *           type: string
 *           description: OfferingType
 *       example:
 *         OfferingTypeId: 1
 *         OfferingType: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getOfferingType:
 *   get:
 *     summary: get all OfferingType
 *     tags: [OfferingType]
 *     responses:
 *       200:
 *         description: get All OfferingType
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/OfferingType'
 */
router.route("/getOfferingType").get(getOfferingType)



module.exports = router

