import React from "react";
import "../../assets/js/scriptsAdmin";
// import NavbarAdmin from "./NavbarAdmin/NavbarAdmin.jsx";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = () => {
  return (
    <>
      <div>
        {/* <NavbarAdmin /> */}
        <Sidebar />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>



  );
};

export default AdminPage;
