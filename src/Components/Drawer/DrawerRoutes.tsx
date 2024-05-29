import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RetailerPage from '../../Pages/Retailer/Retailer.tsx';
import RetailerForm from '../Retailer-form/Retailer-form.tsx';
import Dashboard from '../../Pages/Dashboard/Dashboard.tsx';
import { RetailersList } from '../Retailer-form/RetailersList.tsx';
import ResourcesModal from '../../Pages/Resources/ResourcesModal/ResourcesModal.tsx';


const DrawerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />;
        <Route path="/add-retailer" element={<RetailerForm />} />;
        <Route path="/retailers-list" element={<RetailersList />} />;
        <Route path="/always-on" element={<Dashboard />} />;
        <Route path="/recent-events" element={<Dashboard />} />;
        <Route path="/models" element={<ResourcesModal />} />;
        <Route path="/add-resources" element={<Dashboard />} />;
        <Route path="/recent-events" element={<Dashboard />} />;
      </Routes>
    </>
  );
};


// export const router = createBrowserRouter ( [
//   element: <NavLayout />, 
//   children: [
//   { path: "/", element: <Home /> },
//   { path: "/store", element: <Store /> },
//   { path: "/about", element: <About /> },
//   {
//   path: "/team",
//   children: [
//   { index: true, element: <Team /> },
//   { path: "joe", element: <TeamMember name="joe" /> },
//   { path: "sally", element: <TeamMember name="sally" /> },
//   },
//   ],
//   ])

//   function NavLayout () {
//     return (

//     )
//   }

export default DrawerRoutes;