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
 *         - CustomerTypeId
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
 *         - CustomerCategoryId
 *         - CustomerStatus
 *         - HeadOfficePin
 *         - CustomerRegionId
 *         - locationId
 *         - CustomerIndustryId
 *         - EquipmentId
 *         - TypeOfEquipmentId
 *         - MakeOfBoiler
 *         - CapacityId
 *         - MainSteamPressureId
 *         - TypeOfFuelFired
 *         - MainSteamTemperatureId
 *         - YearOfInstallation
 *         - NoOfInstallation
 *         - BoilerMakeNo
 *         - PollutionControlEquipmentId
 *         - MakeOfPollutionControlEquipMent
 *         - Province
 *       properties:
 *         CustomerId:
 *           type: integer
 *           description: Autogeneration
 *         CustomerTypeId:
 *           type: string
 *           description: CustomerTypeId
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
 *         CustomerCategoryId:
 *           type: string
 *           description: CustomerSiteDistrict
 *         CustomerStatus:
 *           type: string
 *           description: CustomerStatus
 *         CustomerRegionId:
 *           type: string
 *           description: CustomerRegionId
 *         locationId:
 *           type: string
 *           description: locationId
 *         CustomerIndustryId:
 *           type: string
 *           description: CustomerIndustryId
 *         EquipmentId:
 *           type: string
 *           description: EquipmentId
 *         TypeOfEquipmentId:
 *           type: string
 *           description: TypeOfEquipmentId
 *         MakeOfBoiler :
 *           type: string
 *           description: MakeOfBoiler
 *         CapacityId:
 *           type: string
 *           description: CapacityId
 *         MainSteamPressureId:
 *           type: string
 *           description: MainSteamPressureId
 *         TypeOfFuelFired:
 *           type: string
 *           description: TypeOfFuelFired
 *         MainSteamTemperatureId:
 *           type: string
 *           description: MainSteamTemperatureId
 *         YearOfInstallation:
 *           type: string
 *           description: YearOfInstallation
 *         NoOfInstallation:
 *           type: string
 *           description: NoOfInstallation
 *         BoilerMakeNo:
 *           type: string
 *           description: BoilerMakeNo
 *         PollutionControlEquipmentId:
 *           type: string
 *           description: PollutionControlEquipmentId
 *         MakeOfPollutionControlEquipMent:
 *           type: string
 *           description: MakeOfPollutionControlEquipMent
 *         Province:
 *           type: string
 *           description: MakeOfPollutionControlEquipMent
 *       example:
 *         CustomerId: autoGenerated
 *         CustomerTypeId: 1
 *         CustomerName: Customer
 *         HeadOfficeAddress: 503, KSL Tower 9th Floor, Sriayudhya Rd
 *         HeadOfficeDistrict: Pune
 *         HeadOfficeCountry: 1
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
 *         CustomerCategoryId: 1
 *         CustomerStatus: Active
 *         CustomerRegionId: 1
 *         locationId: 1
 *         CustomerIndustryId: 1
 *         EquipmentId: 1
 *         TypeOfEquipmentId: 1
 *         MakeOfBoiler : jbkdb
 *         CapacityId : 1
 *         MainSteamPressureId : 1
 *         TypeOfFuelFired : hbhe
 *         MainSteamTemperatureId : 1
 *         YearOfInstallation : 2015
 *         NoOfInstallation : 10
 *         BoilerMakeNo : 1245
 *         PollutionControlEquipmentId :  1
 *         MakeOfPollutionControlEquipMent : bhhe
 *         Province : bhhe
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


  