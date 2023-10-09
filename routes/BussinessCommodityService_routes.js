const express = require("express")
const {getBussinessCommodityService} = require("../controller/BussinessCommodityService_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     BussinessCommodityService:
 *       type: object
 *       required:
 *         - BussinessCommodityServiceId
 *         - BussinessCommodityService
 *       properties:
 *         BussinessCommodityServiceId:
 *           type: integer
 *           description: BussinessCommodityServiceId
 *         BussinessCommodityService:
 *           type: string
 *           description: BussinessCommodityService
 *       example:
 *         BussinessCommodityServiceId: 1
 *         BussinessCommodityService: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getBussinessCommodityService:
 *   get:
 *     summary: get all BussinessCommodityService
 *     tags: [BussinessCommodityService]
 *     responses:
 *       200:
 *         description: get All BussinessCommodityService
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/BussinessCommodityService'
 */
router.route("/getBussinessCommodityService").get(getBussinessCommodityService)



module.exports = router

