const express = require("express")
const PurchaseEnquiry = require("../model/PurchaseEnquiry_model")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     PurchaseEnquiry:
 *       type: object
 *       required:
 *         - Email
 *       properties:
 *         Email:
 *           type: string
 *           description: PurchaseEnquiry@gmail.com
 *       example:
 *         Email: PurchaseEnquiry@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/send-code-PurchaseEnquiry:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [PurchaseEnquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEnquiry'
 *     responses:
 *       200:
 *         description: verificationCode send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEnquiry'
 *       500:
 *         description: Some server error
 */
router.post('/send-code-PurchaseEnquiry', async (req, res) => {
    const { Email } = req.body;
    const verificationCode = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit verification code
  
    const PurchaseEnquiry = await PurchaseEnquiry.findOneAndUpdate(
      { Email },
      { verificationCode },
      { new: true, upsert: true }
    );
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user:"icaet20@nmiet.edu.in",
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
 *     PurchaseEnquiry:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - verificationCode
 *       properties:
 *         Email:
 *           type: string
 *           description: PurchaseEnquiry@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         verificationCode:
 *           type: integer
 *           description: verificationCode
 *       example:
 *         Email: PurchaseEnquiry@gmail.com
 *         Password: 12345
 *         verificationCode: 9874
 *
 */

/**
 * @swagger
 * /api/v1/change-password-PurchaseEnquiry:
 *   post:
 *     summary: change Password for PurchaseEnquiry
 *     tags: [PurchaseEnquiry]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseEnquiry'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PurchaseEnquiry'
 *       500:
 *         description: Some server error
 */
router.post('/change-password-PurchaseEnquiry', async (req, res) => {
    const { Email, verificationCode } = req.body;
  
    const purchaseEnquiry = await PurchaseEnquiry.findOne({ Email });
    if (!purchaseEnquiry) {
      return res.status(400).send('purchaseEnquiry not found');
    }
  
    if (purchaseEnquiry.verificationCode !== verificationCode) {
      return res.status(400).send('Invalid verification code');
    }
  
    purchaseEnquiry.isVerified = true;
    purchaseEnquiry.verificationCode = null;
    await purchaseEnquiry.save();
  
    res.send('Reset Password successfully');
  });
  module.exports = router
