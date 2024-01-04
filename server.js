const express = require('express')
const app = express()
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
// const User = require('./routes/user_routes')
const Customer = require('./routes/customer_routes')
const Customertype = require('./routes/customertype_routes')
const CustomerCategory = require('./routes/customercategory_routes')
const CustomerRegion = require('./routes/CustomerRegion_routes')
const location = require('./routes/location_routes')
const CustomerIndustry = require('./routes/CustomerIndustry_routes')
const Equipment = require('./routes/Equipment_routes')
const TypeOfEquipment = require('./routes/TypeOfEquipment_routes')
const Capacity = require('./routes/Capacity_routes')
const MainSteamPressure = require('./routes/MainSteamPressure_routes')
const MainSteamTemperature = require('./routes/MainSteamTemperature_routes')
const PollutionControlEquipment = require('./routes/PollutionControlEquipment_routes')
const LegalStructure = require('./routes/LegalStructure_routes')

const Project = require('./routes/Project_routes')
const PurchaseOrder = require('./routes/PurchaseOrder_routes')
const CustomerQuotation = require('./routes/CustomerQuotation_routes')
const PurchaseScheduling = require('./routes/PurchaseScheduling_routes')
const Suplier = require('./routes/Suplier_routes');
const Department = require('./routes/DepartMent_routes');
const Role = require('./routes/Role_routes');
const Employee = require('./routes/Employee_routes');
const AdminLogin = require('./routes/Admin_routes');
const AdminForgotPassword = require('./routes/AdminForgotPassword_routes');

const SalesEnquiry = require('./routes/SalesEnquiry_routes');
const SalesEnquirylogin = require('./routes/salesEnquiryLogin_routes');
const SalesEnquiryforgotpassword = require('./routes/salesEnquiryforgotPassword');
const PurchaseEnquiryforgotpassword = require('./routes/PurchaseEnquiryforgotPassword');

const PurchaseEstimationEnquiry = require('./routes/PurchaseEstimationEnquiry_routes');
const SalesOrderTransfer = require('./routes/SalesOrderTransfer_routes');
const SalesQuotion = require('./routes/SalesQuotion_routes');

