const express = require("express")
const {getremark} = require("../controller/remark_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     remark:
 *       type: object
 *       required:
 *         - remarkId
 *         - remark
 *       properties:
 *         remarkId:
 *           type: integer
 *           description: remarkId
 *         remark:
 *           type: string
 *           description: remark
 *       example:
 *         remarkId: 1
 *         remark: Domestic
 *
 */

/**
 * @swagger
 * /api/v1/getremark:
 *   get:
 *     summary: get all remark
 *     tags: [remark]
 *     responses:
 *       200:
 *         description: get All remark
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/remark'
 */
router.route("/getremark").get(getremark)



module.exports = router

