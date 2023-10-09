const express = require("express")
const {getEquipment} = require("../controller/Equipment_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       required:
 *         - EquipmentId
 *         - Equipment
 *       properties:
 *         EquipmentId:
 *           type: integer
 *           description: EquipmentId
 *         Equipment:
 *           type: string
 *           description: Equipment
 *       example:
 *         EquipmentId: 1
 *         Equipment: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getEquipment:
 *   get:
 *     summary: get all Equipment
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: get All Equipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 */
router.route("/getEquipment").get(getEquipment)



module.exports = router

