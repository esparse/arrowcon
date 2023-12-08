const express = require("express")
const {Adminlogin} = require("../controller/AdminLogin_controller")
// const {getallcountrywithnameandid} = require("..//_seeder/data/country")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       required:
 *         - EmailId
 *         - Password
 *       properties:
 *         EmailId:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         EmailId: arrowcon@gmail.com
 *         Password: 1234     
 *
 */
/**
 * @swagger
 * /api/v1/Adminlogin:
 *   post:
 *     summary: admin login
 *     tags: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description: admin login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin'
 *       500:
 *         description: Some server error
 */
 router.route("/Adminlogin").post(Adminlogin)
//  router.route("/getallcountrywithnameandid").get(getallcountrywithnameandid)

module.exports = router

