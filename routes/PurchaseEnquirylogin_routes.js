const express = require("express")
const {PurchaseEnquirylogin} = require("../controller/purchaseEnquirylogin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     PurchaseEnquiry:
 *       type: object
 *       required:
 *         - Name
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: PurchaseEnquiry@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         Name:
 *           type: string
 *           description: Name
 *       example:
 *         Name: PurchaseEnquiry
 *         Email: arrowcon@gmail.com
 *         Password: 1234     
 *
 */
/**
 * @swagger
 * /api/v1/PurchaseEnquirylogin:
 *   post:
 *     summary: PurchaseEnquiry login
 *     tags: [PurchaseEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEnquiry'
 *     responses:
 *       200:
 *         description: PurchaseEnquiry login successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEnquiry'
 *       500:
 *         description: Some server error
 */
 router.route("/PurchaseEnquirylogin").post(PurchaseEnquirylogin)

module.exports = router

