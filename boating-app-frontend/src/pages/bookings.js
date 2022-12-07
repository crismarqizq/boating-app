import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";

function Bookings() {

    // As long as we don't use a global store, we need to fetch ports and boats again
    const [ports, setPorts] = useState([])
    const [boats, setBoats] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            const fetchedPorts = await getPorts()
            // const fetchedBoats = await getBoats()
            setPorts(fetchedPorts)
            //setBoats(fetchedBoats)
        }
        fetchData()
    }, [])


    return (
        <main className="w-screen h-screen bg-bone pt-20">
            <div>Here we should render new booking form</div>
            <div>Here we should render bookings list</div>

        </main>
    )
}

export default Bookings