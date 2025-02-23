import React,{useState} from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import AccountDetails from "./AccountDetails";
import Kyc from "./Kyc";

const CustomerAccountCreate = () => {

  const [nextform, setNextform] = useState(false);

  const handleNextform = (item)=>{
    setNextform(item)
  }


  return (
    <div>

      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Create New Account</div>

            <div className="flex flex-wrap items-center gap-4">

                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="businessDev">Business Development</option>
                    </select>
                </div>

            </div>
      </div>
        {
          !nextform && <AccountDetails />
        }
        {
          nextform && <Kyc />
        }
    <div className="bg-white shadow-md rounded-md p-4 m-3 text-center">
      <Link onClick={()=> handleNextform(true)} className=" bg-blue-500 text-sm text-white py-2 px-6 block w-full rounded-lg">{!nextform? 'Next': 'Create'}</Link>
      {
        nextform && <Link onClick={()=> handleNextform(false)} className=" bg-white border border-light-200 text-sm text-black py-2 px-6 block w-full rounded-lg mt-5">Back To Profile Details</Link>
      }
    </div>
    </div>
  );
};

export default CustomerAccountCreate;
