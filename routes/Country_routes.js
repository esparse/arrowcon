const express = require("express")
const {getAllCountry,getsingleCountryDetailsbyCountryId} = require("../controller/Country_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       required:
 *         - CountryId
 *         - Country
 *       properties:
 *         CountryId:
 *           type: integer
 *           description: CountryId
 *         Country:
 *           type: string
 *           description: Country
 *       example:
 *         CountryId: 1
 *         Country: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getAllCountry:
 *   get:
 *     summary: get all Country
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: get All Country
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Country'
 */
router.route("/getAllCountry").get(getAllCountry)
/**
 * @swagger
 * /api/v1/getsingleCountryDetailsbyCountryId/{id}:
 *   get:
 *     summary: Get a Country by ID
 *     tags: [Country]
 *     description: Retrieve a Country by their unique ID.
 *     parameters:
 *       - in: path
 *         name: CountryId
 *         required: true
 *         description: ID of the Country to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the Country
 *       404:
 *         description: Country not found
 */
  
router.route("/getsingleCountryDetailsbyCountryId/:id").get(getsingleCountryDetailsbyCountryId)



module.exports = router

