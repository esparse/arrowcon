const express = require("express")
const {getCapacity} = require("../controller/Capacity_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Capacity:
 *       type: object
 *       required:
 *         - CapacityId
 *         - Capacity
 *       properties:
 *         CapacityId:
 *           type: integer
 *           description: CapacityId
 *         Capacity:
 *           type: string
 *           description: Capacity
 *       example:
 *         CapacityId: 1
 *         Capacity: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getCapacity:
 *   get:
 *     summary: get all Capacity
 *     tags: [Capacity]
 *     responses:
 *       200:
 *         description: get All Capacity
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Capacity'
 */
router.route("/getCapacity").get(getCapacity)



module.exports = router

