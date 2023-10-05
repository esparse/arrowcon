const express = require("express")
const Admin = require("../model/admin_model")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin1:
 *       type: object
 *       required:
 *         - Email
 *       properties:
 *         Email:
 *           type: string
 *           description: email
 *       example:
 *         Email: arrowcon@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/send-verification-code:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin1'
 *     responses:
 *       200:
 *         description: verificationCode send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin1'
 *       500:
 *         description: Some server error
 */
router.post('/send-verification-code', async (req, res) => {
    const { Email } = req.body;
    const verificationCode = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit verification code
  
    const Admin = await Admin.findOneAndUpdate(
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
 *     admin2:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - verificationCode
 *       properties:
 *         Email:
 *           type: string
 *           description: Admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         verificationCode:
 *           type: integer
 *           description: verificationCode
 *       example:
 *         Email: Admin@gmail.com
 *         Password: 12345
 *         verificationCode: 9874
 *
 */

/**
 * @swagger
 * /api/v1/change-password-admin:
 *   post:
 *     summary: change Password for Admin
 *     tags: [admin]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin2'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin2'
 *       500:
 *         description: Some server error
 */
router.post('/change-password-admin', async (req, res) => {
    const { Email, verificationCode } = req.body;
  
    const admin = await Admin.findOne({ Email });
    if (!admin) {
      return res.status(400).send('Admin not found');
    }
  
    if (admin.verificationCode !== verificationCode) {
      return res.status(400).send('Invalid verification code');
    }
  
    admin.isVerified = true;
    admin.verificationCode = null;
    await admin.save();
  
    res.send('Reset Password successfully');
  });
  module.exports = router
