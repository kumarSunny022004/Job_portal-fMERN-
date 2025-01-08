import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aplyjobs from "./pages/Aplyjobs";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Addjob from "./pages/Addjob";
import ViewApplications from "./pages/ViewApplications";
import ManageJobs from "./pages/ManageJobs";
import 'quill/dist/quill.snow.css'

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  console.log("App Component - showRecruiterLogin:", showRecruiterLogin); // Debugging

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Aplyjobs />} />
        <Route path="/applications" element={<Applications />} />
        {/* in dashboard we will have nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<Addjob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
