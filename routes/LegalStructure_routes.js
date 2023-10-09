const express = require("express")
const {getLegalStructure} = require("../controller/LegalStructure_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     LegalStructure:
 *       type: object
 *       required:
 *         - LegalStructureId
 *         - LegalStructure
 *       properties:
 *         LegalStructureId:
 *           type: integer
 *           description: LegalStructureId
 *         LegalStructure:
 *           type: string
 *           description: LegalStructure
 *       example:
 *         LegalStructureId: 1
 *         LegalStructure: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getLegalStructure:
 *   get:
 *     summary: get all LegalStructure
 *     tags: [LegalStructure]
 *     responses:
 *       200:
 *         description: get All LegalStructure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/LegalStructure'
 */
router.route("/getLegalStructure").get(getLegalStructure)



module.exports = router

