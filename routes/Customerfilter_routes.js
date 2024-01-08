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
// city
router.get('/customersbyheadofficecity/:headOfficeCity', async (req, res) => {
    try {
        const headOfficeCity = req.params.headOfficeCity;

        const aggregationPipeline = [];

        // Add $match stage to filter by HeadOfficeCity
        if (headOfficeCity) {
            aggregationPipeline.push({
                $lookup: {
                    from: "cities",
                    localField: "HeadOfficeCityId",
                    foreignField: "id",
                    as: "HeadOfficeCity"
                },
            });
            // Use $unwind if 'HeadOfficeCity' is an array
            // aggregationPipeline.push({ $unwind: '$HeadOfficeCity' });
            aggregationPipeline.push({
                $match: {
                    'HeadOfficeCity.name': headOfficeCity,
                },
                
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by HeadOfficeCity',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

//   equipment type

router.get('/customersequipment/:Equipment', async (req, res) => {
    try {
      const Equipment = req.params.Equipment;
  
      const aggregationPipeline = [];
  
      // Add $match stage to filter by Equipment
      if (Equipment) {
        aggregationPipeline.push({
          $lookup: {
            from: "equipment",
            localField: "EquipmentId",
            foreignField: "EquipmentId",
            as: "Equipment",
          },
        });
        // Use the $unwind stage if 'Equipment' is an array (depends on your data model)
        // aggregationPipeline.push({ $unwind: '$Equipment' });
        aggregationPipeline.push({
          $match: {
            'Equipment.Equipment': Equipment,
          },
        });
      }
  
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
        // Add other $lookup stages here
      );
    //   console.log('Aggregation Pipeline:', aggregationPipeline);
      const result = await customer.aggregate(aggregationPipeline);
  
      res.json({
        count: result.length,
        message: 'Get data by Customer Equipment',
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'Some error occurred while fetching customer data.' + error.message,
      });
    }
  });
  
// type of or make of equipment

router.get('/customerstypeequipment/:TypeOfEquipment', async (req, res) => {
    try {
      const TypeOfEquipment = req.params.TypeOfEquipment;
  
      const aggregationPipeline = [];
  
      // Add $match stage to filter by TypeOfEquipment
      if (TypeOfEquipment) {
        aggregationPipeline.push({
            $lookup: {
                from: "typeofequipments",
                localField: "TypeOfEquipmentId",
                foreignField: "TypeOfEquipmentId",
                as: "typeOfEquipment"
            },
        });
        // Use $unwind if 'typeOfEquipment' is an array
        // aggregationPipeline.push({ $unwind: '$typeOfEquipment' });
        aggregationPipeline.push({
          $match: {
            'typeOfEquipment.TypeOfEquipment': TypeOfEquipment,
          },
        });
      }
  
      // Add other stages as needed
      aggregationPipeline.push(
        // Your existing $lookup stages here
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
      );
  
      const result = await customer.aggregate(aggregationPipeline);
  
      res.json({
        count: result.length,
        message: 'Get data by Customer TypeOfEquipment',
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'Some error occurred while fetching customer data.' + error.message,
      });
    }
});
// type of fuel fired

router.get('/customerstypetypeoffuelfired/:TypeOffuelfired', async (req, res) => {
    try {
        const TypeOffuelfired = req.params.TypeOffuelfired;

        const aggregationPipeline = [];

        // Add $match stage to filter by TypeOffuelfired
        if (TypeOffuelfired) {
            aggregationPipeline.push({
                $lookup: {
                    from: "typeoffuelfireds",
                    localField: "TypeOffuelfiredId",
                    foreignField: "TypeOffuelfiredId",
                    as: "TypeOffuelfired"
                },
            });
            // Use $unwind if 'TypeOffuelfired' is an array
            // aggregationPipeline.push({ $unwind: '$TypeOffuelfired' });
            aggregationPipeline.push({
                $match: {
                    'TypeOffuelfired.TypeOffuelfired': TypeOffuelfired,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup: {
                    from: "states",
                    localField: "HeadOfficeStateId",
                    foreignField: "id",
                    as: "HeadOfficeState"
                },
            },
            {
                $lookup: {
                    from: "customertypes",
                    localField: "CustomerTypeId",
                    foreignField: "CustomerTypeId",
                    as: "CustomerType"
                },
            },
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by Customer TypeOffuelfired',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

// No of installation

router.get('/customersbyinstallation/:noOfInstallation', async (req, res) => {
    try {
        const noOfInstallation = req.params.noOfInstallation;

        const aggregationPipeline = [];

        // Add $match stage to filter by NoOfInstallation
        if (noOfInstallation) {
            aggregationPipeline.push({
                $match: {
                    'NoOfInstallation': noOfInstallation,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by NoOfInstallation',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

// year of installtion 
router.get('/customersbyyear/:yearOfInstallation', async (req, res) => {
    try {
        const yearOfInstallation = req.params.yearOfInstallation;

        const aggregationPipeline = [];

        // Add $match stage to filter by YearOfInstallation
        if (yearOfInstallation) {
            aggregationPipeline.push({
                $match: {
                    'YearOfInstallation': yearOfInstallation,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by YearOfInstallation',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});
// pollution control
router.get('/customersbypollutioncontrol/:pollutionControlEquipment', async (req, res) => {
    try {
        const pollutionControlEquipment = req.params.pollutionControlEquipment;

        const aggregationPipeline = [];

        // Add $match stage to filter by PollutionControlEquipment
        if (pollutionControlEquipment) {
            aggregationPipeline.push({
                $lookup: {
                    from: "pollutioncontrolequipments",
                    localField: "PollutionControlEquipmentId",
                    foreignField: "PollutionControlEquipmentId",
                    as: "PollutionControlEquipment"
                },
            });
            // Use $unwind if 'PollutionControlEquipment' is an array
            // aggregationPipeline.push({ $unwind: '$PollutionControlEquipment' });
            aggregationPipeline.push({
                $match: {
                    'PollutionControlEquipment.PollutionControlEquipment': pollutionControlEquipment,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup: {
                    from: "states",
                    localField: "HeadOfficeStateId",
                    foreignField: "id",
                    as: "HeadOfficeState"
                },
            },
            {
                $lookup: {
                    from: "customertypes",
                    localField: "CustomerTypeId",
                    foreignField: "CustomerTypeId",
                    as: "CustomerType"
                },
            },
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by PollutionControlEquipment',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});
// make pollution control
router.get('/customersbymakeofpollutioncontrol/:makeOfPollutionControlEquipment', async (req, res) => {
    try {
        const makeOfPollutionControlEquipment = req.params.makeOfPollutionControlEquipment;

        const aggregationPipeline = [];

        // Add $match stage to filter by MakeOfPollutionControlEquipMent
        if (makeOfPollutionControlEquipment) {
           
            // Use $unwind if 'PollutionControlEquipment' is an array
            // aggregationPipeline.push({ $unwind: '$PollutionControlEquipment' });
            aggregationPipeline.push({
                $match: {
                    'MakeOfPollutionControlEquipMent': makeOfPollutionControlEquipment,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by MakeOfPollutionControlEquipMent',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

// customersbycustomerstatus
router.get('/customersbycustomerstatus/:customerStatus', async (req, res) => {
    try {
        const customerStatus = req.params.customerStatus;

        const aggregationPipeline = [];

        // Add $match stage to filter by CustomerStatus
        if (customerStatus) {
            aggregationPipeline.push({
                $match: {
                    'CustomerStatus': customerStatus,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by CustomerStatus',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

// head office state
router.get('/customersbyheadofficestate/:headOfficeState', async (req, res) => {
    try {
        const headOfficeState = req.params.headOfficeState;

        const aggregationPipeline = [];

        // Add $match stage to filter by HeadOfficeState
        if (headOfficeState) {
            aggregationPipeline.push({
                $lookup: {
                    from: "states",
                    localField: "HeadOfficeStateId",
                    foreignField: "id",
                    as: "HeadOfficeState"
                },
            });
            // Use $unwind if 'HeadOfficeState' is an array
            // aggregationPipeline.push({ $unwind: '$HeadOfficeState' });
            aggregationPipeline.push({
                $match: {
                    'HeadOfficeState.name': headOfficeState,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by HeadOfficeState',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching customer data.' + error.message,
        });
    }
});

// countrty

router.get('/customersbyheadofficecountry/:headOfficeCountry', async (req, res) => {
    try {
        const headOfficeCountry = req.params.headOfficeCountry;

        const aggregationPipeline = [];

        // Add $match stage to filter by HeadOfficeCountry
        if (headOfficeCountry) {
            aggregationPipeline.push({
                $lookup: {
                    from: "countries",
                    localField: "HeadOfficeCountryId",
                    foreignField: "id",
                    as: "HeadOfficeCountry"
                },
            });
            // Use $unwind if 'HeadOfficeCountry' is an array
            // aggregationPipeline.push({ $unwind: '$HeadOfficeCountry' });
            aggregationPipeline.push({
                $match: {
                    'HeadOfficeCountry.name': headOfficeCountry,
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
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
            // ... (other $lookup stages)
        );

        const result = await customer.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by HeadOfficeCountry',
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
