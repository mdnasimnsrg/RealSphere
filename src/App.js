import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FacilityManager from "./components/FacilityManager";
import ResourceManager from "./components/ResourceManager";
import PropertyManager from "./components/PropertyManager";
import Financials from "./components/Financials";
import GeneralLedger from "./components/GeneralLedger";
import BankingSection from "./components/Banking";
import BillsSection from "./components/BillSection";
import RecurringTransactions from "./components/RecurringTransactions";
import EftApprovals from "./components/EftApprovals";
import Budgets from "./components/Budgets";
import ChartAccounts from "./components/ChartAccounts";
import CompanyFinancials from "./components/CompanyFinancials";
import MaintenanceRequests from "./components/MaintenanceRequests";
import CreateMaintenanceRequest from "./components/CreateMaintanceRequest";
import MaintanceRequestView from "./components/MaintanceRequestView";
import PropertiesSection from "./components/PropertiesSection";
import GeneralInspectionView from "./components/GeneralInspectionView";
import GeneralRequests from "./components/GeneralRequest";
import GeneralRequestView from "./components/GeneralRequestView";
import CreateGeneralRequest from "./components/CreateGeneralRequest";
import InspectionMaster from "./components/InspectionMaster";
import InspectionItems from "./components/InspectionItems";
import InspectionItemDetails from "./components/InspectionItemDetails";
import InspectionMapping from "./components/InspectionMapping";
import InspectionMapDetails from "./components/InspectionMapDetails";
import MapUnitDetails from "./components/MapUnitDetails";
import ItemCategoryMaster from "./components/ItemCategoryMaster";
import ItemSubCategoryMaster from "./components/ItemSubCategoryMaster";
import UnitItemLocationMaster from "./components/UnitItemLocationMaster";
import ManufacturerMaster from "./components/ManufacturerMaster";
import CheckList from "./components/CheckList";
import AmenityBookingOverview from "./components/bireportmanagement/dashboard/AmenityBookingOverview";
import UtilityCategory from "./components/utilitymanagement/UtilityCategory";
import Utilities from "./components/utilitymanagement/Utilities";
import UtilitiesMapping from "./components/utilitymanagement/UtilitiesMapping";
import AccessGates from "./components/parkingmanagement/AccessGates";
import ParkingArea from "./components/parkingmanagement/ParkingArea";
import ParkingSlotMaster from "./components/parkingmanagement/ParkingSlotMaster";
import ParkingGroupingMaster from "./components/parkingmanagement/ParkingGroupingMaster";
import VisitorWorkerRequest from "./components/VisitorWorkerRequest";
import VisitorWorkerEntries from "./components/VisitorWorkerEntries";
import RegisteredWorkerRequest from "./components/RegisteredWorkerRequest";
import RegisteredWorkerEntries from "./components/RegisteredWorkerEntries";
import ParkingRequest from "./components/ParkingRequest";
import ParkingEntries from "./components/ParkingEntries";
import VendorEntries from "./components/VendorEntries";
import ServiceProviderEntries from "./components/ServiceProviderEntries";
import DeliveryOrderCollections from "./components/DeliveryOrderCollections";
import LeadOverviewReport from "./components/salesmanagement/LeadOverviewReport";
import OpportunityOverviewReport from "./components/salesmanagement/OpportunityOverviewReport";
import ReservationReport from "./components/salesmanagement/ReservationReport";
import TerminationReport from "./components/salesmanagement/TerminationReport";
import Accounts from "./components/Organizationadministration/accounts/Accounts";
import CreateAccounts from "./components/Organizationadministration/CreateAccounts";
import Customers from "./components/Organizationadministration/accounts/Customers";
import CustomerAccountCreate from "./components/Organizationadministration/accounts/CustomerAccountCreate";
import VendorAccountlist from "./components/Organizationadministration/accounts/VendorAccountlist";
import VendorAccountCreate from "./components/Organizationadministration/accounts/VendorAccountCreate";
import OwnerAccountList from "./components/Organizationadministration/accounts/OwnerAccountList";
import OwnerAccountCreate from "./components/Organizationadministration/accounts/OwnerAccountCreate";
import AccountdetailsUser from "./components/Organizationadministration/accounts/AccountdetailsUser";
import Company from "./components/organization/Company";
import CreateCompany from "./components/organization/CreateCompany";
import Companydetails from "./components/organization/CompanyDetails";
import EditCompany from "./components/organization/EditCompany";
import Department from "./components/organization/Department";
import Jobs from "./components/organization/Jobs";
import Professions from "./components/organization/Professions";
import ResourceMaster from "./components/organization/ResourceMaster";
import Teams from "./components/organization/Teams";
import UserInvitations from "./components/organization/UserInvitations";
import RegisteredWorkers from "./components/organization/RegisteredWorkers";
import AddRegisteredWorkers from "./components/organization/AddRegisteredWorkers";
import RegisteredWorkerDetails from "./components/organization/RegisteredWorkerDetails";
import EditRegisteredWorkers from "./components/organization/EditRegisteredWorkers";
import OrganizationHierarchy from "./components/organization/OrganizationHierarchy";
import TaxGroup from "./components/organization/TaxGroup";
import TaxItem from "./components/organization/TaxItem";
import Currency from "./components/organization/Currency";
import LeadImport from "./components/crm/LeadImport";
import UnitBlocking from "./components/crm/UnitBlocking";
import Reservations from "./components/crm/Reservations";
import ReservationDetails from "./components/crm/ReservationDetails";
import Quotations from "./components/crm/Quotations";
import QuotationsDetails from "./components/crm/QuotationsDetails";
import QuotationsInnerDetails from "./components/crm/QuotationsInnerDetails";
import Opportunity from "./components/crm/Opportunity";
import OpportunityDetails from "./components/crm/OpportunityDetails";
import Lead from "./components/crm/Lead";
import LeadDView from "./components/crm/LeadView";
import EditLead from "./components/crm/EditLead";
import QuickLease from "./components/crm/QuickLease";
import QuickLeaseDetails from "./components/crm/QuickLeaseDetails";
import PropertySearch from "./components/crm/PropertySearch";
import MaintenanceServiceRequests from "./components/MaintenanceServiceRequests/Maintenance&ServiceRequests";
import CreateMaintenanceServiceRequest from "./components/MaintenanceServiceRequests/CreateMaintanceServiceRequest";
import MaintanceServiceRequestView from "./components/MaintenanceServiceRequests/MaintanceServiceRequestView";
import EditMaintenanceServiceRequest from "./components/MaintenanceServiceRequests/EditMaintanceServiceRequest";
import ReservationsCRM from "./components/brokermanagementcrm/ReservationsCRM";
import ReservationsCRMDetails from "./components/brokermanagementcrm/ReservationsCRMDetails";
import QuotationsCRM from "./components/brokermanagementcrm/QuotationsCRM";
import QuotationsCRMDetails from "./components/brokermanagementcrm/QuotationsCRMDetails";
import QuotationsInnerCRMDetails from "./components/brokermanagementcrm/QuotationsInnerCRMDetails";
import OpportunityCRM from "./components/brokermanagementcrm/OpportunityCRM";
import OpportunityCRMDetails from "./components/brokermanagementcrm/OpportunityCRMDetails";
import LeadCRM from "./components/brokermanagementcrm/LeadCRM";
import LeadCRMView from "./components/brokermanagementcrm/LeadCRMView";
import EditLeadCRM from "./components/brokermanagementcrm/EditLeadCRM";
import PropertyCRMSearch from "./components/brokermanagementcrm/PropertyCRMSearch";
import CheckListGroup from "./components/CheckListGroup";
import CheckListGroupView from "./components/CheckListGroupView";
import CheckListGroupItemView from "./components/CheckListGroupItemView";
import Resources from "./components/ResourceManagement/Resource";
import ResourcesBooking from "./components/ResourceManagement/ResourceBooking";
import ResourceBookingDetails from "./components/ResourceManagement/ResourceBookingDetails";
import LeaveAndTimeOffType from "./components/ResourceManagement/LeaveAndTimeOffType";
import RegisteredWorker from "./components/ResourceManagement/RegisteredWorkers";
import AddRegisteredWorker from "./components/ResourceManagement/AddRegisteredWorkers";
import RegisteredWorkersDetails from "./components/ResourceManagement/RegisteredWorkersDetails";
import EditRegisteredWorkersNew from "./components/ResourceManagement/EditRegisteredWorkers";
import ProfessionsSkills from "./components/ResourceManagement/ProfessionSkills";
import ResourceGroup from "./components/ResourceManagement/ResourceGroup";
import SelfCheckInEntries from "./components/ResourceManagement/SelfCheck-InEntries";
import ResourceBoard from "./components/ImPlanner/ResourceBoard";
import ScheduleBoard from "./components/ImPlanner/ScheduleBoard";
import LeaveTimeOffBoard from "./components/ImPlanner/LeaveTimeOffBoard";
import DutyRoasterBoard from "./components/ImPlanner/DutyRosterBoard";
import ClientDashboard from "./components/bireportmanagement/dashboard/ClientDashboard";
import CommunityDashboard from "./components/bireportmanagement/dashboard/CommunityManager";
import FinanceManager from "./components/bireportmanagement/dashboard/FinanceManager";
import InspectionManager from "./components/bireportmanagement/dashboard/InspectionManager";
import ContractManager from "./components/bireportmanagement/dashboard/ContractManager";
import UtilityManager from "./components/bireportmanagement/dashboard/UtilityManager";
import SecurityManager from "./components/bireportmanagement/dashboard/SecurityManager";
import SalesManager from "./components/bireportmanagement/dashboard/SalesManager";
import WorkSpaceManager from "./components/bireportmanagement/dashboard/WorkSpaceManager";
import PropertyBoard from "./components/bireportmanagement/planner/PropertyBoard";
import PropertyDetails from "./components/bireportmanagement/planner/PropertyDetails";
import ActivityBoard from "./components/bireportmanagement/planner/ActivityBoard";
import AnnouncementBoard from "./components/bireportmanagement/planner/AnnouncementBoard";
import BiReportManagementResourseBoard from "./components/bireportmanagement/planner/ResourseBoard";
import AllContacts from "./components/contacts/AllContacts";
import ContactCustomers from "./components/contacts/Customers";
import ContactOwners from "./components/contacts/Owners";
import ContactBrokerAgents from "./components/contacts/BrokerAgents";
import ContactProspects from "./components/contacts/Prospects";
import ContactVendorProfile from "./components/contacts/VendorProfile";
import ContactServiceProviderProfile from "./components/contacts/ServiceProviderProfile";
import ContactPublicContactsDirectory from "./components/contacts/PublicContactsDirectory";
import OnboardMoveIn from "./components/ImWorkOrderManagement/OnboardMoveIn";
import DetailsOnboardMoveIn from "./components/ImWorkOrderManagement/DetailsOnboardMoveIn";
import InnerDetailsOnboardMoveIn from "./components/ImWorkOrderManagement/InnerDetailsOnboardMoveIn";
import OffboardMoveOut from "./components/ImWorkOrderManagement/OffboardMoveout";
import DetailsOffboardMoveOut from "./components/ImWorkOrderManagement/DetailsOffboardMoveout";
import InnerDetailsOffboardMoveOut from "./components/ImWorkOrderManagement/InnerDetailsOffboardMoveout";
import ShowcaseSiteVisit from "./components/ImWorkOrderManagement/ShowcaseSiteVisit";
import DetailsShowcaseSiteVisit from "./components/ImWorkOrderManagement/DetailsShowcaseSiteVisit";
import UnitHandOver from "./components/ImWorkOrderManagement/UnitHandover";
import DetailsUnitHandOver from "./components/ImWorkOrderManagement/DetailsUnitHandover";
import InnerDetailsUnitHandOver from "./components/ImWorkOrderManagement/InnerDetailsUnitHandover";
import UnitReadiness from "./components/ImWorkOrderManagement/UnitReadiness";
import DetailsUnitReadiness from "./components/ImWorkOrderManagement/DetailsUnitReadiness";
import GeneralInspectionJobs from "./components/ImWorkOrderManagement/GeneralInspectionJobs";
import DetailsGeneralInspectionJobs from "./components/ImWorkOrderManagement/DetailsGeneralInspectionJobs";
import SheduleBoard from "./components/bireportmanagement/planner/SheduleBoard";
import BiReportManagementSheduleBoard from "./components/bireportmanagement/planner/SheduleBoard";
import AmenityBookingBoard from "./components/bireportmanagement/planner/AmenityBookingBoard";
import ParkingBookingBoard from "./components/bireportmanagement/planner/ParkingBookingBoard";
import Contract360 from "./components/bireportmanagement/business360/Contract360";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState("Inspection Management");
  const handleModuleChange = (module) => {
    if (module) {
      setSelectedModule(module);
      localStorage.setItem("selected-module", module);
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    const module = localStorage.getItem("selected-module");
    setSelectedModule(module);
  }, [selectedModule]);

  useEffect(() => {
    const module = localStorage.getItem("selected-module");
    if (!module)
      return localStorage.setItem("selected-module", "Inspection Management");
  }, []);
  return (
    <Router>
      <div className="flex flex-col h-screen overflow-y-auto scrollbar-hide">
        <Header
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
          handleModuleChange={handleModuleChange}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-1 ">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            selectedModule={selectedModule}
          />
          <div className="flex-1 bg-gray-100 overflow-y-scroll scrollbar-hide  ">
            <Routes>
              <Route
                path="/contract360"
                element={<Contract360 />}
              />
              <Route
                path="/parking-booking-board"
                element={<ParkingBookingBoard />}
              />
              <Route
                path="/amenity-booking-board"
                element={<AmenityBookingBoard />}
              />
              <Route
                path="/bi-and-report-management/planner/shedule-board"
                element={<BiReportManagementSheduleBoard />}
              />
              <Route
                path="/bi-and-report-management/planner/resource-board"
                element={<BiReportManagementResourseBoard />}
              />
              <Route
                path="/announcement-board"
                element={<AnnouncementBoard />}
              />
              <Route
                path="/property-board/:property"
                element={<PropertyDetails />}
              />
              <Route path="/activity-board" element={<ActivityBoard />} />
              <Route path="/property-board" element={<PropertyBoard />} />
              <Route path="/workspace-manager" element={<WorkSpaceManager />} />
              <Route path="/sales-manager" element={<SalesManager />} />
              <Route path="/security-manager" element={<SecurityManager />} />
              <Route path="/utility-manager" element={<UtilityManager />} />
              <Route path="/contract-manager" element={<ContractManager />} />
              <Route
                path="/inspaction-manager"
                element={<InspectionManager />}
              />
              <Route path="/finance-manager" element={<FinanceManager />} />
              <Route
                path="/community-manager"
                element={<CommunityDashboard />}
              />
              <Route path="/client-manager" element={<ClientDashboard />} />
              <Route path="/facility-manager" element={<FacilityManager />} />
              <Route path="/resource-manager" element={<ResourceManager />} />
              <Route path="/property-manager" element={<PropertyManager />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/general-ledger" element={<GeneralLedger />} />
              <Route path="/banking" element={<BankingSection />} />
              <Route path="/bills" element={<BillsSection />} />
              <Route
                path="/recurring-transactions"
                element={<RecurringTransactions />}
              />
              <Route path="/eft-approvals" element={<EftApprovals />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/chart-accounts" element={<ChartAccounts />} />
              <Route
                path="/company-financials"
                element={<CompanyFinancials />}
              />
              <Route
                path="/maintenance-requests"
                element={<MaintenanceRequests />}
              />
              <Route
                path="/create-maintenance-request"
                element={<CreateMaintenanceRequest />}
              />
              <Route path="/resource-board" element={<ResourceBoard />} />
              <Route path="/schedule-board" element={<ScheduleBoard />} />
              <Route path="/leave-time-off" element={<LeaveTimeOffBoard />} />
              <Route path="/duty-roster" element={<DutyRoasterBoard />} />
              <Route
                path="/maintancerequestview"
                element={<MaintanceRequestView />}
              />
              <Route path="/properties" element={<PropertiesSection />} />
              <Route
                path="/generalinspectionview"
                element={<GeneralInspectionView />}
              />
              <Route path="/general-requests" element={<GeneralRequests />} />
              <Route
                path="/generalrequestview"
                element={<GeneralRequestView />}
              />
              <Route
                path="/create-general-request"
                element={<CreateGeneralRequest />}
              />
              <Route path="/item-master" element={<InspectionMaster />} />
              <Route path="/item-template" element={<InspectionItems />} />
              <Route
                path="/inspection-items-details"
                element={<InspectionItemDetails />}
              />
              <Route
                path="/unit-item-mapping"
                element={<InspectionMapping />}
              />
              <Route
                path="/inspection-map-details"
                element={<InspectionMapDetails />}
              />
              <Route path="/map-unit-details" element={<MapUnitDetails />} />
              <Route path="/item-category" element={<ItemCategoryMaster />} />
              <Route
                path="/item-subcategory"
                element={<ItemSubCategoryMaster />}
              />
              <Route
                path="/item-location"
                element={<UnitItemLocationMaster />}
              />
              <Route path="/manufacturer" element={<ManufacturerMaster />} />
              <Route path="/check-list" element={<CheckList />} />
              <Route path="/check-list-group" element={<CheckListGroup />} />
              <Route
                path="/check-list-group-view"
                element={<CheckListGroupView />}
              />
              <Route
                path="/check-list-group-itemview"
                element={<CheckListGroupItemView />}
              />
              <Route
                path="/amenity_booking_overview"
                element={<AmenityBookingOverview />}
              />
              <Route path="/utilities_category" element={<UtilityCategory />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/utilities_mapping" element={<UtilitiesMapping />} />
              <Route path="/accessGates" element={<AccessGates />} />
              <Route path="/parkingArea" element={<ParkingArea />} />
              <Route
                path="/parkingSlotMaster"
                element={<ParkingSlotMaster />}
              />
              <Route
                path="/parkingGroupingMaster"
                element={<ParkingGroupingMaster />}
              />
              <Route
                path="/visitor-worker-requests"
                element={<VisitorWorkerRequest />}
              />
              <Route
                path="/visitor-worker-entries"
                element={<VisitorWorkerEntries />}
              />
              <Route
                path="/registered-worker-requests"
                element={<RegisteredWorkerRequest />}
              />
              <Route
                path="/registered-worker-entries"
                element={<RegisteredWorkerEntries />}
              />
              <Route
                path="/parking-requests-report"
                element={<ParkingRequest />}
              />
              <Route
                path="/parking-entries-report"
                element={<ParkingEntries />}
              />
              <Route
                path="/vendor-entries-report"
                element={<VendorEntries />}
              />
              <Route
                path="/service-provider-entries-report"
                element={<ServiceProviderEntries />}
              />
              <Route
                path="/delivery-order-collection-report"
                element={<DeliveryOrderCollections />}
              />
              <Route path="/lead-report" element={<LeadOverviewReport />} />
              <Route
                path="/opportunity-report"
                element={<OpportunityOverviewReport />}
              />
              <Route
                path="/reservation-report"
                element={<ReservationReport />}
              />
              <Route
                path="/termination-report"
                element={<TerminationReport />}
              />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/create-accounts" element={<CreateAccounts />} />
              <Route path="/customerAccountList" element={<Customers />} />
              <Route
                path="/customerAccountCreate"
                element={<CustomerAccountCreate />}
              />
              <Route
                path="/vendorAccountlist"
                element={<VendorAccountlist />}
              />
              <Route
                path="/vendorAccountCreate"
                element={<VendorAccountCreate />}
              />
              <Route path="/ownerAccountList" element={<OwnerAccountList />} />
              <Route
                path="/ownerAccountCreate"
                element={<OwnerAccountCreate />}
              />
              <Route path="/accountDetails" element={<AccountdetailsUser />} />
              <Route path="/companies" element={<Company />} />
              <Route path="/create-company" element={<CreateCompany />} />
              <Route path="/company-details" element={<Companydetails />} />
              <Route path="/edit-company" element={<EditCompany />} />
              <Route path="/department" element={<Department />} />
              <Route path="/jobs-roles" element={<Jobs />} />
              <Route path="/profession-skills" element={<Professions />} />
              <Route path="/resource" element={<ResourceMaster />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/user-invitation" element={<UserInvitations />} />
              <Route
                path="/registered-workers"
                element={<RegisteredWorkers />}
              />
              <Route
                path="/add-register-worker"
                element={<AddRegisteredWorkers />}
              />
              <Route
                path="/register-details"
                element={<RegisteredWorkerDetails />}
              />
              <Route
                path="/edit-register-worker"
                element={<EditRegisteredWorkers />}
              />
              <Route
                path="/organization-hierarchy"
                element={<OrganizationHierarchy />}
              />
              <Route path="/tax-group" element={<TaxGroup />} />
              <Route path="/tax-item" element={<TaxItem />} />
              <Route path="/currency" element={<Currency />} />

              <Route path="/lead-import" element={<LeadImport />} />
              <Route
                path="/unit-and-seat-blocking"
                element={<UnitBlocking />}
              />
              <Route path="/reservations" element={<Reservations />} />
              <Route
                path="/reservation-details"
                element={<ReservationDetails />}
              />
              <Route path="/quotations" element={<Quotations />} />
              <Route
                path="/quotation-details"
                element={<QuotationsDetails />}
              />
              <Route
                path="/quotation-detail"
                element={<QuotationsInnerDetails />}
              />
              <Route path="/opportunities" element={<Opportunity />} />
              <Route
                path="/opportunity-details"
                element={<OpportunityDetails />}
              />
              <Route path="/leads" element={<Lead />} />
              <Route path="/leadsview" element={<LeadDView />} />
              <Route path="/editleads" element={<EditLead />} />
              <Route path="/quick-lease-agreement" element={<QuickLease />} />
              <Route
                path="/quicklease-details"
                element={<QuickLeaseDetails />}
              />
              <Route path="/property-search" element={<PropertySearch />} />
              <Route
                path="/maintenance-service-request"
                element={<MaintenanceServiceRequests />}
              />
              <Route
                path="/create-maintenance-service-request"
                element={<CreateMaintenanceServiceRequest />}
              />
              <Route
                path="/maintenance-service-request-view"
                element={<MaintanceServiceRequestView />}
              />
              <Route
                path="/edit-maintance-service-request"
                element={<EditMaintenanceServiceRequest />}
              />
              <Route path="/reservationcrm" element={<ReservationsCRM />} />
              <Route
                path="/reservation-crm-details"
                element={<ReservationsCRMDetails />}
              />
              <Route path="/quotationscrm" element={<QuotationsCRM />} />
              <Route
                path="/quotation-crmdetails"
                element={<QuotationsCRMDetails />}
              />
              <Route
                path="/quotation-crmdetail"
                element={<QuotationsInnerCRMDetails />}
              />
              <Route path="/opportunitycrm" element={<OpportunityCRM />} />
              <Route
                path="/opportunity-crmdetails"
                element={<OpportunityCRMDetails />}
              />
              <Route path="/leadscrm" element={<LeadCRM />} />
              <Route path="/leadscrmview" element={<LeadCRMView />} />
              <Route path="/editleadscrm" element={<EditLeadCRM />} />
              <Route
                path="/property-crmsearch"
                element={<PropertyCRMSearch />}
              />
              <Route path="/all-resources" element={<Resources />} />
              <Route path="/resource-bookings" element={<ResourcesBooking />} />
              <Route
                path="/resource-booking-details"
                element={<ResourceBookingDetails />}
              />
              <Route
                path="/leave-time-off-types"
                element={<LeaveAndTimeOffType />}
              />
              <Route
                path="/registered-workers-new"
                element={<RegisteredWorker />}
              />
              <Route
                path="/add-registered-workers"
                element={<AddRegisteredWorker />}
              />
              <Route
                path="/registered-workers-details"
                element={<RegisteredWorkersDetails />}
              />
              <Route
                path="/edit-registered-workers"
                element={<EditRegisteredWorkersNew />}
              />
              <Route
                path="/professions-skills"
                element={<ProfessionsSkills />}
              />
              <Route path="/resource-group" element={<ResourceGroup />} />
              <Route path="/self-checkin" element={<SelfCheckInEntries />} />
              <Route path="/all-contacts" element={<AllContacts />} />
              <Route path="/customers" element={<ContactCustomers />} />
              <Route path="/owners" element={<ContactOwners />} />
              <Route path="/broker-agents" element={<ContactBrokerAgents />} />
              <Route path="/prospects" element={<ContactProspects />} />
              <Route path="/vendor-profile" element={<ContactVendorProfile />} />
              <Route path="/service-provider" element={<ContactServiceProviderProfile />} />
              <Route path="/public-contacts" element={<ContactPublicContactsDirectory />} />
              <Route path="/onboard-move-in" element={<OnboardMoveIn />} />
              <Route path="/onboard-move-in-details" element={<DetailsOnboardMoveIn />} />
              <Route path="/onboard-move-inner-details" element={<InnerDetailsOnboardMoveIn />} />
              <Route path="/offboard-move-out" element={<OffboardMoveOut />} />
              <Route path="/offboard-move-out-details" element={<DetailsOffboardMoveOut />} />
              <Route path="/offboard-move-inner-details" element={<InnerDetailsOffboardMoveOut />} />
              <Route path="/showcase-site-visit" element={<ShowcaseSiteVisit />} />
              <Route path="/showcase-site-visit-details" element={<DetailsShowcaseSiteVisit />} />
              <Route path="/unit-handover" element={<UnitHandOver />} />
              <Route path="/unit-handover-details" element={<DetailsUnitHandOver />} />
              <Route path="/unit-handover-inner-details" element={<InnerDetailsUnitHandOver />} />
              <Route path="/unit-readiness" element={<UnitReadiness />} />
              <Route path="/unit-readiness-details" element={<DetailsUnitReadiness />} />
              <Route path="/general-inspection-jobs" element={<GeneralInspectionJobs />} />
              <Route path="/general-inspection-jobs-details" element={<DetailsGeneralInspectionJobs />} />

              <Route
                path="/"
                element={<FacilityManager isSidebarOpen={isSidebarOpen} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
