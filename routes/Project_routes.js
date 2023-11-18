const express = require("express")
const {CreateProjectDetails,viewProjectDetails,deleteProjectDetails,updateProjectDetails,getSingleProjectDetails} = require("../controller/Project_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - ProjectId
 *         - ProjectName
 *         - projectType
 *         - CompanyId
 *         - ProjectStatus
 *         - EstimatedAmt
 *         - ContactName
 *         - ContactPhone
 *         - ContactEmailId
 *         - CountryId
 *         - CityId
 *         - StateId
 *         - Province
 *         - StartDate
 *         - EndDate
 *         - ProjectPhase
 *       properties:
 *         ProjectId:
 *           type: integer
 *           description: ProjectId
 *         ProjectName:
 *           type: string
 *           description: ProjectName
 *         CompanyId:
 *           type: string
 *           description: CompanyId
 *         projectType:
 *           type: string
 *           description: ProjectId
 *         ProjectStatus:
 *           type: string
 *           description: ProjectId
 *         EstimatedAmt:
 *           type: string
 *           description: ProjectId
 *         ContactName:
 *           type: string
 *           description: ContactName
 *         ContactPhone:
 *           type: string
 *           description: ContactPhone
 *         ContactEmailId:
 *           type: string
 *           description: ContactEmailId
 *         CountryId:
 *           type: integer
 *           description: CountryId
 *         StateId:
 *           type: integer
 *           description: StateId
 *         CityId:
 *           type: string
 *           description: CityId
 *         Province:
 *           type: string
 *           description: Province
 *         StartDate:
 *           type: string
 *           description: Province
 *         EndDate:
 *           type: string
 *           description: EndDate
 *         ProjectPhase:
 *           type: string
 *           description: EndDate
 *       example:
 *         ProjectId: autoGenerated
 *         ProjectName: ArrowEnegry
 *         projectType: Suger factories
 *         CompanyId: espm,
 *         ProjectStatus: open
 *         EstimatedAmt: 162023
 *         ContactName: Ankit pawada
 *         ContactPhone: 9874561230
 *         ContactEmailId: akpd@gmail.com
 *         CountryId: india
 *         StateId: 21
 *         CityId: 1
 *         Province: maharastra
 *         StartDate: 04-07-2023
 *         EndDate: 01-09-2023
 *         ProjectPhase: Contractor Awarded
 *         
 *        
 *
 */

/**
 * @swagger
 * /api/v1/viewProjectDetails:
 *   get:
 *     summary: get all Project
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: get All Project
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.route("/viewProjectDetails").get(viewProjectDetails)


/**
 * @swagger
 * /api/v1/CreateProjectDetails:
 *   post:
 *     summary: Add a new Project
 *     tags: [Project]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       '200':
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       '500':
 *         description: Server error
 */

 router.route("/CreateProjectDetails").post(CreateProjectDetails)

 /**
* @swagger
* /api/v1/deleteProjectDetails/{ProjectId}:
*   delete:
*     summary: Delete a Project
*     tags: [Project]
*     parameters:
*         - in: path
*           name: ProjectId
*           required: true
*           description: The ID of the project to delete
*           schema:
*              type: string
*     responses:
*       204:
*         description: Project deleted successfully
*       401:
*         description: Unauthorized - User not authenticated
*       404:
*         description: Project not found
*/

router.route("/deleteProjectDetails/:ProjectId").delete(deleteProjectDetails)

/**
* @swagger
* /api/v1/updateProjectDetails:
*   post:
*     summary: Update Company Project Details
*     tags: [Project]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Project'
*     responses:
*       200:
*         description: Update Company Project Details successfully
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Project'
*       500:
*         description: Some server error
*/

router.route("/updateProjectDetails").post(updateProjectDetails)
/**
 * @swagger
 * /api/v1/getSingleProjectDetails/{ProjectId}:
 *   get:
 *     summary: Get a Project by ID
 *     tags: [Project]
 *     description: Retrieve a Project by their unique ID.
 *     parameters:
 *       - in: path
 *         name: ProjectId
 *         required: true
 *         description: ID of the Project to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the Project
 *       404:
 *         description: Project not found
 */
router.route("/getSingleProjectDetails/:ProjectId").get(getSingleProjectDetails)
module.exports = router

