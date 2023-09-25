const express = require("express")
const {CreateRoleDetails,viewRoleDetails,deleteRoleDetails,updateRoleDetails} = require("../controller/Role_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - RoleId
 *         - RoleName
 *         - Status
 *       properties:
 *         RoleId:
 *           type: integer
 *           description: RoleId
 *         RoleName:
 *           type: string
 *           description: RoleName
 *         Status:
 *           type: string
 *           description: RoleId
 *       example:
 *         RoleId: autoGenerated
 *         RoleName: Role
 *         Status: Active       
 *
 */

/**
 * @swagger
 * /api/v1/viewRoleDetails:
 *   get:
 *     summary: get all Role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: get All Role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.route("/viewRoleDetails").get(viewRoleDetails)


/**
 * @swagger
 * /api/v1/CreateRoleDetails:
 *   post:
 *     summary: add a new Role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: create Role successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateRoleDetails").post(CreateRoleDetails)

  /**
 * @swagger
 * /api/v1/deleteRoleDetails/{RoleId}:
 *   delete:
 *     summary: Delete an Role
 *     tags: [Role]
 *     parameters:
 *         - in: path
 *           RoleName: RoleId
 *           required: true
 *           description: RoleId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Role delete successfully
 *   
 */
router.route("/deleteRoleDetails/:RoleId").delete(deleteRoleDetails)

/**
* @swagger
* /api/v1/updateRoleDetails:
*   post:
*     summary: upPassword Role Details
*     tags: [Role]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Role'
*     responses:
*       200:
*         description: update Role Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Role'
*       500:
*         description: Some server error
*/
router.route("/updateRoleDetails").post(updateRoleDetails)
module.exports = router

