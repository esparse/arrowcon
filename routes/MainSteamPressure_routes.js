const express = require("express")
const {getMainSteamPressure} = require("../controller/MainSteamPressure_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     MainSteamPressure:
 *       type: object
 *       required:
 *         - MainSteamPressureId
 *         - MainSteamPressure
 *       properties:
 *         MainSteamPressureId:
 *           type: integer
 *           description: MainSteamPressureId
 *         MainSteamPressure:
 *           type: string
 *           description: MainSteamPressure
 *       example:
 *         MainSteamPressureId: 1
 *         MainSteamPressure: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getMainSteamPressure:
 *   get:
 *     summary: get all MainSteamPressure
 *     tags: [MainSteamPressure]
 *     responses:
 *       200:
 *         description: get All MainSteamPressure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/MainSteamPressure'
 */
router.route("/getMainSteamPressure").get(getMainSteamPressure)



module.exports = router

