const express = require("express")
const {CreateSuplierDetails,viewSuplierDetails,deleteSuplierDetails,updateSuplierDetails,getSingleSuplierDetails} = require("../controller/SuplierController")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Suplier:
 *       type: object
 *       required:
 *         - SuplierId
 *         - SuplierTypeId
 *         - SuplierName
 *         - RegisteredOfficeAddress
 *         - RegisteredOfficeDistrict
 *         - RegisteredOfficeProvince
 *         - RegisteredOfficeRegisteredOfficeCountryId
 *         - RegisteredOfficeCountryId
 *         - RegisteredOfficeStateId
 *         - RegisteredOfficeCityId
 *         - RegisteredOfficePin
 *         - BillingAddress
 *         - BillingDistrict
 *         - BillingAddressProvince
 *         - BillingAddressCountryId
 *         - BillingAddressStateId
 *         - BillingAddressCityId
 *         - ContactPersonName
 *         - Designation
 *         - Email
 *         - Address
 *         - LegalStructureId
 *         - DateOfCompanyEstablish
 *         - BussinessCommodityServiceId
 *         - GeograpicServiceArea
 *         - BankName
 *         - BankBranchCode
 *         - IFSCCode
 *         - BankManagerName
 *         - BankBranchAccountManagerName
 *         - BankAddress
 *         - BankEmailId
 *         - ProductBrocher
 *         - PANno
 *         - IsHeadOfficeAddressSameasSiteOfficeAddress
 *         - SupplierType
 *         - BillingAddressPin
 *         - CountryCode
 *         - MobileNo
 *         - BankBranch
 *         - ContactNo
 *         - Bankswiftcode
 *         - ContactNoBranchManager
 *         - isRegisterAddressSameAsBillingAddress
 *       properties:
 *         SuplierId :
 *           type: integer
 *           description: SuplierId
 *         SuplierTypeId:
 *           type: string
 *           description: SuplierTypeId
 *         SuplierName:
 *           type: string
 *           description: SuplierName
 *         RegisteredOfficeDistrict:
 *           type: string
 *           description: RegisteredOfficeDistrict
 *         RegisteredOfficeProvince:
 *           type: string
 *           description: RegisteredOfficeDistrict
 *         RegisteredOfficeAddress:
 *           type: string
 *           description: RegisteredOfficeAddress
 *         RegisteredOfficeCountryId:
 *           type: integer
 *           description: RegisteredOfficeCountryId
 *         RegisteredOfficeStateId:
 *           type: integer
 *           description: RegisteredOfficeStateId
 *         RegisteredOfficeCityId:
 *           type: integer
 *           description: RegisteredOfficeCityId
 *         RegisteredOfficePin:
 *           type: string
 *           description: RegisteredOfficePin
 *         BillingAddress:
 *           type: string
 *           description:  BillingAddress
 *         BillingDistrict:
 *           type: string
 *           description:  BillingDistrict
 *         BillingAddressProvince:
 *           type: string
 *           description:  BillingDistrict
 *         BillingAddressCountryId:
 *           type: string
 *           description:  BillingAddressCountryId
 *         BillingAddressStateId:
 *           type: integer
 *           description:  BillingAddressStateId
 *         BillingAddressCityId:
 *           type: string
 *           description:  BillingAddressStateId
 *         ContactPersonName:
 *           type: string
 *           description: ContactPersonName
 *         Designation:
 *           type: string
 *           description: Designation
 *         Email:
 *           type: string
 *           description: Email
 *         LegalStructureId:
 *           type: string
 *           description: LegalStructureId
 *         DateOfCompanyEstablish:
 *           type: string
 *           description: DateOfCompanyEstablish
 *         BussinessCommodityServiceId:
 *           type: string
 *           description: BussinessCommodityServiceId
 *         GeograpicServiceArea:
 *           type: string
 *           description: GeograpicServiceArea
 *         BankName:
 *           type: string
 *           description: BankName
 *         IFSCCode:
 *           type: string
 *           description: IFSCCode
 *         BankManagerName:
 *           type: string
 *           description: BankManagerName
 *         BankBranchAccountManagerName:
 *           type: string
 *           description: BankBranchAccountManagerName
 *         BankAddress :
 *           type: string
 *           description: BankAddress
 *         BankEmailId:
 *           type: string
 *           description: BankEmailId
 *         ProductBrocher:
 *           type: string
 *           description: ProductBrocher
 *         PANno:
 *           type: string
 *           description: PANno
 *         IsHeadOfficeAddressSameasSiteOfficeAddress:
 *           type: string
 *           description: PANno
 *         SupplierType:
 *           type: string
 *           description: SupplierType
 *         BillingAddressPin:
 *           type: string
 *           description: BillingAddressPin
 *         CountryCode:
 *           type: string
 *           description: BillingAddressPin
 *         MobileNo:
 *           type: string
 *           description: BillingAddressPin
 *         BankBranch:
 *           type: string
 *           description: BillingAddressPin
 *         ContactNo:
 *           type: string
 *           description: BillingAddressPin
 *         Bankswiftcode:
 *           type: string
 *           description: BillingAddressPin
 *         ContactNoBranchManager:
 *           type: string
 *           description: BillingAddressPin
 *         isRegisterAddressSameAsBillingAddress:
 *           type: string
 *           description: BillingAddressPin
 *       example:
 *         SuplierId : autoGenerated
 *         SuplierName : Suplier
 *         SuplierTypeId : 1
 *         RegisteredOfficeAddress : Suger
 *         RegisteredOfficeDistrict : 503, KSL Tower 9th Floor, Sriayudhya Rd.,
 *         RegisteredOfficeProvince : 503, KSL Tower 9th Floor, Sriayudhya Rd.,
 *         RegisteredOfficeCountryId : Bangkok
 *         RegisteredOfficeStateId : 21
 *         RegisteredOfficeCityId : 1
 *         RegisteredOfficePin : West
 *         Country: Domestic
 *         BillingAddress : West
 *         BillingDistrict : Iron
 *         BillingAddressProvince : Iron
 *         BillingAddressCountryId : Mr.Chiewchan
 *         BillingAddressStateId : 16
 *         BillingAddressCityId : 45
 *         ContactPersonName : 0817441009
 *         Designation : 0817441009
 *         Email : Suplier@example.com
 *         LegalStructureId : 1
 *         DateOfCompanyEstablish : 08-03-2023
 *         BussinessCommodityServiceId : 1
 *         GeograpicServiceArea : 8*14 
 *         BankName : AxisNo1
 *         BankBranchCode : AU10245
 *         IFSCCode : AXIS01245
 *         BankManagerName : Anish
 *         BankBranchAccountManagerName : Anksha
 *         BankAddress : bank
 *         BankEmailId :   bank@gmail.com
 *         ProductBrocher :   bank@gmail.com
 *         PANno :  PANno
 *         IsHeadOfficeAddressSameasSiteOfficeAddress :  true
 *         SupplierType: abc,
 *         BillingAddressPin: 145678,
 *         CountryCode: IN,
 *         MobileNo: 9874561230,
 *         BankBranch: MH,
 *         ContactNo: 9874125630,
 *         Bankswiftcode: AK548A,
 *         ContactNoBranchManager: 9874561230,
 *         isRegisterAddressSameAsBillingAddress: true,
 *
 */