const document = require('./routes/Document_routes');
const group = require('./routes/Group_routes');
const PurchaseEnquiry = require('./routes/PurchaseEnquiry_routes');
const PurchaseEnquirylogin = require('./routes/PurchaseEnquirylogin_routes');
const state = require('./routes/state_routes');
const City = require('./routes/city_routes');
const BussinessCommodityService = require('./routes/BussinessCommodityService_routes');
const OfferingType = require('./routes/OfferingType_routes');
const Weightedsales = require('./routes/Weightedsales_routes');
const EnquiryType = require('./routes/EnquiryType_routes');
const EnquiryStatus = require('./routes/EnquiryStatus_routes');
const salesEnquiryitemdetails = require('./routes/salesEnquiryItemDetails_routes');
const FreightInsurance = require('./routes/FreightInsurance_routes');
const Inspection = require('./routes/Inspection_routes');
const SupplierReferenceQuote = require('./routes/SupplierReferenceQuote_routes');
const Liquidateddamages = require('./routes/Liquidateddamages_routes');
const remark = require('./routes/remark_routes');
const Country = require('./routes/Country_routes');
const ContactPerson = require('./routes/ContactPerson_routes');
const getGeoGraphicServiceArea = require('./routes/GeoGraphicServiceArea_routes');
const ProjectType = require('./routes/ProjectType_routes');
const SalesQuotionItem = require('./routes/SalesQuotionItemDetils_routes');
const QuotionCurrency = require('./routes/QuotionCurrency_routes');
const InstallationType = require('./routes/InstallationType_routes');
const Status = require('./routes/Status_routes');
const itemdetailsinpurchaseestimationenquiry = require('./routes/itemdetailsinpurchaseestimationenquiry_routes');
const Allocatecostestimationtopurchaseteam = require('./routes/Allocatecostestimationtopurchaseteam_routes');
const purchasetramlogin = require('./routes/purchaseloginteam_routes');
const purchaseteamforgotpassword= require('./routes/purchaseteam_forgotpassword_routes');
const TypeOffuelfired= require('./routes/TypeOffuelfired_routes');
// const Personcontact = require('./middleware/contactperson');

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Arrow Enegry , ADMIN , User API",
        version: "1.0.0",
        description: "A simple Express Library API",
       
      },
  
      servers: [
        {
          url: "https://arrowcon1.azurewebsites.net/",
          description: "Espare Documentation",
        },
      ],
    },
    apis: ["./Routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs-arrowcon", swaggerUI.serve, swaggerUI.setup(specs));
  // app.use("/api/v1",User)
  app.use("/api/v1",Customer)
  app.use("/api/v1",Customertype)
  app.use("/api/v1",CustomerCategory)
  app.use("/api/v1",CustomerRegion)
  app.use("/api/v1",location)
  app.use("/api/v1",CustomerIndustry)
  app.use("/api/v1",Equipment)
  app.use("/api/v1",TypeOfEquipment)
  app.use("/api/v1",Capacity)
  app.use("/api/v1",MainSteamPressure)
  app.use("/api/v1",MainSteamTemperature)
  app.use("/api/v1",PollutionControlEquipment) 
  app.use("/api/v1",LegalStructure) 
  
  app.use("/api/v1",Project)
  app.use("/api/v1",PurchaseOrder)
  app.use("/api/v1",CustomerQuotation)
  app.use("/api/v1",PurchaseScheduling)

  app.use("/api/v1",Suplier)
  app.use("/api/v1",Department)
  app.use("/api/v1",Role)
  app.use("/api/v1",Employee)
  app.use("/api/v1",AdminLogin)
  app.use("/api/v1",AdminForgotPassword)
 
  app.use("/api/v1",SalesEnquiry)
  app.use("/api/v1",PurchaseEstimationEnquiry)
  app.use("/api/v1",SalesOrderTransfer)
  app.use("/api/v1",SalesQuotion)
  
  app.use("/api/v1",document)
  app.use("/api/v1",group)
  app.use("/api/v1",PurchaseEnquiry)
  app.use("/api/v1",PurchaseEnquirylogin)
  app.use("/api/v1",SalesEnquirylogin)
  app.use("/api/v1",SalesEnquiryforgotpassword)
  app.use("/api/v1",PurchaseEnquiryforgotpassword)
  app.use("/api/v1",City)
  app.use("/api/v1",state)
  app.use("/api/v1",BussinessCommodityService)
  app.use("/api/v1",OfferingType)
  app.use("/api/v1",Weightedsales)
  app.use("/api/v1",EnquiryType)
  app.use("/api/v1",EnquiryStatus)
  app.use("/api/v1",salesEnquiryitemdetails)
  app.use("/api/v1",FreightInsurance)
  app.use("/api/v1",Inspection)
  app.use("/api/v1",SupplierReferenceQuote)
  app.use("/api/v1",Liquidateddamages)
  app.use("/api/v1",remark)
  app.use("/api/v1",Country)
  app.use("/api/v1",ContactPerson)
  app.use("/api/v1",getGeoGraphicServiceArea)
  app.use("/api/v1",ProjectType)
  app.use("/api/v1",SalesQuotionItem)
  app.use("/api/v1",QuotionCurrency)
  app.use("/api/v1",InstallationType)
  app.use("/api/v1",Status)
  app.use("/api/v1",itemdetailsinpurchaseestimationenquiry)
  app.use("/api/v1",Allocatecostestimationtopurchaseteam)
  app.use("/api/v1",purchasetramlogin)
  app.use("/api/v1",purchaseteamforgotpassword)
  app.use("/api/v1",TypeOffuelfired)
  // app.use("/api/v1",Personcontact)
 


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))

