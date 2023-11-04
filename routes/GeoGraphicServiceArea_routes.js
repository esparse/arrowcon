const express = require("express")
const {getGeoGraphicServiceArea} = require("../controller/GeoGraphicServiceArea_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     GeoGraphicServiceArea:
 *       type: object
 *       required:
 *         - GeoGraphicServiceAreaId
 *         - GeoGraphicServiceArea
 *       properties:
 *         GeoGraphicServiceAreaId:
 *           type: integer
 *           description: GeoGraphicServiceAreaId
 *         GeoGraphicServiceArea:
 *           type: string
 *           description: GeoGraphicServiceArea
 *       example:
 *         GeoGraphicServiceAreaId: 1
 *         GeoGraphicServiceArea: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getGeoGraphicServiceArea:
 *   get:
 *     summary: get all GeoGraphicServiceArea
 *     tags: [GeoGraphicServiceArea]
 *     responses:
 *       200:
 *         description: get All GeoGraphicServiceArea
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/GeoGraphicServiceArea'
 */
router.route("/getGeoGraphicServiceArea").get(getGeoGraphicServiceArea)



module.exports = router

