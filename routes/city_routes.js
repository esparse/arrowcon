const express = require("express")
const {getAllCity,getCityByStateId,deleteAllCity} =require("../controller/city_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - state_id
 *         - state_code
 *         - state_name
 *         - country_id
 *         - country_code
 *         - country_name
 *         - latitude
 *         - longitude
 *       properties:
 *         id:
 *           type: string
 *           description: City@gmail.com
 *         name:
 *           type: string
 *           description: name
 *         state_id:
 *           type: string
 *           description: name
 *         state_code:
 *           type: string
 *           description: state_code
 *         state_name:
 *           type: string
 *           description: State
 *         country_id:
 *           type: string
 *           description: State
 *         country_code:
 *           type: string
 *           description: State
 *         country_name:
 *           type: string
 *           description: State
 *         latitude:
 *           type: string
 *           description: State
 *         longitude:
 *           type: string
 *           description: State
 *       example:
 *         id: 52
 *         name: Ashkāsham    
 *         state_id: 3901     
 *         state_code: BDS     
 *         state_name: Badakhshan     
 *         country_id: 1     
 *         country_code: AF     
 *         country_name: Afghanistan     
 *         latitude: 36.68333000     
 *         longitude: 71.53333000     
 *
 */
/**
 * @swagger
 * /api/v1/getAllCity:
 *   get:
 *     summary: get all City
 *     tags: [City]
 *     responses:
 *       200:
 *         description: get All City
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/City'
 */
router.route("/getAllCity").get( getAllCity)

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         state:
 *           type: string
 *     CitiesByStateResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/City'
 */

/**
 * @swagger
 * /api/v1/getCityByStateId/{state_id}:
 *   get:
 *     summary: Get cities by state ID
 *     tags: [City]
 *     description: Retrieve a list of cities by their associated state ID.
 *     parameters:
 *       - in: path
 *         name: state_id
 *         required: true
 *         description: ID of the state to retrieve cities for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of cities by state ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CitiesByStateResponse'
 *       404:
 *         description: State not found
 */

router.route("/getCityByStateId/:state_id").get( getCityByStateId)

router.route("/deleteMany").delete(deleteAllCity)



module.exports = router