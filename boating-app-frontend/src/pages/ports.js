import { useNavigate } from "react-router-dom";
import PortsList from "../components/portslist";


function PortsPage() {

    const navigate = useNavigate()

    const goToBoats = () => {
        navigate('/boats')
    }

    return (

        <main className="w-screen h-screen bg-bone pt-20">
            <PortsList></PortsList>

            <button onClick={goToBoats}>GoToBoats</button>
        </main>

    );
}

export default PortsPage 