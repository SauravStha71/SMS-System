import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from './signIn/LoginRegister';
import SMS_Report from './Container/SMS_Report';
import Dashboard from './Container/Dashboard';
import PreviewData from './Container/PreviewData';
import YesterdayTable from './Container/YesterdayTable';
import ManageUser from './Container/ManageUser';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginRegister />} />

        {/* Admin Pages - with Header + Page */}
        <Route path="/dashboard" element={ <Dashboard/>}/>
        <Route path="/preview-data" element={ <PreviewData/>}/>
        <Route path="/YesterdayDate" element={ <YesterdayTable/>}/>
        <Route path="/sms-report" element={<SMS_Report/>} />
        <Route path="/manage-users" element={<ManageUser/> }/>
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
};

export default App;
