const express = require("express")
const {getMainSteamTemperature} = require("../controller/MainSteamTemperature_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     MainSteamTemperature:
 *       type: object
 *       required:
 *         - MainSteamTemperatureId
 *         - MainSteamTemperature
 *       properties:
 *         MainSteamTemperatureId:
 *           type: integer
 *           description: MainSteamTemperatureId
 *         MainSteamTemperature:
 *           type: string
 *           description: MainSteamTemperature
 *       example:
 *         MainSteamTemperatureId: 1
 *         MainSteamTemperature: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getMainSteamTemperature:
 *   get:
 *     summary: get all MainSteamTemperature
 *     tags: [MainSteamTemperature]
 *     responses:
 *       200:
 *         description: get All MainSteamTemperature
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/MainSteamTemperature'
 */
router.route("/getMainSteamTemperature").get(getMainSteamTemperature)



module.exports = router

