const express = require('express');
const router = express.Router();
const { getcustomersdetailsbyfilter ,getcustomersdetailsbyfilters} = require("../controller/filter_controller");
/**
 * @swagger
 * /api/v1/customer/{CustomerName}:
 *   get:
 *     summary: Get customer details by filter
 *     tags: [Filter]
 *     parameters:
 *       - name: search
 *         in: path
 *         description: The search term for filtering customers
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */


  
router.route('/customer/:CustomerName').get(getcustomersdetailsbyfilter);
router.route('/customers/:queryParams').get(getcustomersdetailsbyfilters);

const customer = require('../model/Customer_model'); // Assuming you have a model for customer

router.get('/customerstype/:customertype', async (req, res) => {
  try {
    const customertype = req.params.customertype;
// console.log(customertype);
    const aggregationPipeline = [];


    // Add other stages as needed
    aggregationPipeline.push(
        {
            $lookup:{
                from:"states",
                localField:"HeadOfficeStateId",
                foreignField:"id",
                as:"HeadOfficeState"
            },
         
        },
        {
            $lookup:{
                from:"customertypes",
                localField:"CustomerTypeId",
                foreignField:"CustomerTypeId",
                as:"CustomerType"
            },
         
        },
        {
            $lookup:{
                from:"cities",
                localField:"HeadOfficeCityId",
                foreignField:"id",
                as:"HeadOfficeCity"
            },
         
        },
        {
            $lookup:{
                from:"states",
                localField:"SiteAddressStateId",
                foreignField:"id",
                as:"SiteAddressState"
            },
         
        },
        {
            $lookup:{
                from:"cities",
                localField:"SiteAddressCityId",
                foreignField:"id",
                as:"SiteAddressCity"
            },
         
        },
        {
            $lookup:{
                from:"customercategories",
                localField:"CustomerCategoryId",
                foreignField:"CustomerCategoryId",
                as:"CustomerCategory"
            },
         
        },
        {
            $lookup:{
                from:"customerregions",
                localField:"CustomerRegionId",
                foreignField:"CustomerRegionId",
                as:"CustomerRegion"
            },
         
        },
        {
            $lookup:{
                from:"locations",
                localField:"locationId",
                foreignField:"locationId",
                as:"location"
            },
         
        },
        {
            $lookup:{
                from:"customerindustries",
                localField:"CustomerIndustryId",
                foreignField:"CustomerIndustryId",
                as:"CustomerIndustry"
            },
         
        },
        {
            $lookup:{
                from:"equipment",
                localField:"EquipmentId",
                foreignField:"EquipmentId",
                as:"Equipment"
            },
         
        },
        {
            $lookup:{
                from:"typeofequipments",
                localField:"TypeOfEquipmentId",
                foreignField:"TypeOfEquipmentId",
                as:"typeOfEquipment"
            },
         
        },
        {
            $lookup:{
                from:"capacities",
                localField:"CapacityId",
                foreignField:"CapacityId",
                as:"Capacity"
            },
         
        },
        {
            $lookup:{
                from:"mainsteampressures",
                localField:"MainSteamPressureId",
                foreignField:"MainSteamPressureId",
                as:"MainSteamPressure"
            },
         
        },
        {
            $lookup:{
                from:"mainsteamtemperatures",
                localField:"MainSteamTemperatureId",
                foreignField:"MainSteamTemperatureId",
                as:"MainSteamTemperature"
            },
         
        },
        {
            $lookup:{
                from:"pollutioncontrolequipments",
                localField:"PollutionControlEquipmentId",
                foreignField:"PollutionControlEquipmentId",
                as:"PollutionControlEquipment"
            },
         
        },
        {
            $lookup:{
                from:"countries",
                localField:"HeadOfficeCountryId",
                foreignField:"id",
                as:"HeadOfficeCountry"
            },
         
        },
        {
            $lookup:{
                from:"countries",
                localField:"SiteAddressCountryId",
                foreignField:"id",
                as:"SiteAddressCountry"
            },
         
        },
        {
            $lookup:{
                from:"contactpeople",
                localField:"CustomerId",
                foreignField:"sourceId",
                as:"ConatctPerson"
            },
         
        },
        {
            $lookup:{
                from:'salesenquiries',
                localField:'CustomerId',
                foreignField:'CustomerId',
                as:"SalesEnquiries"
            },
        },
        {
            $lookup:{
                from:'typeoffuelfireds',
                localField:'TypeOffuelfiredId',
                foreignField:'TypeOffuelfiredId',
                as:"TypeOffuelfired"
            },
        },
      { $match: {
        'CustomerType.CustomerType': customertype,
      },}
      // Your other $lookup stages here
    );

    const result = await customer.aggregate(aggregationPipeline);
// console.log(result);
    res.json({
        count:result.length,
        message:"get data by Customer Type",
        data:result
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: 'Some error occurred while fetching customer data.' + error.message,
    });
  }
});

