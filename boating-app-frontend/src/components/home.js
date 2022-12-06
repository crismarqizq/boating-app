import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

function Home() {

    return (<>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
    );
}

export default Home