import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import kConvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard"; // Ensure this is correctly imported
import Footer from "../components/Footer"

const ApplyJobs = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null); // Use camelCase for consistency
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs.length > 0) {
      const job = jobs.find((job) => job._id === id);
      if (job) {
        setJobData(job);
      } else {
        console.warn("Job not found with the given ID:", id); // Debugging message
      }
    }
  }, [id, jobs]);

  if (!jobData) {
    return <Loading />; // Show loading or fallback if jobData is not available
  }

  return (
    <>
      <Navbar />
      <div className="container min-h-screen flex flex-col py-10 px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center gap-8 md:justify-between flex-wrap px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 m-4 max-md:mb-4 border"
                src={assets.company_icon}
                alt="Company Logo"
              />
              <div className="text-neutral-700 text-center md:text-left">
                <h1 className="text-2xl font-medium sm:text-4xl">{jobData.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="Role" />
                    {jobData.companyId?.name || "Unknown Company"}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="Location" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="Level" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="Salary" />
                    CTC: {kConvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end">
              <button className="bg-blue-600 p-2.5 px-10 border text-white rounded">
                Apply Now
              </button>
              <p>Posted {moment(jobData.date).fromNow()}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:flex-row items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="bg-blue-600 p-2.5 px-10 border text-white rounded mt-10">
                Apply Now
              </button>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h2 className="font-bold text-xl mb-4">
                More jobs from {jobData.companyId?.name || "this company"}
              </h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== jobData._id &&
                    job.companyId?._id === jobData.companyId?._id
                )
                .slice(0, 4)
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ApplyJobs;
