import React, { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { FiUser } from "react-icons/fi";
import {
  Avatar,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import { SearchIcon } from "lucide-react";
import { RiContractFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";

const CustomTabPanel = (props) => {
  const { children, value, index, data = [], ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && data.length <= 0 ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <img
            src="/images/no-data.png"
            alt="No Data"
            height={350}
            width={350}
          />
        </div>
      ) : (
        <div className="w-full overflow-x-auto sc-fkSzgi my-4">{children}</div>
      )}
    </div>
  );
};

const Contract360 = () => {
  const [selectedOption, setSelectedOption] = useState("CONTR241116-0070");
  const [currentTab, setCurrentTab] = useState(0);
  const contract360Options = [
    {
      id: "CONTR241116-0070",
      customer: "Land Lord",
      kaizen: "A-322",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
    {
      id: "CONTR241113-0069",
      customer: "Land Lord",
      kaizen: "A-320",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
    {
      id: "CONTR241917-0047",
      customer: "Land Lord",
      kaizen: "A-154",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
    {
      id: "CONTR241912-0045",
      customer: "Vendor",
      kaizen: "A-163",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
    {
      id: "CONTR241116-0070",
      customer: "Land Lord",
      kaizen: "A-322",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
    {
      id: "CONTR241425-0014",
      customer: "Vendor",
      kaizen: "A-102",
      date: {
        start: "25-02-2005",
        end: "02-05-2025",
      },
    },
  ];
  const currentContract = contract360Options.find(
    (contract) => (contract.id = selectedOption)
  );
  const contractDetails = {
    contractId: currentContract.id,
    customer: `${currentContract.customer} Contracts`,
    kaizen: currentContract.kaizen,
    contractStartAndEndDate: `${currentContract.date.start} - ${currentContract.date.end}`,
  };
  const tabs = [
    "Invoices",
    "Payments",
    "Recipts",
    "Maintanenace Requests",
    "Inspection Orders",
    "Units",
  ];
  const handleChange = (item, index) => {
    setCurrentTab(index);
  };
  const maintainanceRequestData = [
    {
      requestId: "MR023234-237",
      description: "Urgent Service",
      propertyName: "Movenpick Jeddah Al Nawras",
      unitName: "Moven Pick Secound Floor",
      category: "Garbage Collection",
      raisedOn: "15-02-2025",
      dateClosed: "15-02-2025",
      status: "Open",
    },
  ];
  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Contract 360</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <CustomSelect options={["Business Development"]} icon={<FiUser />} />
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white shadow rounded p-2 md:p-4">
          <div>
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              input={
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      {<SearchIcon />}
                    </InputAdornment>
                  }
                />
              }
              className="w-full md:max-w-md"
            >
              {contract360Options.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.id}
                  defaultValue={selectedOption}
                >
                  <div className="flex gap-2 items-center">
                    <Avatar />
                    <div>
                      <p>{option.id}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{option.customer}</span>
                        <span>•</span>
                        <span>{option.kaizen}</span>
                      </div>
                    </div>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="mt-4">
            <label className="font-semibold text-gray-600">
              Contract Deatails
            </label>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="p-4 border rounded-md flex items-center gap-2">
                <div className="h-10 w-10 bg-blue-500/15 rounded-md flex justify-center items-center">
                  <RiContractFill className="text-2xl text-blue-500" />
                </div>
                <div>
                  <p>{contractDetails.contractId}</p>
                  <p className="text-sm text-gray-600">Contract Id</p>
                </div>
              </div>
              <div className="p-4 border rounded-md flex items-center gap-2">
                <div className="h-10 w-10 bg-yellow-500/15 rounded-md flex justify-center items-center">
                  <BsBuildingsFill className="text-2xl text-yellow-500" />
                </div>
                <div>
                  <p>{contractDetails.customer}</p>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              <div className="p-4 border rounded-md flex items-center gap-2">
                <div className="h-10 w-10 bg-slate-500/15 rounded-md flex justify-center items-center">
                  <FaUserCircle className="text-2xl text-blue-500" />
                </div>
                <div>
                  <p>{contractDetails.kaizen}</p>
                  <p className="text-sm text-gray-600">Kaizen</p>
                </div>
              </div>
              <div className="p-4 border rounded-md flex items-center gap-2">
                <div className="h-10 w-10 bg-slate-500/15 rounded-md flex justify-center items-center">
                  <FaCalendarAlt className="text-2xl text-blue-500" />
                </div>
                <div>
                  <p>{contractDetails.contractStartAndEndDate}</p>
                  <p className="text-sm text-gray-600">
                    Contract Start & End Date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded p-2 md:p-4">
          <Tabs
            value={currentTab}
            onChange={handleChange}
            scrollButtons="auto"
            aria-label="contracts-tabs"
            variant="scrollable"
          >
            {tabs.map((tab, i) => (
              <Tab
                key={tab}
                value={i}
                label={tab}
                id={`tab-panel-${i}`}
                aria-controls={`tab-${i}`}
              />
            ))}
          </Tabs>
          <CustomTabPanel value={currentTab} index={0}>
            Item 1
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={1} data={[]}>
            Item 2
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={2} data={[]}>
            Item 3
          </CustomTabPanel>
          <CustomTabPanel
            value={currentTab}
            index={3}
            data={maintainanceRequestData}
          >
            <Table>
              <TableHead className="bg-gray-100">
                {maintainanceRequestData.map((item, itemKey) => {
                  return Object.keys(item).map((key, keyIndex) => {
                    return <TableCell key={keyIndex}>{key}</TableCell>;
                  });
                })}
              </TableHead>
              <TableBody>
                {maintainanceRequestData.map((item, index) => {
                  return (
                    <TableRow
                      key={item.requestId + index}
                      className="bg-blue-500/10"
                    >
                      {Object.keys(item).map((key, keyIndex) => {
                        return (
                          <TableCell key={key} className="text-nowrap">
                            {item[key]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={4} data={[]}>
            Item 4
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={5} data={[]}>
            Item 5
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
};

export default Contract360;
