const express = require("express")
const {getFreightInsurance} = require("../controller/FreightInsurance_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     FreightInsurance:
 *       type: object
 *       required:
 *         - FreightInsuranceId
 *         - FreightInsurance
 *       properties:
 *         FreightInsuranceId:
 *           type: integer
 *           description: FreightInsuranceId
 *         FreightInsurance:
 *           type: string
 *           description: FreightInsurance
 *       example:
 *         FreightInsuranceId: 1
 *         FreightInsurance: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getFreightInsurance:
 *   get:
 *     summary: get all FreightInsurance
 *     tags: [FreightInsurance]
 *     responses:
 *       200:
 *         description: get All FreightInsurance
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FreightInsurance'
 */
router.route("/getFreightInsurance").get(getFreightInsurance)



module.exports = router

