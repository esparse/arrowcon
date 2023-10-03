const express = require("express")
const SalesEnquiry = require("../model/SalesEnquiry_model")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     SalesEnquiry:
 *       type: object
 *       required:
 *         - Email
 *       properties:
 *         Email:
 *           type: string
 *           description: SalesEnquiry@gmail.com
 *       example:
 *         Email: SalesEnquiry@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/send-otp-SalesEnquiry:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [SalesEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesEnquiry'
 *     responses:
 *       200:
 *         description: verificationCode send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesEnquiry'
 *       500:
 *         description: Some server error
 */
router.post('/send-otp-SalesEnquiry', async (req, res) => {
    const { Email } = req.body;
    const verificationCode = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit verification code
  
    const SalesEnquiry = await SalesEnquiry.findOneAndUpdate(
      { Email },
      { verificationCode },
      { new: true, upsert: true }
    );
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          SalesEnquiry:"icaet20@nmiet.edu.in",
          pass:"Bonybaba125@", // Replace with your own email password
      },
    });
  
    const mailOptions = {
      from: "icaet20@nmiet.edu.in",
      to: Email,
      subject: 'Email Verification Code',
      text: `Your email verification code is ${verificationCode}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Verification code sent successfully');
      }
    });
  });
  
/**
 * @swagger
 * components:
 *   schemas:
 *     SalesEnquiry1:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - verificationCode
 *       properties:
 *         Email:
 *           type: string
 *           description: SalesEnquiry@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         verificationCode:
 *           type: integer
 *           description: verificationCode
 *       example:
 *         Email: SalesEnquiry@gmail.com
 *         Password: 12345
 *         verificationCode: 9874
 *
 */
/**
 * @swagger
 * /api/v1/change-password:
 *   post:
 *     summary: change Password for SalesEnquiry
 *     tags: [SalesEnquiry]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesEnquiry1'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesEnquiry1'
 *       500:
 *         description: Some server error
 */
router.post('/change-password', async (req, res) => {
    const { Email, verificationCode } = req.body;
  
    const salesEnquiry = await SalesEnquiry.findOne({ Email });
    if (!salesEnquiry) {
      return res.status(400).send('salesEnquiry Email not found');
    }
  
    if (salesEnquiry.verificationCode !== verificationCode) {
      return res.status(400).send('Invalid verification code');
    }
  
    salesEnquiry.isVerified = true;
    salesEnquiry.verificationCode = null;
    await salesEnquiry.save();
  
    res.send(' Password change successfully');
  })
  module.exports = router
