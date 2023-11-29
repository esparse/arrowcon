const express = require("express")
const {getStatus} = require("../controller/Status_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Status:
 *       type: object
 *       required:
 *         - StatusId
 *         - Status
 *       properties:
 *         StatusId:
 *           type: integer
 *           description: StatusId
 *         Status:
 *           type: string
 *           description: Status
 *       example:
 *         StatusId: 1
 *         Status: Iron
 *
 */

/**
 * @swagger
 * /api/v1/getStatus:
 *   get:
 *     summary: get all Status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: get All Status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Status'
 */
router.route("/getStatus").get(getStatus)



module.exports = router

