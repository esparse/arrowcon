const express = require("express")
const {getInspection} = require("../controller/Inspection_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Inspection:
 *       type: object
 *       required:
 *         - InspectionId
 *         - Inspection
 *       properties:
 *         InspectionId:
 *           type: integer
 *           description: InspectionId
 *         Inspection:
 *           type: string
 *           description: Inspection
 *       example:
 *         InspectionId: 1
 *         Inspection: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getInspection:
 *   get:
 *     summary: get all Inspection
 *     tags: [Inspection]
 *     responses:
 *       200:
 *         description: get All Inspection
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Inspection'
 */
router.route("/getInspection").get(getInspection)



module.exports = router

