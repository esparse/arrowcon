const express = require("express")
const {getInstallationType} = require("../controller/InstallationType_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     InstallationType:
 *       type: object
 *       required:
 *         - InstallationTypeId
 *         - InstallationType
 *       properties:
 *         InstallationTypeId:
 *           type: integer
 *           description: InstallationTypeId
 *         InstallationType:
 *           type: string
 *           description: InstallationType
 *       example:
 *         InstallationTypeId: 1
 *         InstallationType: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getInstallationType:
 *   get:
 *     summary: get all InstallationType
 *     tags: [InstallationType]
 *     responses:
 *       200:
 *         description: get All InstallationType
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/InstallationType'
 */
router.route("/getInstallationType").get(getInstallationType)



module.exports = router

