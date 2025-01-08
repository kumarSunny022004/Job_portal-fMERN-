import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">User Name</th>
              <th className="py-2 px-4 text-left max-sm:hidden ">Job title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Resume</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={applicant.id || index} className="text-gray-700">
                <td className="py-2 px-4 text-center border-b">{index + 1}</td>
                <td className="py-2 px-4 text-center border-b flex">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="py-2 px-4 max-sm:hidden  border-b">{applicant.jobTitle}</td>
                <td className="py-2 px-4 max-sm:hidden border-b">{applicant.location}</td>
                <td className="py-2 px-4  border-b">
                  <a href={applicant.resumeLink} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-400 px-3 py-1 rounded-full inline-flex gap-2 items-center">
                    Resume <img src={assets.resume_download_icon} alt="Download" />
                  </a>
                </td>
                <td className="px-4 py-2 border-b relative">
                  <div className="relative text-left inline-block group">
                    <button className="text-gray-500 action-button">...</button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gary-100 ">Accept</button>
                      <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gary-100 ">Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
