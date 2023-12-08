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
 *         - EmailId
 *       properties:
 *         EmailId:
 *           type: string
 *           description: EmailId
 *       example:
 *         EmailId: arrowcon@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/send-verification-code:
 *   post:
 *     summary: EmailId Send for forgot Password
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
    const { EmailId } = req.body;
    const verificationCode = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit verification code
  
    const Admin = await Admin.findOneAndUpdate(
      { EmailId },
      { verificationCode },
      { new: true, upsert: true }
    );
  
    const transporter = nodEmailIder.createTransport({
      service: 'gmail',
      auth: {
          user:"icaet20@nmiet.edu.in",
          pass:"Bonybaba125@", // Replace with your own EmailId password
      },
    });
  
    const mailOptions = {
      from: "icaet20@nmiet.edu.in",
      to: EmailId,
      subject: 'EmailId Verification Code',
      text: `Your EmailId verification code is ${verificationCode}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending EmailId');
      } else {
        console.log('EmailId sent: ' + info.response);
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
 *         - EmailId
 *         - Password
 *         - verificationCode
 *       properties:
 *         EmailId:
 *           type: string
 *           description: Admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         verificationCode:
 *           type: integer
 *           description: verificationCode
 *       example:
 *         EmailId: Admin@gmail.com
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
    const { EmailId, verificationCode } = req.body;
  
    const admin = await Admin.findOne({ EmailId });
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
