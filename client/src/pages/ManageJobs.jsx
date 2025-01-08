import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
const navigate =  useNavigate();

  return (
    <div className="contsiner max-w-5xl p-4">
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
            <th className="py-2 px-4 border-b text-left ">Job title</th>
            <th className="py-2 px-4 border-b text-left max-sm:hidden">Date</th>
            <th className="py-2 px-4 border-b text-left max-sm:hidden">Locations</th>
            <th className="py-2 px-4 border-b text-center ">Applicants</th>
            <th className="py-2 px-4 border-b text-left ">Visible</th>
          </tr>
        </thead>
        <tbody>
          {manageJobsData.map((job, index) => (
            <tr key={index} className="text-gray-700">
              <td className="yp-2 px-4 border-b max-sm:hidden">{index + 1}</td>
              <td className="yp-2 px-4 border-b">{job.title}</td>
              <td className="yp-2 px-4 border-b max-sm:hidden">{moment(job.date).format("ll")}</td>
              <td className="yp-2 px-4 border-b max-sm:hidden">{job.location}</td>
              <td className="yp-2 px-4 border-b text-center">{job.applicants}</td>
              <td className="yp-2 px-4 border-b">
                < input type="checkbox" className="scale-125 ml-4"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="mt flex justify-end mt-2"><button className="bg-black text-white py-2 px-4 rounded" onClick={()=>navigate('/dashboard/add-job')}>Add New job</button></div>
    </div>
  );
};

export default ManageJobs;
