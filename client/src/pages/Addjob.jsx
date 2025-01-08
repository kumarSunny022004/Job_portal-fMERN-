import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const Addjob = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Programming");
  const [location, setLocation] = useState("Bangalore");
  const [level, setLevel] = useState("Beginner level");
  const [salary, setSalary] = useState(0);
  const editorRef = useRef(null);
  const quilRef = useRef(null);

  useEffect(() => {
    // Initiate Quill only once
    if (editorRef.current && !quilRef.current) {
      quilRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div>
      <form
        className="container p-4 flex flex-col items-start gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full">
          <p>Job title</p>
          <input
            type="text"
            placeholder="Type Here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        <div className="w-full max-w-lg">
          <p className="my-2">Job Description</p>
          <div ref={editorRef}></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full  sm:gap-8">
          <div>
            <p className="mb-2">Job Category</p>
            <select
              className="w-full px-2 py-2 border border-gray-300 rounded"
              onChange={(e) => setCategory(e.target.value)}
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2">Job Location</p>
            <select
              className="w-full px-2 py-2 border border-gray-300 rounded"
              onChange={(e) => setLocation(e.target.value)}
            >
              {JobLocations.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p>Job level</p>
            <select
              className="w-full px-2 py-2 border border-gray-300 rounded"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner Level">Beginner Level</option>
              <option value="Intermidiate Level">Intermidiate Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Salary</p>
            <input
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg"
              type="text"
              onChange={(e) => setSalary(e.target.value)}
              placeholder="2500"
              min={0}
            />
            <button className="w-28 mt-4 py-3  bg-black text-white rounded">ADD</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
