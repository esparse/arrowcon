const customer = require("../model/Customer_model")
exports.getcustomersdetailsbyfilter = async (req,res)=>{
    try {
        const  CustomerName =  req.params.CustomerName
        const result = await customer.aggregate([
            {
                $match: {
                  $or: [
                    
                    { CustomerName: { $regex: new RegExp(CustomerName, 'i') } }, // Case-insensitive regex on the 'CustomerName' field
                    // Add additional $or conditions for other fields as needed
                  ],
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
        ])
    //   const result=  customer.aggregate(pipeline);
        res.json({
            message:"get all customer by filter",
            data:result})
    } catch (error) {
        res.json({error:error.message})
    }
}

// controllers/customerController.js


// controllers/customerController.js




// Assuming you have a model for customer
exports.getcustomersdetailsbyfilters= async (req, res) => {
  try {
    const filterConditions = buildFilterConditions(req.query);

    const aggregationPipeline = [];
    
    // Add $match stage only if filterConditions is not empty
    if (filterConditions.length > 0) {
      aggregationPipeline.push({
        $match: {
          $and: filterConditions,
        },
      });
    }
    
    aggregationPipeline.push(
        // {
        //     $lookup:{
        //         from:"states",
        //         localField:"HeadOfficeStateId",
        //         foreignField:"id",
        //         as:"HeadOfficeState"
        //     },
         
        // },
        {
            $lookup:{
                from:"customertypes",
                localField:"CustomerTypeId",
                foreignField:"CustomerTypeId",
                as:"CustomerType"
            },
         
        },
        {
            $match: {
              'CustomerType.CustomerType': queryParams, // Specify the desired CustomerType value
            },
          },
        // {
        //     $lookup:{
        //         from:"cities",
        //         localField:"HeadOfficeCityId",
        //         foreignField:"id",
        //         as:"HeadOfficeCity"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"states",
        //         localField:"SiteAddressStateId",
        //         foreignField:"id",
        //         as:"SiteAddressState"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"cities",
        //         localField:"SiteAddressCityId",
        //         foreignField:"id",
        //         as:"SiteAddressCity"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"customercategories",
        //         localField:"CustomerCategoryId",
        //         foreignField:"CustomerCategoryId",
        //         as:"CustomerCategory"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"customerregions",
        //         localField:"CustomerRegionId",
        //         foreignField:"CustomerRegionId",
        //         as:"CustomerRegion"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"locations",
        //         localField:"locationId",
        //         foreignField:"locationId",
        //         as:"location"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"customerindustries",
        //         localField:"CustomerIndustryId",
        //         foreignField:"CustomerIndustryId",
        //         as:"CustomerIndustry"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"equipment",
        //         localField:"EquipmentId",
        //         foreignField:"EquipmentId",
        //         as:"Equipment"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"typeofequipments",
        //         localField:"TypeOfEquipmentId",
        //         foreignField:"TypeOfEquipmentId",
        //         as:"typeOfEquipment"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"capacities",
        //         localField:"CapacityId",
        //         foreignField:"CapacityId",
        //         as:"Capacity"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"mainsteampressures",
        //         localField:"MainSteamPressureId",
        //         foreignField:"MainSteamPressureId",
        //         as:"MainSteamPressure"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"mainsteamtemperatures",
        //         localField:"MainSteamTemperatureId",
        //         foreignField:"MainSteamTemperatureId",
        //         as:"MainSteamTemperature"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"pollutioncontrolequipments",
        //         localField:"PollutionControlEquipmentId",
        //         foreignField:"PollutionControlEquipmentId",
        //         as:"PollutionControlEquipment"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"countries",
        //         localField:"HeadOfficeCountryId",
        //         foreignField:"id",
        //         as:"HeadOfficeCountry"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"countries",
        //         localField:"SiteAddressCountryId",
        //         foreignField:"id",
        //         as:"SiteAddressCountry"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:"contactpeople",
        //         localField:"CustomerId",
        //         foreignField:"sourceId",
        //         as:"ConatctPerson"
        //     },
         
        // },
        // {
        //     $lookup:{
        //         from:'salesenquiries',
        //         localField:'CustomerId',
        //         foreignField:'CustomerId',
        //         as:"SalesEnquiries"
        //     },
        // },
        // {
        //     $lookup:{
        //         from:'typeoffuelfireds',
        //         localField:'TypeOffuelfiredId',
        //         foreignField:'TypeOffuelfiredId',
        //         as:"TypeOffuelfired"
        //     },
        // },
    );
    
    const result = await customer.aggregate(aggregationPipeline);


    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: 'Some error occurred while fetching customer data.' + error.message,
    });
  }
}

// Helper function to dynamically build filter conditions




// Helper function to dynamically build filter conditions
function buildFilterConditions(queryParams) {
    const filterConditions = [];
  
    // Example: If "customertype" is present in query parameters, add it to the filter conditions
    if (queryParams.CustomerTypeId) {
        filterConditions.push({
          CustomerTypeId: { $eq: parseInt(queryParams.CustomerTypeId) }, // Convert to integer if needed
        });
      }
  
    // Add more conditions as needed for other filters
  
    return filterConditions;
  }
  