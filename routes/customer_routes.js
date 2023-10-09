const express = require("express")
const {CreateCustomerDetails,viewCustomerDetails,deleteCustomerDetails,updateCustomerDetails,getSingleCustomerDetails} = require("../controller/Customer_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - CustomerId
 *         - CustomerType
 *         - CustomerName
 *         - HeadOfficeAddress
 *         - HeadOfficeDistrict
 *         - HeadOfficeHeadOfficeCountry
 *         - HeadOfficeCountry
 *         - HeadOfficeStateId
 *         - HeadOfficeCityId
 *         - HeadOfficePin
 *         - SiteAddress
 *         - SiteDistrict
 *         - SiteAddressCountry
 *         - SiteAddressStateId
 *         - SiteAddressCityId
 *         - SiteAddressPin
 *         - ContactPersonName
 *         - Designation
 *         - Email
 *         - SiteAddressPin
 *         - LandlineNo
 *         - CompanyRegistrationNo
 *         - CompanyVATNo
 *         - CustomerSiteDistrict
 *         - CustomerStatus
 *         - HeadOfficePin
 *         - Location
 *         - Industry
 *         - Equipment
 *         - TypeOfEquipment
 *         - MakeOfBoiler
 *         - CapacityUnit
 *         - MainSteamPressure
 *         - TypeOfFuelFired
 *         - MainSteamTemperature
 *         - YearOfInstallation
 *         - NoOfInstallation
 *         - BoilerMakeNo
 *         - PollutionControlEquipMent
 *         - MakeOfPollutionControlEquipMent
 *       properties:
 *         CustomerId:
 *           type: integer
 *           description: Autogeneration
 *         CustomerType:
 *           type: string
 *           description: CustomerType
 *         CustomerName:
 *           type: string
 *           description: CustomerName
 *         HeadOfficeDistrict:
 *           type: string
 *           description: HeadOfficeDistrict
 *         HeadOfficeAddress:
 *           type: string
 *           description: HeadOfficeAddress
 *         HeadOfficeCountry:
 *           type: string
 *           description: HeadOfficeCountry
 *         HeadOfficeStateId:
 *           type: integer
 *           description: HeadOfficeStateId
 *         HeadOfficeCityId:
 *           type: string
 *           description: HeadOfficeCityId
 *         HeadOfficePin:
 *           type: string
 *           description: HeadOfficePin
 *         SiteAddress:
 *           type: string
 *           description: SiteAddress
 *         SiteDistrict:
 *           type: string
 *           description: SiteDistrict
 *         SiteAddressCountry:
 *           type: string
 *           description: SiteAddressCountry
 *         SiteAddressStateId:
 *           type: string
 *           description: SiteAddressStateId
 *         SiteAddressCityId:
 *           type: string
 *           description: SiteAddressCityId
 *         SiteAddressPin:
 *           type: string
 *           description: SiteAddressPin
 *         ContactPersonName:
 *           type: string
 *           description: ContactPersonName
 *         Designation:
 *           type: string
 *           description: Designation
 *         Email:
 *           type: string
 *           description: Email
 *         LandlineNo:
 *           type: string
 *           description: LandlineNo
 *         CompanyRegistrationNo:
 *           type: string
 *           description: CompanyRegistrationNo
 *         CompanyVATNo:
 *           type: string
 *           description: CompanyVATNo
 *         CustomerSiteDistrict:
 *           type: string
 *           description: CustomerSiteDistrict
 *         CustomerStatus:
 *           type: string
 *           description: CustomerStatus
 *         Location:
 *           type: string
 *           description: Location
 *         Industry:
 *           type: string
 *           description: Industry
 *         Equipment:
 *           type: string
 *           description: Equipment
 *         TypeOfEquipment:
 *           type: string
 *           description: TypeOfEquipment
 *         MakeOfBoiler :
 *           type: string
 *           description: MakeOfBoiler
 *         CapacityUnit:
 *           type: string
 *           description: CapacityUnit
 *         MainSteamPressure:
 *           type: string
 *           description: MainSteamPressure
 *         TypeOfFuelFired:
 *           type: string
 *           description: TypeOfFuelFired
 *         MainSteamTemperature:
 *           type: string
 *           description: MainSteamTemperature
 *         YearOfInstallation:
 *           type: string
 *           description: YearOfInstallation
 *         NoOfInstallation:
 *           type: string
 *           description: NoOfInstallation
 *         BoilerMakeNo:
 *           type: string
 *           description: BoilerMakeNo
 *         PollutionControlEquipMent:
 *           type: string
 *           description: PollutionControlEquipMent
 *         MakeOfPollutionControlEquipMent:
 *           type: string
 *           description: MakeOfPollutionControlEquipMent
 *       example:
 *         CustomerId: autoGenerated
 *         CustomerName: Customer
 *         HeadOfficeAddress: 503, KSL Tower 9th Floor, Sriayudhya Rd
 *         HeadOfficeDistrict: Pune
 *         HeadOfficeCountry: India
 *         HeadOfficeStateId: 1
 *         HeadOfficeCityId: 2
 *         HeadOfficePin: 123456
 *         Country: India
 *         SiteAddress: B2 mall Ranhe
 *         SiteDistrict: Pune
 *         SiteAddressCountry: India
 *         SiteAddressStateId: 1
 *         SiteAddressCityId: 2
 *         SiteAddressPin: 789456
 *         ContactPersonName: 0817441009
 *         Designation: Contractor
 *         Email: contact@cont.in
 *         LandlineNo: 9874561230
 *         CompanyRegistrationNo: 1023654789
 *         CompanyVATNo: 0817441009
 *         CustomerSiteDistrict: Pune
 *         CustomerStatus: Active
 *         Location: Pune
 *         Industry: Espare
 *         Equipment: Abc
 *         TypeOfEquipment: nkdknk
 *         MakeOfBoiler : jbkdb
 *         CapacityUnit : njew
 *         MainSteamPressure : jkbbhhe
 *         TypeOfFuelFired : hbhe
 *         MainSteamTemperature : bhevgevh
 *         YearOfInstallation : 2015
 *         NoOfInstallation : 10
 *         BoilerMakeNo : 1245
 *         PollutionControlEquipMent :  bejbw
 *         MakeOfPollutionControlEquipMent : bhhe
 */

/**
 * @swagger
 * /api/v1/viewCustomerDetails:
 *   get:
 *     summary: get all Customer
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: get All Customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.route("/viewCustomerDetails").get(viewCustomerDetails)


/**
 * @swagger
 * /api/v1/CreateCustomerDetails:
 *   post:
 *     summary: add a new Customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: create Customer successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateCustomerDetails").post(CreateCustomerDetails)

  /**
 * @swagger
 * /api/v1/deleteCustomerDetails/{CustomerId}:
 *   delete:
 *     summary: Delete an Customer
 *     tags: [Customer]
 *     parameters:
 *         - in: path
 *           CustomerName: CustomerId
 *           required: true
 *           description: CustomerId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Customer delete successfully
 *   
 */
router.route("/deleteCustomerDetails/:CustomerId").delete(deleteCustomerDetails)

/**
* @swagger
* /api/v1/updateCustomerDetails:
*   post:
*     summary: upAddress Customer Details
*     tags: [Customer]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Customer'
*     responses:
*       200:
*         description: upAddress Customer Details successfull
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Customer'
*       500:
*         description: Some server error
*/
router.route("/updateCustomerDetails").post(updateCustomerDetails)

/**
 * @swagger
 * /api/v1/getSingleCustomerDetails/{customerId}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     description: Retrieve a customer by their unique ID.
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID of the customer to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the customer
 *       404:
 *         description: Customer not found
 */
router.route("/getSingleCustomerDetails/:CustomerId").get(getSingleCustomerDetails)
module.exports = router


  