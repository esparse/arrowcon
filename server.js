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
const Project = require('./routes/Project_routes')
const PurchaseOrder = require('./routes/PurchaseOrder_routes')
const CustomerQuotation = require('./routes/CustomerQuotation_routes')
const PurchaseScheduling = require('./routes/PurchaseScheduling_routes')
// const PurchaseInvoice = require('./routes/PurchaseInvoice_routes')
// const PurchaseEnquiry = require('./routes/PurchaseEnquiry_routes')
const Suplier = require('./routes/Suplier_routes');
const Department = require('./routes/DepartMent_routes');
const Role = require('./routes/Role_routes');
const Employee = require('./routes/Employee_routes');
const AdminLogin = require('./routes/Admin_routes');
const AdminForgotPassword = require('./routes/AdminForgotPassword_routes');
// const StockCreation = require('./routes/StockCreation_routes');
// const PurchaseQuotation = require('./routes/PurchaseQuotation_routes');
// const PurchaseEnquiryViaIndent = require('./routes/PurchaseEnquiryViaIndent_routes');
// const CompanyDetails = require('./routes/Company_routes');
const SalesEnquiry = require('./routes/SalesEnquiry_routes');
const PurchaseEstimationEnquiry = require('./routes/PurchaseEstimationEnquiry_routes');
const SalesOrderTransfer = require('./routes/SalesOrderTransfer_routes');
const SalesQuotion = require('./routes/SalesQuotion_routes');
// const productService = require('./routes/productService_routes');
// const DashboardApi = require('./routes/dashboardApi_routes');
// const ProjectStatus = require('./routes/ProjectStatus_routes');
// const projectReview = require('./routes/ProjectReview_routes');
// const lead = require('./routes/lead_routes');
// const projectapi = require('./routes/projectAPi_routes');
// const tag = require('./routes/tagId_routes');
// const ProjectAttachment = require('./routes/projectattachment_routes');
// const salesEnquiryFilter = require('./routes/salesenquiryapi_routes');
// const empcontact = require('./routes/empcontact_routes');
// const empexperience = require('./routes/exprience_routes');
// const Academic = require('./routes/Academic_routes');
// const DrivingLicense = require('./routes/DrivingLicense_routes');
// const UniqueIdentification = require('./routes/UniqueIdentification_routes');
// const PassportDetails = require('./routes/PassportDetails_routes');
// const PANDetails = require('./routes/PANDetails_routes');
// const familyinformation = require('./routes/familyinformation_routes');
// const Bank = require('./routes/Bank_routes');
// const VisaInformation = require('./routes/VisaInformation_routes');
// const MedicalInformation = require('./routes/MedicalInformation_routes');
// const VehicleInformation = require('./routes/VehicleInformation_routes');
// const Timesheet = require('./routes/Timesheet_routes');
// const incomeDetails = require('./routes/incomeDetails_routes');
// const property = require('./routes/propertyDetails_routes');
// const Deduction = require('./routes/Deduction_routes');
// const leave = require('./routes/leave_routes');
// const BusinessExpense = require('./routes/BusinessExpense_routes');
// const LocalTravelExpense = require('./routes/LocalTravelExpense_routes');
// const tripExpense = require('./routes/trip_routes');
// const RaiseaTicket = require('./routes/RaiseaTicket_routes');
// const InvestmentDeclaration = require('./routes/InvestmentDeclaration_routes');
// const CTCItems = require('./routes/CTCItems_routes');
// const Allowance = require('./routes/Allowance_routes');
// const NewDeduction = require('./routes/NewDeduction_routes');
// const Overtime = require('./routes/Overtime_routes');
// const SalaryStructure = require('./routes/SalaryStructure_routes');
// const AssignAllowance = require('./routes/AssignAllowance_routes');
// const AssignDeductions = require('./routes/AssignDeductions_routes');
// const MiscellaneousLoan = require('./routes/MiscellaneousLoan_routes');
// const MiscellaneousExistingloan = require('./routes/MiscellaneousExistingloan_routes');
// const loan = require('./routes/Loan_routes');
// const VoucherPayments = require('./routes/VoucherPayments_routes');
// const LeaveBalances = require('./routes/LeaveBalances_routes');
// const CompOff = require('./routes/CompOff_routes');
// const OrganizationUnit = require('./routes/OrganizationUnit_routes');
// const Biomatric = require('./routes/Biomatric_routes');
// const AttendanceConfiguration = require('./routes/AttendanceConfiguration_routes');
// const Shift = require('./routes/Shift_routes');
// const location = require('./routes/location_routes');
// const IPAddress = require('./routes/IPAddress_routes');
// const Roster = require('./routes/Roster_routes');
// const Notes = require('./routes/Notes_routes');
// const CallOutCategory = require('./routes/CallOutCategory_routes');
// const Subscription = require('./routes/Subscription_routes');
// const ExpenseConfiguration = require('./routes/ExpenseConfiguration_routes');
// const HolidayCalender = require('./routes/HolidayCalender_routes');
// const Holiday = require('./routes/Holiday_routes');
// const FieldConfiguration = require('./routes/FieldConfiguration_routes');
// const OnboardingConfiguration = require('./routes/OnboardingConfiguration_routes');
// const planforleave = require('./routes/planforleave_routes');
// const Roast = require('./routes/Roast_routes');
// const ReportingStructure = require('./routes/ReportingStructure_routes');
// const ReportingManager = require('./routes/ReportingManager_routes');
// const ApprovalFlow = require('./routes/ApprovalFlow_routes');
const document = require('./routes/Document_routes');

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
  app.use("/api/v1",Project)
  app.use("/api/v1",PurchaseOrder)
  app.use("/api/v1",CustomerQuotation)
  app.use("/api/v1",PurchaseScheduling)
  // app.use("/api/v1",PurchaseInvoice)
  // app.use("/api/v1",PurchaseEnquiry)
  app.use("/api/v1",Suplier)
  app.use("/api/v1",Department)
  app.use("/api/v1",Role)
  app.use("/api/v1",Employee)
  app.use("/api/v1",AdminLogin)
  app.use("/api/v1",AdminForgotPassword)
  // app.use("/api/v1",StockCreation)
  // app.use("/api/v1",PurchaseQuotation)
  // app.use("/api/v1",PurchaseEnquiryViaIndent)
  // app.use("/api/v1",CompanyDetails)
  app.use("/api/v1",SalesEnquiry)
  app.use("/api/v1",PurchaseEstimationEnquiry)
  app.use("/api/v1",SalesOrderTransfer)
  app.use("/api/v1",SalesQuotion)
  // app.use("/api/v1",productService)
  // app.use("/api/v1",DashboardApi)
  // app.use("/api/v1",ProjectStatus)
  // app.use("/api/v1",projectReview)
  // app.use("/api/v1",lead)
  // app.use("/api/v1",projectapi)
  // app.use("/api/v1",tag)
  // app.use("/api/v1",ProjectAttachment)
  // app.use("/api/v1",salesEnquiryFilter)
  // app.use("/api/v1",empcontact)
  // app.use("/api/v1",empexperience)
  // app.use("/api/v1",Academic)
  // app.use("/api/v1",DrivingLicense)
  // app.use("/api/v1",UniqueIdentification)
  // app.use("/api/v1",PassportDetails)
  // app.use("/api/v1",PANDetails)
  // app.use("/api/v1",familyinformation)
  // app.use("/api/v1",Bank)
  // app.use("/api/v1",VisaInformation)
  // app.use("/api/v1",MedicalInformation)
  // app.use("/api/v1",VehicleInformation)
  // app.use("/api/v1",Timesheet)
  // app.use("/api/v1",incomeDetails)
  // app.use("/api/v1",property)
  // app.use("/api/v1",Deduction)
  // app.use("/api/v1",leave)
  // app.use("/api/v1",BusinessExpense)
  // app.use("/api/v1",LocalTravelExpense)
  // app.use("/api/v1",tripExpense)
  // app.use("/api/v1",RaiseaTicket)
  // app.use("/api/v1",InvestmentDeclaration)
  // app.use("/api/v1",CTCItems)
  // app.use("/api/v1",Allowance)
  // app.use("/api/v1",NewDeduction)
  // app.use("/api/v1",Overtime)
  // app.use("/api/v1",SalaryStructure)
  // app.use("/api/v1",AssignAllowance)
  // app.use("/api/v1",AssignDeductions)
  // app.use("/api/v1",MiscellaneousLoan)
  // app.use("/api/v1",MiscellaneousExistingloan)
  // app.use("/api/v1",loan)
  // app.use("/api/v1",VoucherPayments)
  // app.use("/api/v1",LeaveBalances)
  // app.use("/api/v1",CompOff)
  // app.use("/api/v1",OrganizationUnit)
  // app.use("/api/v1",Biomatric)
  // app.use("/api/v1",AttendanceConfiguration)
  // app.use("/api/v1",Shift)
  // app.use("/api/v1",location)
  // app.use("/api/v1",IPAddress)
  // app.use("/api/v1",Roster)
  // app.use("/api/v1",Notes)
  // app.use("/api/v1",CallOutCategory)
  // app.use("/api/v1",Subscription)
  // app.use("/api/v1",ExpenseConfiguration)
  // app.use("/api/v1",Holiday)
  // app.use("/api/v1",HolidayCalender)
  // app.use("/api/v1",FieldConfiguration)
  // app.use("/api/v1",OnboardingConfiguration)
  // app.use("/api/v1",planforleave)
  // app.use("/api/v1",Roast)
  // app.use("/api/v1",ReportingStructure)
  // app.use("/api/v1",ReportingManager)
  // app.use("/api/v1",ApprovalFlow)
  app.use("/api/v1",document)
 


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))

