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
 *         - HeadOfficeProvince
 *         - HeadOfficeHeadOfficeCountryId
 *         - HeadOfficeCountryId
 *         - HeadOfficeStateId
 *         - HeadOfficeCityId
 *         - HeadOfficePin
 *         - SiteAddress
 *         - SiteDistrict
 *         - SiteAddressProvince
 *         - SiteAddressCountryId
 *         - SiteAddressStateId
 *         - SiteAddressCityId
 *         - SiteAddressPin
 *         - SiteAddressPin
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
 *         - Capacity
 *         - MainSteamPressureId
 *         - TypeOfFuelFired
 *         - MainSteamTemperatureId
 *         - YearOfInstallation
 *         - NoOfInstallation
 *         - BoilerMakeNo
 *         - PollutionControlEquipmentId
 *         - MakeOfPollutionControlEquipMent
 *         - Province
 *         - isSiteAddressSameAsHeadOfficeAddress
 *         - ConatctPersonID
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
 *         HeadOfficeProvince:
 *           type: string
 *           description: HeadOfficeProvince
 *         HeadOfficeAddress:
 *           type: string
 *           description: HeadOfficeAddress
 *         HeadOfficeCountryId:
 *           type: string
 *           description: HeadOfficeCountryId
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
 *         SiteAddressProvince:
 *           type: string
 *           description: SiteAddressProvince
 *         SiteAddressCountryId:
 *           type: string
 *           description: SiteAddressCountryId
 *         SiteAddressStateId:
 *           type: string
 *           description: SiteAddressStateId
 *         SiteAddressCityId:
 *           type: string
 *           description: SiteAddressCityId
 *         SiteAddressPin:
 *           type: string
 *           description: SiteAddressPin
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
 *         Capacity:
 *           type: string
 *           description: CapacityId
 *         CapacityId:
 *           type: string
 *           description: CapacityId
 *         MainSteamPressureId:
 *           type: string
 *           description: MainSteamPressureId
 *         MainSteamPressure:
 *           type: string
 *           description: MainSteamPressure
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
 *         isSiteAddressSameAsHeadOfficeAddress:
 *           type: Boolean
 *           description: isSiteAddressSameAsHeadOfficeAddress
 *         ConatctPersonID:
 *           type: string
 *           description: MakeOfPollutionControlEquipMent
 *       example:
 *         CustomerId: autoGenerated
 *         CustomerTypeId: 1
 *         CustomerName: Customer
 *         HeadOfficeAddress: 503, KSL Tower 9th Floor, Sriayudhya Rd
 *         HeadOfficeDistrict: Pune
 *         HeadOfficeProvince: abcdfhf
 *         HeadOfficeCountryId: 1
 *         HeadOfficeStateId: 1
 *         HeadOfficeCityId: 2
 *         HeadOfficePin: 123456
 *         Country: India
 *         SiteAddress: B2 mall Ranhe
 *         SiteDistrict: Pune
 *         SiteAddressProvince: Pune
 *         SiteAddressCountryId: 1
 *         SiteAddressStateId: 1
 *         SiteAddressCityId: 2
 *         SiteAddressPin: 789456
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
 *         Capacity : "100"
 *         CapacityId : 1
 *         MainSteamPressureId : 1
 *         MainSteamPressure : "100"
 *         TypeOffuelfiredId : 1
 *         MainSteamTemperatureId : 1
 *         MainSteamTemperature : "100"
 *         YearOfInstallation : 2015
 *         NoOfInstallation : 10
 *         BoilerMakeNo : 1245
 *         PollutionControlEquipmentId :  1
 *         MakeOfPollutionControlEquipMent : bhhe
 *         Province : bhhe
 *         isSiteAddressSameAsHeadOfficeAddress : true
 *         ConatctPersonID : 12345
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
*     summary: Delete a Customer
*     tags: [Customer]
*     parameters:
*       - in: path
*         name: CustomerId
*         required: true
*         description: CustomerId is required
*         schema:
*           type: string
*     responses:
*       204:
*         description: Customer deleted successfully
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


  