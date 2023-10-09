const express = require("express")
const {getEnquiryType} = require("../controller/EnquiryType_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     EnquiryType:
 *       type: object
 *       required:
 *         - EnquiryTypeId
 *         - EnquiryType
 *       properties:
 *         EnquiryTypeId:
 *           type: integer
 *           description: EnquiryTypeId
 *         EnquiryType:
 *           type: string
 *           description: EnquiryType
 *       example:
 *         EnquiryTypeId: 1
 *         EnquiryType: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getEnquiryType:
 *   get:
 *     summary: get all EnquiryType
 *     tags: [EnquiryType]
 *     responses:
 *       200:
 *         description: get All EnquiryType
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/EnquiryType'
 */
router.route("/getEnquiryType").get(getEnquiryType)



module.exports = router

