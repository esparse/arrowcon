const express = require("express")
const {getEnquiryStatus} = require("../controller/EnquiryStatus_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     EnquiryStatus:
 *       type: object
 *       required:
 *         - EnquiryStatusId
 *         - EnquiryStatus
 *       properties:
 *         EnquiryStatusId:
 *           type: integer
 *           description: EnquiryStatusId
 *         EnquiryStatus:
 *           type: string
 *           description: EnquiryStatus
 *       example:
 *         EnquiryStatusId: 1
 *         EnquiryStatus: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getEnquiryStatus:
 *   get:
 *     summary: get all EnquiryStatus
 *     tags: [EnquiryStatus]
 *     responses:
 *       200:
 *         description: get All EnquiryStatus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/EnquiryStatus'
 */
router.route("/getEnquiryStatus").get(getEnquiryStatus)



module.exports = router

