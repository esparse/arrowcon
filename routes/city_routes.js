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
 *         - Cityid
 *         - City
 *         - State
 *         - StateId
 *       properties:
 *         Cityid:
 *           type: string
 *           description: City@gmail.com
 *         City:
 *           type: string
 *           description: City
 *         State:
 *           type: string
 *           description: State
 *         StateId:
 *           type: string
 *           description: State
 *       example:
 *         Cityid: 1
 *         City: Mumbai    
 *         State: Maharashtra     
 *         StateId: 21     
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
 * /api/v1/getCityByStateId/{StateId}:
 *   get:
 *     summary: Get cities by state ID
 *     tags: [City]
 *     description: Retrieve a list of cities by their associated state ID.
 *     parameters:
 *       - in: path
 *         name: StateId
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

router.route("/getCityByStateId").post( getCityByStateId)

router.route("/deleteMany").delete(deleteAllCity)



module.exports = router