
const express = require("express")
const {getTypeOffuelfired} = require("../controller/TypeOffuelfired_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     TypeOffuelfired:
 *       type: object
 *       required:
 *         - TypeOffuelfiredId
 *         - TypeOffuelfired
 *       properties:
 *         TypeOffuelfiredId:
 *           type: integer
 *           description: TypeOffuelfiredId
 *         TypeOffuelfired:
 *           type: string
 *           description: TypeOffuelfired
 *       example:
 *         TypeOffuelfiredId: 1
 *         TypeOffuelfired: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getTypeOffuelfired:
 *   get:
 *     summary: get all TypeOffuelfired
 *     tags: [TypeOffuelfired]
 *     responses:
 *       200:
 *         description: get All TypeOffuelfired
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TypeOffuelfired'
 */
router.route("/getTypeOffuelfired").get(getTypeOffuelfired)



module.exports = router

