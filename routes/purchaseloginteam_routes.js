const express = require("express")
const {purchaseteamlogin} = require("../controller/purchaseLogin_controller")
// const {getallcountrywithnameandid} = require("..//_seeder/data/country")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     purchaseteamlogin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - RoleId
 *       properties:
 *         Email:
 *           type: string
 *           description: purchaseteamlogin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         RoleId:
 *           type: string
 *           description: password
 *       example:
 *         Email: arrowcon@gmail.com
 *         Password: 1234     
 *         RoleId: RD101     
 *
 */
/**
 * @swagger
 * /api/v1/purchaseteamlogin:
 *   post:
 *     summary: purchaseteamlogin 
 *     tags: [purchaseteamlogin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/purchaseteamlogin'
 *     responses:
 *       200:
 *         description: purchaseteamlogin login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchaseteamlogin'
 *       500:
 *         description: Some server error
 */
 router.route("/purchaseteamlogin").post(purchaseteamlogin)
//  router.route("/getallcountrywithnameandid").get(getallcountrywithnameandid)

module.exports = router

