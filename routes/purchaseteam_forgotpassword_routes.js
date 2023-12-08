const express = require("express")
const purchaseteam = require("../model/Employee_model")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     purchaseteam:
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
 *     tags: [purchaseteam]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/purchaseteam'
 *     responses:
 *       200:
 *         description: verificationCode send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchaseteam'
 *       500:
 *         description: Some server error
 */
router.post('/send-verification-code', async (req, res) => {
    const { Email } = req.body;
    const verificationCode = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit verification code
  
    const purchaseteam = await purchaseteam.findOneAndUpdate(
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
 *     purchaseteam2:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - verificationCode
 *       properties:
 *         Email:
 *           type: string
 *           description: purchaseteam@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         verificationCode:
 *           type: integer
 *           description: verificationCode
 *       example:
 *         Email: purchaseteam@gmail.com
 *         Password: 12345
 *         verificationCode: 9874
 *
 */

/**
 * @swagger
 * /api/v1/change-password-purchaseteam:
 *   post:
 *     summary: change Password for purchaseteam
 *     tags: [purchaseteam]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/purchaseteam2'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchaseteam2'
 *       500:
 *         description: Some server error
 */



router.post('/change-password-purchaseteam', async (req, res) => {
  const { Email, verificationCode, Password } = req.body;

  try {
    const foundpurchaseteam = await purchaseteam.findOne({ Email });

    if (!foundpurchaseteam) {
      return res.status(400).send('purchaseteam not found');
    }

    if (foundpurchaseteam.verificationCode !== verificationCode) {
      return res.status(400).send('Invalid verification code');
    }

    // Assuming you have a setPassword method in your model to hash the password
    foundpurchaseteam.setPassword(Password);

    // Assuming you have an isVerified property in your model
    foundpurchaseteam.isVerified = true;

    // Assuming you have a save method in your model to save the changes
    await foundpurchaseteam.save();

    res.send('Reset Password successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// module.exports = router;

  module.exports = router
