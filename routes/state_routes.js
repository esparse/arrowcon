const express = require("express")
const {getStateWithCity,getAllState} =require("../controller/state_controller")
const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     State:
 *       type: object
 *       required:
 *         - State
 *         - isoCode
 *         - countryCode
 *         - latitude
 *         - longitude
 *         - StateId
 *       properties:
 *         State:
 *           type: string
 *           description: isoCode@gmail.com
 *         isoCode:
 *           type: string
 *           description: isoCode
 *         countryCode:
 *           type: string
 *           description: countryCode
 *         latitude:
 *           type: string
 *           description: State
 *         longitude:
 *           type: string
 *           description: longitude
 *         StateId:
 *           type: string
 *           description: StateId
 *       example:
 *         State: Andaman and Nicobar Islands
 *         isoCode: AN    
 *         countryCode: IN     
 *         latitude: 11.7400867     
 *         longitude: 92.6586401     
 *         StateId: 1     
 *
 */
/**
 * @swagger
 * /api/v1/getAllState:
 *   get:
 *     summary: get all State
 *     tags: [State]
 *     responses:
 *       200:
 *         description: get All State
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/State'
 */
router.route("/getAllState").get( getAllState)


router.route("/getStateWithCity").get( getStateWithCity)

module.exports = router