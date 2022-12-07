import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


function Dashboard() {

    return (<>
        <Navbar></Navbar>
        <Outlet />
    </>
    );
}

export default Dashboard 