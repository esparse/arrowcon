const express = require("express")
const {getLiquidateddamages} = require("../controller/Liquidateddamages_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Liquidateddamages:
 *       type: object
 *       required:
 *         - LiquidateddamagesId
 *         - Liquidateddamages
 *       properties:
 *         LiquidateddamagesId:
 *           type: integer
 *           description: LiquidateddamagesId
 *         Liquidateddamages:
 *           type: string
 *           description: Liquidateddamages
 *       example:
 *         LiquidateddamagesId: 1
 *         Liquidateddamages: Yes
 *
 */

/**
 * @swagger
 * /api/v1/getLiquidateddamages:
 *   get:
 *     summary: get all Liquidateddamages
 *     tags: [Liquidateddamages]
 *     responses:
 *       200:
 *         description: get All Liquidateddamages
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Liquidateddamages'
 */
router.route("/getLiquidateddamages").get(getLiquidateddamages)



module.exports = router

