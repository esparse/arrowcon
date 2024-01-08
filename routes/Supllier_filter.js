const express = require('express');
const router = express.Router();

// Assuming you have a 'supplier' model/schema
const supplier = require('../model/SuplierDetails_model');

router.get('/suppliersbysuppliername/:supplierName', async (req, res) => {
    try {
        const supplierName = req.params.supplierName;

        // Add $match stage to filter by SupplierName (case-sensitive)
        const aggregationPipeline = [
            {
                $match: {
                  $or: [
                    
                    { SuplierName: { $regex: new RegExp(supplierName, 'i') } }, // Case-insensitive regex on the 'CustomerName' field
                    // Add additional $or conditions for other fields as needed
                  ],
                },
              },
            // Add other stages as needed
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customertypes',
                    localField:'SuplierTypeId',
                    foreignField:'CustomerTypeId',
                    as:"SuplierType"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
             
            },
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
             
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
             
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",  // Corrected field name
                    foreignField:"id",
                    as:"BillingAddressCountry"  // Corrected field name
                },
             
            },
            // ... (other $lookup stages)
        ];

        const result = await supplier.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by SupplierName (case-sensitive)',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching supplier data.' + error.message,
        });
    }
});


router.get('/suppliersbybussinesscommodityservice/:bussinessCommodityService', async (req, res) => {
    try {
        const bussinessCommodityService = req.params.bussinessCommodityService;

        const aggregationPipeline = [];

        // Add $match stage to filter by BussinessCommodityService
        if (bussinessCommodityService) {
            
                aggregationPipeline.push( {
                    $lookup:{
                        from:"bussinesscommodityservices",
                        localField:"BussinessCommodityServiceId",
                        foreignField:"BussinessCommodityServiceId",
                        as:"BussinessCommodityService"
                    },
                 
                },);
                // Use $unwind if 'HeadOfficeState' is an array
                // aggregationPipeline.push({ $unwind: '$HeadOfficeState' });
             
    
            aggregationPipeline.push({
                $match: {
                    'BussinessCommodityService.BussinessCommodityService': bussinessCommodityService,
                },
            });
        }
        console.log(bussinessCommodityService);

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customertypes',
                    localField:'SuplierTypeId',
                    foreignField:'CustomerTypeId',
                    as:"SuplierType"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
             
            },
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
             
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
             
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",
                    foreignField:"id",
                    as:"BillingAddressCountryId"
                },
             
            },
        );

        const result = await supplier.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by BussinessCommodityService',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching supplier data.' + error.message,
        });
    }
});

router.get('/suppliersbycity/:cityId', async (req, res) => {
    try {
        const cityId = req.params.cityId;

        const aggregationPipeline = [];

        // Add $match stage to filter by cityId
        if (cityId) {
            aggregationPipeline.push({
                $match: {
                    $or: [
                        { 'RegisteredOfficeCityId': cityId },
                        { 'BillingAddressCityId': cityId },
                    ],
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customertypes',
                    localField:'SuplierTypeId',
                    foreignField:'CustomerTypeId',
                    as:"SuplierType"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
            },
            // Add other $lookup stages as needed
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",
                    foreignField:"id",
                    as:"BillingAddressCountry"
                },
            },
        );

        const result = await supplier.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by City',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching supplier data.' + error.message,
        });
    }
});
router.get('/suppliersbystate/:stateId', async (req, res) => {
    try {
        const stateId = req.params.stateId;

        const aggregationPipeline = [];

        // Add $match stage to filter by stateId
        if (stateId) {
            aggregationPipeline.push({
                $match: {
                    $or: [
                        { 'RegisteredOfficeStateId': stateId },
                        { 'BillingAddressStateId': stateId },
                    ],
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customertypes',
                    localField:'SuplierTypeId',
                    foreignField:'CustomerTypeId',
                    as:"SuplierType"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
            },
            // Add other $lookup stages as needed
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",
                    foreignField:"id",
                    as:"BillingAddressCountry"
                },
            },
        );

        const result = await supplier.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by State',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching supplier data.' + error.message,
        });
    }
});
router.get('/suppliersbycountry/:countryId', async (req, res) => {
    try {
        const countryId = req.params.countryId;

        const aggregationPipeline = [];

        // Add $match stage to filter by countryId
        if (countryId) {
            aggregationPipeline.push({
                $match: {
                    $or: [
                        { 'RegisteredOfficeCountryId': countryId },
                        { 'BillingAddressCountryId': countryId },
                    ],
                },
            });
        }

        // Add other stages as needed
        aggregationPipeline.push(
            // Your existing $lookup stages here
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customertypes',
                    localField:'SuplierTypeId',
                    foreignField:'CustomerTypeId',
                    as:"SuplierType"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
            },
            // Add other $lookup stages as needed
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",
                    foreignField:"id",
                    as:"BillingAddressCountry"
                },
            },
        );

        const result = await supplier.aggregate(aggregationPipeline);

        res.json({
            count: result.length,
            message: 'Get data by Country',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Some error occurred while fetching supplier data.' + error.message,
        });
    }
});



module.exports = router;
