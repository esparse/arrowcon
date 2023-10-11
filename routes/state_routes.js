const express = require("express")
const {getStateWithCity,getAllState,getAllStatebyCountryID} =require("../controller/state_controller")
const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     State:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - country_id
 *         - country_code
 *         - country_name
 *         - state_code
 *         - latitude
 *       properties:
 *         id:
 *           type: string
 *           description: name@gmail.com
 *         name:
 *           type: string
 *           description: name
 *         country_id:
 *           type: string
 *           description: country_id
 *         country_code:
 *           type: string
 *           description: State
 *         country_name:
 *           type: string
 *           description: country_name
 *         state_code:
 *           type: string
 *           description: state_code
 *         latitude:
 *           type: string
 *           description: latitude
 *       example:
 *         id: 3901
 *         name: Badakhshan    
 *         country_id: 1     
 *         country_code:  AF   
 *         country_name: Afghanistan  
 *         state_code: BDS     
 *         latitude: 11.7400867      
 *         longitude: 92.6586401        
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
/**
 * @swagger
 * /api/v1/getAllStatebyCountryID/{country_id}:
 *   get:
 *     summary: Get a list of states by country ID
 *     tags: [State]
 *     parameters:
 *       - in: path
 *         name: country_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the country for which you want to retrieve states
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - State1
 *               - State2
 *               - State3
 *       '404':
 *         description: Country not found
 *         content:
 *           application/json:
 *             example:
 *               error: Country not found
 */

router.route("/getAllStatebyCountryID/:country_id").get( getAllStatebyCountryID)

module.exports = router