router.get('/customerscity/:city', async (req, res) => {
    try {
      const city = req.params.city;
  console.log(city)
      const aggregationPipeline = [];
  
      if (city) {
        aggregationPipeline.push({
          $match: {
            'HeadOfficeCity.name': city,
          },
        });
      }
  
      // Add other stages as needed
      aggregationPipeline.push(
        {
            $lookup:{
                from:"cities",
                localField:"HeadOfficeCityId",
                foreignField:"id",
                as:"HeadOfficeCity"
            },
         
        },
        {
            $lookup:{
                from:"states",
                localField:"HeadOfficeStateId",
                foreignField:"id",
                as:"HeadOfficeState"
            },
         
        },
        {
            $lookup:{
                from:"customertypes",
                localField:"CustomerTypeId",
                foreignField:"CustomerTypeId",
                as:"CustomerType"
            },
         
        },
        
        {
            $lookup:{
                from:"states",
                localField:"SiteAddressStateId",
                foreignField:"id",
                as:"SiteAddressState"
            },
         
        },
        {
            $lookup:{
                from:"cities",
                localField:"SiteAddressCityId",
                foreignField:"id",
                as:"SiteAddressCity"
            },
         
        },
        {
            $lookup:{
                from:"customercategories",
                localField:"CustomerCategoryId",
                foreignField:"CustomerCategoryId",
                as:"CustomerCategory"
            },
         
        },
        {
            $lookup:{
                from:"customerregions",
                localField:"CustomerRegionId",
                foreignField:"CustomerRegionId",
                as:"CustomerRegion"
            },
         
        },
        {
            $lookup:{
                from:"locations",
                localField:"locationId",
                foreignField:"locationId",
                as:"location"
            },
         
        },
        {
            $lookup:{
                from:"customerindustries",
                localField:"CustomerIndustryId",
                foreignField:"CustomerIndustryId",
                as:"CustomerIndustry"
            },
         
        },
        {
            $lookup:{
                from:"equipment",
                localField:"EquipmentId",
                foreignField:"EquipmentId",
                as:"Equipment"
            },
         
        },
        {
            $lookup:{
                from:"typeofequipments",
                localField:"TypeOfEquipmentId",
                foreignField:"TypeOfEquipmentId",
                as:"typeOfEquipment"
            },
         
        },
        {
            $lookup:{
                from:"capacities",
                localField:"CapacityId",
                foreignField:"CapacityId",
                as:"Capacity"
            },
         
        },
        {
            $lookup:{
                from:"mainsteampressures",
                localField:"MainSteamPressureId",
                foreignField:"MainSteamPressureId",
                as:"MainSteamPressure"
            },
         
        },
        {
            $lookup:{
                from:"mainsteamtemperatures",
                localField:"MainSteamTemperatureId",
                foreignField:"MainSteamTemperatureId",
                as:"MainSteamTemperature"
            },
         
        },
        {
            $lookup:{
                from:"pollutioncontrolequipments",
                localField:"PollutionControlEquipmentId",
                foreignField:"PollutionControlEquipmentId",
                as:"PollutionControlEquipment"
            },
         
        },
        {
            $lookup:{
                from:"countries",
                localField:"HeadOfficeCountryId",
                foreignField:"id",
                as:"HeadOfficeCountry"
            },
         
        },
        {
            $lookup:{
                from:"countries",
                localField:"SiteAddressCountryId",
                foreignField:"id",
                as:"SiteAddressCountry"
            },
         
        },
        {
            $lookup:{
                from:"contactpeople",
                localField:"CustomerId",
                foreignField:"sourceId",
                as:"ConatctPerson"
            },
         
        },
        {
            $lookup:{
                from:'salesenquiries',
                localField:'CustomerId',
                foreignField:'CustomerId',
                as:"SalesEnquiries"
            },
        },
        {
            $lookup:{
                from:'typeoffuelfireds',
                localField:'TypeOffuelfiredId',
                foreignField:'TypeOffuelfiredId',
                as:"TypeOffuelfired"
            },
        },

       
      // Your other $lookup stages here
    );
  
      const result = await customer.aggregate(aggregationPipeline);
  
      res.json({
        count: result.length,
        message: 'Get data by Customer Type and City',
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'Some error occurred while fetching customer data.' + error.message,
      });
    }
  });
  

module.exports = router;
