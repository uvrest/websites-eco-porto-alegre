import { Routes, Route } from "react-router";
import DashboardLayout from "../layouts/dashboard-layout/DashboardLayout";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<DashboardLayout />}>
                <Route index element={<>Dashboard Page</>} />
                <Route path="usuarios" element={<>Users Page</>} />
                <Route path='*' element={<>Not Found Page</>} />
            </Route>
        </Routes>
    );
}

export default PrivateRoutes;
