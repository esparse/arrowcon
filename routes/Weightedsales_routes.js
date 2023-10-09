const express = require("express")
const {getWeightedsales} = require("../controller/Weightedsales_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Weightedsales:
 *       type: object
 *       required:
 *         - WeightedsalesId
 *         - Weightedsales
 *       properties:
 *         WeightedsalesId:
 *           type: integer
 *           description: WeightedsalesId
 *         Weightedsales:
 *           type: string
 *           description: Weightedsales
 *       example:
 *         WeightedsalesId: 1
 *         Weightedsales: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getWeightedsales:
 *   get:
 *     summary: get all Weightedsales
 *     tags: [Weightedsales]
 *     responses:
 *       200:
 *         description: get All Weightedsales
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Weightedsales'
 */
router.route("/getWeightedsales").get(getWeightedsales)



module.exports = router

