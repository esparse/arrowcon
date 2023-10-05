const express = require("express")
const {CreateEmployeeDetails,viewEmployeeDetails,deleteEmployeeDetails,updateEmployeeDetails,getSingleEmployeeDetails} = require("../controller/Employee_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - EmployeeId
 *         - EmployeeName
 *         - EmailId
 *         - MobileNumber
 *         - Address
 *         - City
 *         - Country
 *         - Status
 *       properties:
 *         EmployeeId:
 *           type: integer
 *           description: EmployeeId
 *         EmployeeName:
 *           type: string
 *           description: EmployeeName
 *         MobileNumber:
 *           type: string
 *           description: MobileNumber
 *         EmailId:
 *           type: string
 *           description: EmployeeId
 *         Address:
 *           type: string
 *           description: Address
 *         City:
 *           type: string
 *           description: EmployeeId
 *         Country:
 *           type: string
 *           description: Country
 *         Status:
 *           type: string
 *           description: Status
 *         DateofBirth:
 *           type: string
 *           description: Status
 
 *       example:
 *         EmployeeId: autoGenerated
 *         EmployeeName: jhon
 *         EmailId: jhon@example.com
 *         MobileNumber: 9874561230
 *         Address: TomJerry
 *         City: sambhajinagar
 *         Country: India
 *         Status: Active
 *         
 *        
 *
 */

/**
 * @swagger
 * /api/v1/viewEmployeeDetails:
 *   get:
 *     summary: get all Employee
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: get All Employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.route("/viewEmployeeDetails").get(viewEmployeeDetails)


/**
 * @swagger
 * /api/v1/CreateEmployeeDetails:
 *   post:
 *     summary: add a new Employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: create Employee successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateEmployeeDetails").post(CreateEmployeeDetails)

  /**
 * @swagger
 * /api/v1/deleteEmployeeDetails/{EmployeeId}:
 *   delete:
 *     summary: Delete an Employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           EmployeeName: EmployeeId
 *           required: true
 *           description: EmployeeId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Employee delete successfully
 *   
 */
router.route("/deleteEmployeeDetails/:EmployeeId").delete(deleteEmployeeDetails)

/**
* @swagger
* /api/v1/updateEmployeeDetails:
*   post:
*     summary: upMobileNumber Employee Details
*     tags: [Employee]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Employee'
*     responses:
*       200:
*         description: update Employee Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Employee'
*       500:
*         description: Some server error
*/
router.route("/updateEmployeeDetails").post(updateEmployeeDetails)
/**
 * @swagger
 * /api/v1/getSingleEmployeeDetails/{EmployeeId}:
 *   get:
 *     summary: Get a Employee by ID
 *     tags: [Employee]
 *     description: Retrieve a Employee by their unique ID.
 *     parameters:
 *       - in: path
 *         name: EmployeeId
 *         required: true
 *         description: ID of the Employee to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the Employee
 *       404:
 *         description: Employee not found
 */
router.route("/getSingleEmployeeDetails/:EmployeeId").get(getSingleEmployeeDetails)
module.exports = router

