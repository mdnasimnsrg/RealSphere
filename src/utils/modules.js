import { FaChartBar, FaFilter } from "react-icons/fa";
import { FcBarChart, FcManager, FcOrganization } from "react-icons/fc";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiBriefcase,
  FiTool,
  FiSettings,
  FiHelpCircle,
  FiBox,
  FiLayers,
  FiClipboard,
  FiFileText,
  FiDatabase,
  FiZap,
  FiTruck,
  FiGrid,
  FiUser,
} from "react-icons/fi";

const modules = [
  {
    name: "Inspection Management",
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/facility-manager", name: "Facility Manager" },
          { href: "/resource-manager", name: "Resource Manager" },
          { href: "/property-manager", name: "Property Manager" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/resource-board", name: "Resource Board" },
          { href: "/schedule-board", name: "Schedule Board" },
          {
            href: "/leave-time-off",
            name: "Leave & Time Off Board",
          },
          { href: "/duty-roster", name: "Duty Roster Board" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
        subLinks: [
          { href: "/all-contacts", name: "All Contacts" },
          { href: "/customers", name: "Customers" },
          { href: "/owners", name: "Owners" },
          { href: "/broker-agents", name: "Broker and Agents" },
          { href: "/prospects", name: "Prospects" },
          { href: "/vendor-profile", name: "Vendor Profile" },
          {
            href: "/service-provider",
            name: "Service Provider Profile",
          },
          {
            href: "/public-contacts",
            name: "Public Contacts Directory",
          },
        ],
      },
      {
        name: "Properties",
        icon: <FiBriefcase />,
        href: "/properties",
      },
      {
        name: "Work Order Management",
        icon: <FiTool />,
        subLinks: [
          { href: "/onboard-move-in", name: "Onboard and Move-in" },
          {
            href: "/offboard-move-out",
            name: "Offboard and Move-out",
          },
          {
            href: "/showcase-site-visit",
            name: "Showcase And Site Visit",
          },
          { href: "/unit-handover", name: "Unit Handover" },
          { href: "/unit-readiness", name: "Unit Readiness" },
          {
            href: "/general-inspection-jobs",
            name: "General Inspection Jobs",
          },
        ],
      },
      {
        href: "/maintenance-requests",
        name: "Maintenance Requests",
        icon: <FiSettings />,
      },
      {
        href: "/general-requests",
        name: "General Requests",
        icon: <FiHelpCircle />,
      },
      {
        name: "Inventory Management",
        icon: <FiBox />,
        subLinks: [
          { href: "/item-master", name: "Item Master" },
          { href: "/item-template", name: "Item Template" },
          { href: "/unit-item-mapping", name: "Unit Item Mapping" },
          { href: "/item-category", name: "Item Category" },
          { href: "/item-subcategory", name: "Item Subcategory" },
          { href: "/item-location", name: "Item Location" },
          { href: "/manufacturer", name: "Manufacturer" },
          { href: "/check-list", name: "Check List" },
          { href: "/check-list-group", name: "Check List Group" },
        ],
      },
      {
        name: "Resource Management",
        icon: <FiLayers />,
        subLinks: [
          { href: "/all-resources", name: "Resources" },
          { href: "/resource-bookings", name: "Resources Bookings" },
          {
            href: "/leave-time-off-types",
            name: "Leave And Time Off Type",
          },
          { href: "/self-checkin", name: "Self Check-in Entries" },
          {
            href: "/registered-workers-new",
            name: "Registered Workers",
          },
          {
            href: "/professions-skills",
            name: "Profession and Skills",
          },
          { href: "/resource-group", name: "Resource Group" },
        ],
      },
    ],
    icon: <FcOrganization />,
  },
  {
    name: "Maintenance Management",
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/mm-facility-manager", name: "Facility Manager" },
          { href: "/mm-resource-manager", name: "Resource Manager" },
          { href: "/mm-property-manager", name: "Property Manager" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/mm-resource-board", name: "Resource Board" },
          { href: "/mm-schedule-board", name: "Schedule Board" },
          {
            href: "/mm-leave-time-off",
            name: "Leave & Time Off Board",
          },
          { href: "/mm-duty-roster", name: "Duty Roster Board" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
        subLinks: [
          { href: "/all-contacts", name: "All Contacts" },
          { href: "/customers", name: "Customers" },
          { href: "/owners", name: "Owners" },
          { href: "/broker-agents", name: "Broker and Agents" },
          { href: "/prospects", name: "Prospects" },
          { href: "/vendor-profile", name: "Vendor Profile" },
          {
            href: "/service-provider",
            name: "Service Provider Profile",
          },
          {
            href: "/public-contacts",
            name: "Public Contacts Directory",
          },
        ],
      },
      {
        name: "Properties",
        icon: <FiBriefcase />,
        href: "/properties",
      },
      {
        name: "Work Order Management",
        icon: <FiTool />,
        subLinks: [
          { href: "/work-orders", name: "Work Order Management" },
          { href: "/onboard-move-in", name: "Onboard and Move-in" },
          {
            href: "/offboard-move-out",
            name: "Offboard and Move-out",
          },
          {
            href: "/showcase-site-visit",
            name: "Showcase And Site Visit",
          },
          { href: "/unit-handover", name: "Unit Handover" },
          { href: "/unit-readiness", name: "Unit Readiness" },
          {
            href: "/general-",
            name: "General  Jobs",
          },
        ],
      },
      {
        href: "/-requests",
        name: "Maintenance Requests",
        icon: <FiSettings />,
        subLinks: [],
      },
      {
        href: "/general-requests",
        name: "General Requests",
        icon: <FiHelpCircle />,
        subLinks: [],
      },

      {
        name: "Inventory Management",
        icon: <FiBox />,
        subLinks: [
          { href: "/inventory", name: "Inventory Management" },
          { href: "/item-master", name: "Item Master" },
          { href: "/item-template", name: "Item Template" },
          { href: "/unit-item-mapping", name: "Unit Item Mapping" },
          { href: "/item-category", name: "Item Category" },
          { href: "/item-subcategory", name: "Item Subcategory" },
          { href: "/item-location", name: "Item Location" },
          { href: "/manufacturer", name: "Manufacturer" },
          { href: "/check-list", name: "Check List" },
          { href: "/check-list-group", name: "Check List Group" },
        ],
      },
      {
        name: "Resource Management",
        icon: <FiLayers />,
        subLinks: [
          {
            href: "/resource-management",
            name: "Resource Management",
          },
          { href: "/resources", name: "Resources" },
          {
            href: "/resource-bookings",
            name: "Resources Bookings",
          },
          {
            href: "/leave-time-off-types",
            name: "Leave And Time Off Type",
          },
          { href: "/self-checkin", name: "Self Check-in Entries" },
          {
            href: "/registered-workers",
            name: "Registered Workers",
          },
          {
            href: "/profession-skills",
            name: "Profession and Skills",
          },
          { href: "/resource-groups", name: "Resource Group" },
        ],
      },
    ],
    icon: <FcManager />,
  },
  {
    name: "BI & Report Management",
    href: "/client-manager",
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/client-manager", name: "Client Manager" },
          { href: "/property-manager", name: "Property Manager" },
          { href: "/community-manager", name: "Community Manager" },
          { href: "/finance-manager", name: "Finance Manager" },
          { href: "/inspaction-manager", name: "Inspaction Manager" },
          { href: "/facility-manager", name: "Facility Manager" },
          { href: "/resource-manager", name: "Resource Manager" },
          { href: "/contract-manager", name: "Contract Manager" },
          { href: "/amenity-manager", name: "Amenity Manager" },
          { href: "/security-manager", name: "Security Manager" },
          { href: "/utility-manager", name: "Utility Manager" },
          { href: "/workspace-manager", name: "Workspace Manager" },
          { href: "/sales-manager", name: "Sales Manager" },
          { href: "/sales-member", name: "Sales Member" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/property-board", name: "Property Board" },
          { href: "/activity-board", name: "Activity Board" },
          { href: "/announcement-board", name: "Announcement Board" },
          { href: "/bi-and-report-management/planner/resource-board", name: "Resource Board" },
          { href: "/bi-and-report-management/planner/shedule-board", name: "Schedule Board" },
          { href: "/leave-time-off", name: "Leave & Time Off Board" },
          { href: "/duty-roster", name: "Duty Roster Board" },
          { href: "/amenity-booking-board", name: "Amenity Booking Board" },
          { href: "/parking-booking-board", name: "Parking Booking Board" },
        ],
      },
      {
        name: "Business 360",
        icon: <FiClipboard />,
        subLinks: [
          { href: "#", name: "Business 360" },
          { href: "#", name: "Customer 360" },
          { href: "#", name: "Vendor 360" },
          { href: "#", name: "Agreement 360" },
          { href: "/contract360", name: "Contract 360" },
          { href: "#", name: "Property 360" },
          { href: "#", name: "Unit 360" },
          { href: "#", name: "Item 360" },
          { href: "#", name: "Project 360" },
        ],
      },
      {
        name: "Organization",
        icon: <FiDatabase />,
        subLinks: [
          { href: "#", name: "Accounts Overview Report" },
          { href: "#", name: "Contacts Overview Report" },
          { href: "#", name: "Account Linked Contacts" },
          { href: "#", name: "Employee Overview Report" },
          { href: "#", name: "Resources Overview Report" },
          { href: "/login-activity-report", name: "Login Activity Report" },
        ],
      },
      {
        name: "Property Administration",
        icon: <FiFileText />,
        subLinks: [
          {
            href: "#",
            name: "Property Administration",
          },
          { href: "/property-overview-report", name: "Property Overview Report" },
          { href: "/unit-details-report", name: "Unit Overview Report" },
          { href: "/unit-occupancy-report", name: "Unit Occupancy Report" },
          { href: "/unit-pricing-report", name: "Unit Pricing Report" },
        ],
      },
      {
        name: "Sales Management",
        icon: <FaChartBar />,
        subLinks: [
          { name: "Sales Management", href: "/leadOverviewReport" },
          { name: "Lead Overview Report", href: "/leadOverviewReport" },
          { name: "Opportunity Overview Report", href: "/leadOverviewReport" },
          { name: "Quotation Overview Report", href: "/leadOverviewReport" },
          { name: "Reservation Overview Report", href: "/leadOverviewReport" },
          { name: "Termination Overview Report", href: "/leadOverviewReport" },
          { name: "Lead Analysis Report", href: "/leadOverviewReport" },
          { name: "Lead Campaign Report", href: "/leadOverviewReport" },
        ],
      },
    ],
    icon: <FcBarChart />,
  },

  {
    name: "Real Estate CRM",
    icon: <FiBriefcase />,
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/property-manager", name: "Property Manager" },
          { href: "/contract-manager", name: "Contract Manager" },
          { href: "/account-receivable", name: "Account Receivable" },
          { href: "/sales-manager", name: "Sales Manager" },
          { href: "/security-manager", name: "Security Manager" },
          { href: "/amenity-manager", name: "Amenity Manager" },
          { href: "/facility-manager", name: "Facility Manager" },
          { href: "/-manager", name: " Manager" },
          { href: "/utility-manager", name: "Utility Manager" },
        ],
      },
      {
        name: "Organization",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/department", name: "Department" },
          { href: "/jobs-roles", name: "Jobs And Roles" },
          { href: "/profession-skills", name: "Profession and Skills" },
          { href: "/resource", name: "Resource" },
          { href: "/resource-group", name: "Resource Group" },
          { href: "/teams", name: "Teams" },
          { href: "/work-calendar", name: "Work Calendar" },
          { href: "/invitations", name: "Invitations" },
          { href: "/registered-workers", name: "Registered Workers" },
          { href: "/org-hierarchy", name: "Organization Hierarchy" },
          { href: "/tax-group", name: "Tax Group" },
          { href: "/tax-items", name: "TAX Items" },
        ],
      },
      {
        name: "Planner",
        icon: <FiGrid />,
        subLinks: [
          { href: "/property-board", name: "Property Board" },
          { href: "/activity-board", name: "Activity Board" },
          { href: "/announcement-board", name: "Announcement Board" },
          { href: "/amenity-booking", name: "Amenity Booking Board" },
          { href: "/resource-board", name: "Resource Board" },
          { href: "/schedule-board", name: "Schedule Board" },
          { href: "/leave-time-off", name: "Leave & Time Off Board" },
          { href: "/duty-roster", name: "Duty Roster Board" },
        ],
      },
      {
        name: "Accounts",
        icon: <FiUser />,
        subLinks: [
          { href: "/all-accounts", name: "All Accounts" },
          { href: "/customers", name: "Customers" },
          { href: "/vendors", name: "Vendors" },
          { href: "/property-owners", name: "Property Owners" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
        subLinks: [
          { href: "/all-contacts", name: "All Contacts" },
          { href: "/customers", name: "Customers" },
          { href: "/owners", name: "Owners" },
          { href: "/broker-agents", name: "Broker and Agents" },
          { href: "/prospects", name: "Prospects" },
          { href: "/vendor-profile", name: "Vendor Profile" },
          { href: "/service-provider", name: "Service Provider Profile" },
        ],
      },
      {
        name: "Property Administration",
        icon: <FiBriefcase />,
        subLinks: [
          {
            href: "/property-administration",
            name: "Property Administration",
          },
          { href: "/properties", name: "Properties" },
          { href: "/functional-location", name: "Functional Location" },
          { href: "/property-type", name: "Property Type" },
          { href: "/block-type", name: "Block Type" },
          { href: "/unit-type", name: "Unit Type" },
          { href: "/pricing-component", name: "Pricing Component" },
          { href: "/pricing-table", name: "Pricing Table" },
          { href: "/milestones", name: "Milestones" },
          { href: "/off-plan-templates", name: "Off-Plan Templates" },
          {
            href: "/unit-occupancy-history",
            name: "Unit Occupancy History",
          },
          { href: "/listings-mapping", name: "Listings Mapping" },
          { href: "/marketing-portal", name: "Marketing Portal" },
        ],
      },
      {
        name: "CRM",
        icon: <FiTool />,
        subLinks: [
          { href: "/property-search", name: "Property Search" },
          { href: "/quick-lease-agreement", name: "Quick Lease Agreement" },
          { href: "/leads", name: "Leads" },
          { href: "/opportunities", name: "Opportunities" },
          { href: "/quotations", name: "Quotations" },
          { href: "/reservations", name: "Reservations" },
          { href: "/unit-seat-blocking", name: "Unit and Seat Blocking" },
          { href: "/lead-import", name: "Lead Import" },
        ],
      },
      {
        name: "Contract Management",
        icon: <FiSettings />,
        subLinks: [
          { href: "/contract-management", name: "Contract Management" },
          { href: "/landlord-contract", name: "Landlord Contract" },
          { href: "/agreements", name: "Agreements" },
          { href: "/member-guests", name: "Member & Guests" },
        ],
      },

      {
        name: "Project Management",
        icon: <FiBox />,
        subLinks: [
          { href: "/project-management", name: "Project Management" },
          { href: "/all-projects", name: "All Projects" },
          { href: "/project-category", name: "Project Category" },
        ],
      },
    ],
  },
  {
    name: "Broker Management CRM",
    icon: <FiUsers />,
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/broker/property-manager", name: "Property Manager" },
          { href: "/broker/account-receivable", name: "Account Receivable" },
        ],
      },
      {
        name: "Organization",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/broker/department", name: "Department" },
          { href: "/broker/jobs-roles", name: "Jobs And Roles" },
          { href: "/broker/profession-skills", name: "Profession and Skills" },
          { href: "/broker/resource", name: "Resource" },
          { href: "/broker/resource-group", name: "Resource Group" },
          { href: "/broker/teams", name: "Teams" },
          { href: "/broker/work-calendar", name: "Work Calendar" },
          { href: "/broker/invitations", name: "Invitations" },
          { href: "/broker/registered-workers", name: "Registered Workers" },
          {
            href: "/broker-hierarchy",
            name: "Organization Hierarchy",
          },
          { href: "/broker/tax-group", name: "Tax Group" },
          { href: "/broker/tax-items", name: "TAX Items" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/resource-board", name: "Resource Board" },
          { href: "/schedule-board", name: "Schedule Board" },
          {
            href: "/leave-time-off",
            name: "Leave & Time Off Board",
          },
          { href: "/duty-roster", name: "Duty Roster Board" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
        subLinks: [
          { href: "/all-contacts", name: "All Contacts" },
          { href: "/customers", name: "Customers" },
          { href: "/owners", name: "Owners" },
          { href: "/broker-agents", name: "Broker and Agents" },
          { href: "/prospects", name: "Prospects" },
          { href: "/vendor-profile", name: "Vendor Profile" },
          {
            href: "/service-provider",
            name: "Service Provider Profile",
          },
          {
            href: "/public-contacts",
            name: "Public Contacts Directory",
          },
        ],
      },
      {
        name: "Property Administration",
        icon: <FiBriefcase />,
        subLinks: [
          {
            href: "/broker/property-administration",
            name: "Property Administration",
          },
          { href: "/broker/properties", name: "Properties" },
          { href: "/broker/functional-location", name: "Functional Location" },
          { href: "/broker/property-type", name: "Property Type" },
          { href: "/broker/block-type", name: "Block Type" },
          { href: "/broker/unit-type", name: "Unit Type" },
          { href: "/broker/pricing-component", name: "Pricing Component" },
          { href: "/broker/pricing-table", name: "Pricing Table" },
          { href: "/broker/milestones", name: "Milestones" },
          { href: "/broker/off-plan-templates", name: "Off-Plan Templates" },
          {
            href: "/broker/unit-occupancy-history",
            name: "Unit Occupancy History",
          },
          { href: "/broker/listings-mapping", name: "Listings Mapping" },
          { href: "/broker/marketing-portal", name: "Marketing Portal" },
        ],
      },
      {
        name: "CRM",
        icon: <FiTool />,
        subLinks: [
          { href: "/broker/property-search", name: "Property Search" },
          { href: "/broker/leads", name: "Leads" },
          { href: "/broker/opportunities", name: "Opportunities" },
          { href: "/broker/quotations", name: "Quotations" },
          { href: "/broker/reservations", name: "Reservations" },
        ],
      },

      {
        name: " Management",
        icon: <FiBox />,
        subLinks: [
          {
            href: "/broker/-management",
            name: " Management",
          },
          { href: "/broker/onboard-move-in", name: "Onboard and Move-In" },
          { href: "/broker/offboard-move-out", name: "Offboard and Move-out" },
          {
            href: "/broker/site-visit-showcase",
            name: "Site Visit and Showcase",
          },
        ],
      },
      { name: "Approvals", icon: <FiClipboard /> },
      {
        name: "Know Your Customer",
        icon: <FiLayers />,
        subLinks: [
          { href: "/broker/know-your-customer", name: "Know Your Customer" },
          { href: "/broker/documents", name: "Documents" },
          { href: "/broker/screening-requests", name: "Screening Requests" },
        ],
      },
    ],
  },
  {
    name: "Organization Administration",
    icon: <FiSettings />,
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { href: "/facility-manager", name: "Facility Manager" },
          { href: "/resource-manager", name: "Resource Manager" },
          { href: "/property-manager", name: "Property Manager" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { href: "/resource-board", name: "Resource Board" },
          { href: "/schedule-board", name: "Schedule Board" },
          {
            href: "/leave-time-off",
            name: "Leave & Time Off Board",
          },
          { href: "/duty-roster", name: "Duty Roster Board" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
        subLinks: [
          { href: "/all-contacts", name: "All Contacts" },
          { href: "/customers", name: "Customers" },
          { href: "/owners", name: "Owners" },
          { href: "/broker-agents", name: "Broker and Agents" },
          { href: "/prospects", name: "Prospects" },
          { href: "/vendor-profile", name: "Vendor Profile" },
          {
            href: "/service-provider-profile",
            name: "Service Provider Profile",
          },
          {
            href: "/public-contacts-directory",
            name: "Public Contacts Directory",
          },
        ],
      },
      { name: "Properties", icon: <FiBriefcase /> },
      {
        name: "Price Book",
        icon: <FaFilter />,
        subLinks: [
          { href: "/price-book", name: "Price Book" },
          {
            href: "/pricing-component",
            name: "Pricing Component",
          },
          { href: "/pricing-table", name: "Pricing Table" },
          {
            href: "/unit-occupancy-history",
            name: "Unit Occupancy History",
          },
          { href: "/price-appraisals", name: "Price Appraisals" },
          { href: "/listings-mapping", name: "Listings Mapping" },
          { href: "/marketing-portal", name: "Marketing Portal" },
          { href: "/milestones", name: "Milestones" },
          {
            href: "/off-plan-templates",
            name: "Off-Plan Templates",
          },
        ],
      },
      {
        name: "Amenity Management",
        icon: <FiBriefcase />,
        subLinks: [
          {
            href: "/amenity-management",
            name: "Amenity Management",
          },
          { href: "/amenity-category", name: "Amenity Category" },
          { href: "/amenity-master", name: "Amenity Master" },
          { href: "/amenity-mapping", name: "Amenity Mapping" },
        ],
      },
      {
        name: "Utility Management",
        icon: <FiZap />,
        subLinks: [
          {
            href: "/utility-management",
            name: "Utility Management",
          },
          { href: "/utility-category", name: "Utility Category" },
          { href: "/utility-master", name: "Utility Master" },
          { href: "/utility-mapping", name: "Utility Mapping" },
        ],
      },
      {
        name: "Parking Management",
        icon: <FiTruck />,
        subLinks: [
          {
            href: "/parking-management",
            name: "Parking Management",
          },
          { href: "/access-gates", name: "Access Gates" },
          { href: "/parking-area", name: "Parking Area" },
          { href: "/parking-slots", name: "Parking Slots" },
          { href: "/parking-group", name: "Parking Group" },
        ],
      },
      {
        name: "Inventory Management",
        icon: <FiBox />,
        subLinks: [
          {
            href: "/inventory-management",
            name: "Inventory Management",
          },
          { href: "/item-master", name: "Item Master" },
          { href: "/item-template", name: "Item Template" },
          {
            href: "/unit-item-mapping",
            name: "Unit Item Mapping",
          },
          { href: "/item-category", name: "Item Category" },
          { href: "/item-subcategory", name: "Item Subcategory" },
          { href: "/item-location", name: "Item Location" },
          { href: "/manufacturer", name: "Manufacturer" },
          { href: "/check-list", name: "Check List" },
          { href: "/check-list-group", name: "Check List Group" },
        ],
      },
      {
        name: "Groups and Types",
        subLinks: [
          { href: "/groups-types", name: "Groups and Types" },
          {
            href: "/functional-location",
            name: "Functional Location",
          },
          { href: "/property-type", name: "Property Type" },
          {
            href: "/block-level1-type",
            name: "Block/Level 1 Type",
          },
          { href: "/unit-type", name: "Unit Type" },
          {
            href: "/kyc-document-type",
            name: "KYC Document Type",
          },
          {
            href: "/leave-time-off-type",
            name: "Leave And Time Off Type",
          },
          { href: "/customer-group", name: "Customer Group" },
          { href: "/vendor-group", name: "Vendor Group" },
          { href: "/resource-group", name: "Resource Group" },
          { href: "/expense-group", name: "Expense Group" },
        ],
        icon: <FaFilter />,
      },
      { name: "Categories", icon: <FiGrid /> },
      { name: "Marketing Banners", icon: <FiGrid /> },
    ],
    href: "/utilities_category",
  },
  {
    name: "Maintenance & Service",
    icon: <FiTool />,
    links: [
      {
        name: "Dashboard",
        icon: <FiHome />,
        subLinks: [
          { name: "Facility Manager", href: "/" },
          { name: "Resource Manager", href: "/" },
          { name: "Property Manager", href: "/" },
        ],
      },
      {
        name: "Planner",
        icon: <FiCalendar />,
        subLinks: [
          { name: "Resource Board", href: "/" },
          { name: "Schedule Board", href: "/" },
          { name: "Leave & Time Off Board", href: "/" },
          { name: "Duty Roster Board", href: "/" },
        ],
      },
      {
        name: "Contacts",
        icon: <FiUsers />,
      },
      { name: "Properties", icon: <FiBriefcase /> },
      {
        name: "Work Order Management",
        icon: <FiTool />,
      },
      { name: "Maintenance Requests", icon: <FiSettings /> },
      { name: "General Requests", icon: <FiHelpCircle /> },
      {
        name: "Inventory Management",
      },
      {
        name: "Resource Management",
        icon: <FiLayers />,
      },
    ],
  },
];

export default modules;
