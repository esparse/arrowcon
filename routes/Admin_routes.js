const express = require("express")
const {Adminlogin} = require("../controller/AdminLogin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       required:
 *         - Name
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         Name:
 *           type: string
 *           description: Name
 *       example:
 *         Name: admin
 *         Email: admin@gmail.com
 *         Password: admin@123     
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

module.exports = router

