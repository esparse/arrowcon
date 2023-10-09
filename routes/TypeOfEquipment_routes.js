const express = require("express")
const {getTypeOfEquipment} = require("../controller/TypeOfEquipment_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     TypeOfEquipment:
 *       type: object
 *       required:
 *         - TypeOfEquipmentId
 *         - TypeOfEquipment
 *       properties:
 *         TypeOfEquipmentId:
 *           type: integer
 *           description: TypeOfEquipmentId
 *         TypeOfEquipment:
 *           type: string
 *           description: TypeOfEquipment
 *       example:
 *         TypeOfEquipmentId: 1
 *         TypeOfEquipment: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getTypeOfEquipment:
 *   get:
 *     summary: get all TypeOfEquipment
 *     tags: [TypeOfEquipment]
 *     responses:
 *       200:
 *         description: get All TypeOfEquipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TypeOfEquipment'
 */
router.route("/getTypeOfEquipment").get(getTypeOfEquipment)



module.exports = router

