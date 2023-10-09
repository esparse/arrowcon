const express = require("express")
const {getPollutionControlEquipment} = require("../controller/PollutionControlEquipment_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     PollutionControlEquipment:
 *       type: object
 *       required:
 *         - PollutionControlEquipmentId
 *         - PollutionControlEquipment
 *       properties:
 *         PollutionControlEquipmentId:
 *           type: integer
 *           description: PollutionControlEquipmentId
 *         PollutionControlEquipment:
 *           type: string
 *           description: PollutionControlEquipment
 *       example:
 *         PollutionControlEquipmentId: 1
 *         PollutionControlEquipment: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getPollutionControlEquipment:
 *   get:
 *     summary: get all PollutionControlEquipment
 *     tags: [PollutionControlEquipment]
 *     responses:
 *       200:
 *         description: get All PollutionControlEquipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/PollutionControlEquipment'
 */
router.route("/getPollutionControlEquipment").get(getPollutionControlEquipment)



module.exports = router