/**
 * @swagger
 * /api/v1/viewSuplierDetails:
 *   get:
 *     summary: get all Suplier
 *     tags: [Suplier]
 *     responses:
 *       200:
 *         description: get All Suplier
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Suplier'
 */
router.route("/viewSuplierDetails").get(viewSuplierDetails)


/**
 * @swagger
 * /api/v1/CreateSuplierDetails:
 *   post:
 *     summary: add a new Suplier
 *     tags: [Suplier]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Suplier'
 *     responses:
 *       200:
 *         description: create Suplier successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suplier'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateSuplierDetails").post(CreateSuplierDetails)

  /**
 * @swagger
 * /api/v1/deleteSuplierDetails/{SuplierId}:
 *   delete:
 *     summary: Delete an Suplier
 *     tags: [Suplier]
 *     parameters:
 *         - in: path
 *           SuplierName: SuplierId
 *           required: true
 *           description: SuplierId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Suplier delete successfully
 *   
 */
router.route("/deleteSuplierDetails/:SuplierId").delete(deleteSuplierDetails)

/**
* @swagger
* /api/v1/updateSuplierDetails:
*   post:
*     summary: upAddress Suplier Details
*     tags: [Suplier]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Suplier'
*     responses:
*       200:
*         description: upAddress Suplier Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Suplier'
*       500:
*         description: Some server error
*/
router.route("/updateSuplierDetails").post(updateSuplierDetails)
/**
 * @swagger
 * /api/v1/getSingleSuplierDetails/{SuplierId}:
 *   get:
 *     summary: Get a Suplier by ID
 *     tags: [Suplier]
 *     description: Retrieve a Suplier by their unique ID.
 *     parameters:
 *       - in: path
 *         name: SuplierId
 *         required: true
 *         description: ID of the Suplier to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the Suplier
 *       404:
 *         description: Suplier not found
 */
router.route("/getSingleSuplierDetails/:SuplierId").get(getSingleSuplierDetails)
module.exports = router

