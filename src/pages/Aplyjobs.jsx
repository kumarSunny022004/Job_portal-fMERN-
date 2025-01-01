import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import kConvert from "k-convert";
import moment from "moment";

const Aplyjobs = () => {
  const { id } = useParams();

  const [JobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };
  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return JobData ? (
    <>
      <Navbar />
      <div className="container min-h-screen flex flex-col py-10  px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-ful ">
          <div className="flex justify-center gap-8 md:justify-between flex-wrap px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 m-4 max-md:mb-4 border"
                src={assets.company_icon}
                alt=""
              />
              <div className="text-neutral-700 text-center md:text-left">
                <h1 className="text-2xl font-medium sm:text-4xl">
                  {JobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {JobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC:{kConvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end ">
              <button className="bg-blue-600 p-2.5 px-10 border  text-white rounded">
                Apply Now
              </button>
              <p>Posted {moment(JobData.data).fromNow()}</p>
            </div>
          </div>
          <div className=" flex flex-col justify-between lg:flex-row items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: JobData.description }}
              ></div>
              <button className="bg-blue-600 p-2.5 px-10 border  text-white rounded mt-10">
                Apply Now
              </button>
            </div>
            <div>
              {/* right section more jobs */}
              <h2>More jobs fro {JobData.companyId.name}</h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== JobData._id &&
                    job.companyId._id === JobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Aplyjobs;
