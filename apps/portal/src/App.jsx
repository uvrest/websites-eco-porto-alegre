import AppProviders from "./app/contexts/AppProviders";
import { Outlet } from "react-router";

// The root layout of the entire application.
// All authenticated and public routes will be injected here via <Outlet />.
// To understand more, open the file: src/routes/AuthRouter.jsx
const App = () => {
    return (
        <AppProviders>
            <Outlet />
        </AppProviders>
    );
};

export default App;