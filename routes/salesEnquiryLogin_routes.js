const express = require("express")
const {SalesEnquirylogin} = require("../controller/salesEnquiryLogin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     SalesEnquiry:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: SalesEnquiry@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         Email: arrowcon@gmail.com
 *         Password: 1234     
 *
 */
/**
 * @swagger
 * /api/v1/SalesEnquirylogin:
 *   post:
 *     summary: SalesEnquiry login
 *     tags: [SalesEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesEnquiry'
 *     responses:
 *       200:
 *         description: SalesEnquiry login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesEnquiry'
 *       500:
 *         description: Some server error
 */
 router.route("/SalesEnquirylogin").post(SalesEnquirylogin)

module.exports = router

