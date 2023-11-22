const express = require("express")
const {getProjectType} = require("../controller/ProjectType_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectType:
 *       type: object
 *       required:
 *         - ProjectTypeId
 *         - ProjectType
 *       properties:
 *         ProjectTypeId:
 *           type: integer
 *           description: ProjectTypeId
 *         ProjectType:
 *           type: string
 *           description: ProjectType
 *       example:
 *         ProjectTypeId: 1
 *         ProjectType: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getProjectType:
 *   get:
 *     summary: get all ProjectType
 *     tags: [ProjectType]
 *     responses:
 *       200:
 *         description: get All ProjectType
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/ProjectType'
 */
router.route("/getProjectType").get(getProjectType)



module.exports = router

