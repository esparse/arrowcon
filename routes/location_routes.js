const express = require("express")
const {getlocation} = require("../controller/location_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     location:
 *       type: object
 *       required:
 *         - locationId
 *         - location
 *       properties:
 *         locationId:
 *           type: integer
 *           description: locationId
 *         location:
 *           type: string
 *           description: location
 *       example:
 *         locationId: 1
 *         location: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getlocation:
 *   get:
 *     summary: get all location
 *     tags: [location]
 *     responses:
 *       200:
 *         description: get All location
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/location'
 */
router.route("/getlocation").get(getlocation)



module.exports = router

